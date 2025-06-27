import React, { useEffect, useRef } from "react";

interface AnimatedGraphNodesProps {
	darkMode?: boolean;
}

const AnimatedGraphNodes: React.FC<AnimatedGraphNodesProps> = ({ darkMode }) => {
	const canvasRef = useRef(null);
	const animationRef = useRef(null);
	const nodesRef = useRef([]);
	const mouseRef = useRef({ x: 0, y: 0 });

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		const resizeCanvas = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};

		resizeCanvas();
		window.addEventListener("resize", resizeCanvas);

		// Mouse tracking for interactive effects
		const handleMouseMove = (e) => {
			mouseRef.current = { x: e.clientX, y: e.clientY };
		};
		window.addEventListener("mousemove", handleMouseMove);

		// Create floating graph nodes
		const createGraphNodes = () => {
			const nodes = [];
			const nodeCount = Math.floor((canvas.width * canvas.height) / 12000);
			const colors = [
				{ r: 59, g: 130, b: 246 }, // Blue
				{ r: 147, g: 51, b: 234 }, // Purple
				{ r: 236, g: 72, b: 153 }, // Pink
				{ r: 34, g: 197, b: 94 }, // Green
				{ r: 251, g: 191, b: 36 }, // Yellow
				{ r: 239, g: 68, b: 68 }, // Red
			];

			for (let i = 0; i < nodeCount; i++) {
				const color = colors[Math.floor(Math.random() * colors.length)];
				nodes.push({
					id: i,
					x: Math.random() * canvas.width,
					y: Math.random() * canvas.height,
					vx: (Math.random() - 0.5) * 0.8,
					vy: (Math.random() - 0.5) * 0.8,
					radius: Math.random() * 4 + 2,
					baseRadius: Math.random() * 4 + 2,
					color: color,
					pulse: Math.random() * Math.PI * 2,
					pulseSpeed: Math.random() * 0.02 + 0.01,
					connectionStrength: Math.random() * 0.5 + 0.5,
					glowIntensity: Math.random() * 0.3 + 0.1,
					nodeType: Math.random() > 0.7 ? "hub" : "regular", // Some nodes are connection hubs
				});
			}
			return nodes;
		};

		nodesRef.current = createGraphNodes();

		const animate = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			const nodes = nodesRef.current;
			const mouse = mouseRef.current;

			// Update and draw nodes
			nodes.forEach((node, i) => {
				// Update pulse animation
				node.pulse += node.pulseSpeed;
				node.radius = node.baseRadius + Math.sin(node.pulse) * 1;

				// Mouse interaction - nodes are attracted to mouse
				const mouseDistance = Math.sqrt(
					(mouse.x - node.x) ** 2 + (mouse.y - node.y) ** 2
				);
				if (mouseDistance < 150) {
					const force = ((150 - mouseDistance) / 150) * 0.02;
					const angle = Math.atan2(mouse.y - node.y, mouse.x - node.x);
					node.vx += Math.cos(angle) * force;
					node.vy += Math.sin(angle) * force;
				}

				// Update position with some resistance
				node.x += node.vx;
				node.y += node.vy;
				node.vx *= 0.99; // Add some friction
				node.vy *= 0.99;

				// Boundary behavior - gentle bounce
				if (node.x < 0) {
					node.x = 0;
					node.vx = Math.abs(node.vx) * 0.8;
				}
				if (node.x > canvas.width) {
					node.x = canvas.width;
					node.vx = -Math.abs(node.vx) * 0.8;
				}
				if (node.y < 0) {
					node.y = 0;
					node.vy = Math.abs(node.vy) * 0.8;
				}
				if (node.y > canvas.height) {
					node.y = canvas.height;
					node.vy = -Math.abs(node.vy) * 0.8;
				}

				// Draw node glow effect
				const glowRadius = node.radius * (2 + node.glowIntensity);
				const gradient = ctx.createRadialGradient(
					node.x,
					node.y,
					0,
					node.x,
					node.y,
					glowRadius
				);
				gradient.addColorStop(
					0,
					`rgba(${node.color.r}, ${node.color.g}, ${node.color.b}, ${
						darkMode ? 0.8 : 0.6
					})`
				);
				gradient.addColorStop(
					0.4,
					`rgba(${node.color.r}, ${node.color.g}, ${node.color.b}, ${
						darkMode ? 0.4 : 0.3
					})`
				);
				gradient.addColorStop(
					1,
					`rgba(${node.color.r}, ${node.color.g}, ${node.color.b}, 0)`
				);

				ctx.beginPath();
				ctx.arc(node.x, node.y, glowRadius, 0, Math.PI * 2);
				ctx.fillStyle = gradient;
				ctx.fill();

				// Draw main node
				ctx.beginPath();
				ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
				ctx.fillStyle = `rgba(${node.color.r}, ${node.color.g}, ${
					node.color.b
				}, ${darkMode ? 0.9 : 0.7})`;
				ctx.fill();

				// Add inner highlight
				ctx.beginPath();
				ctx.arc(
					node.x - node.radius * 0.3,
					node.y - node.radius * 0.3,
					node.radius * 0.3,
					0,
					Math.PI * 2
				);
				ctx.fillStyle = `rgba(255, 255, 255, ${darkMode ? 0.3 : 0.4})`;
				ctx.fill();

				// Draw connections with dynamic behavior
				nodes.slice(i + 1).forEach((otherNode) => {
					const dx = node.x - otherNode.x;
					const dy = node.y - otherNode.y;
					const distance = Math.sqrt(dx * dx + dy * dy);
					const maxDistance =
						node.nodeType === "hub" || otherNode.nodeType === "hub" ? 150 : 120;

					if (distance < maxDistance) {
						const opacity =
							(1 - distance / maxDistance) *
							node.connectionStrength *
							otherNode.connectionStrength;

						// Create gradient for connection line
						const lineGradient = ctx.createLinearGradient(
							node.x,
							node.y,
							otherNode.x,
							otherNode.y
						);
						lineGradient.addColorStop(
							0,
							`rgba(${node.color.r}, ${node.color.g}, ${node.color.b}, ${
								opacity * (darkMode ? 0.6 : 0.4)
							})`
						);
						lineGradient.addColorStop(
							0.5,
							`rgba(${(node.color.r + otherNode.color.r) / 2}, ${
								(node.color.g + otherNode.color.g) / 2
							}, ${(node.color.b + otherNode.color.b) / 2}, ${
								opacity * (darkMode ? 0.8 : 0.6)
							})`
						);
						lineGradient.addColorStop(
							1,
							`rgba(${otherNode.color.r}, ${otherNode.color.g}, ${
								otherNode.color.b
							}, ${opacity * (darkMode ? 0.6 : 0.4)})`
						);

						ctx.beginPath();
						ctx.moveTo(node.x, node.y);
						ctx.lineTo(otherNode.x, otherNode.y);
						ctx.strokeStyle = lineGradient;
						ctx.lineWidth = opacity * 2 + 0.5;
						ctx.stroke();

						// Add flowing particles along connections for strong connections
						if (opacity > 0.5) {
							const particlePos = (Date.now() * 0.001 + node.id * 0.1) % 1;
							const particleX = node.x + (otherNode.x - node.x) * particlePos;
							const particleY = node.y + (otherNode.y - node.y) * particlePos;

							ctx.beginPath();
							ctx.arc(particleX, particleY, 1, 0, Math.PI * 2);
							ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 0.8})`;
							ctx.fill();
						}
					}
				});
			});

			// Add floating data fragments
			const time = Date.now() * 0.001;
			for (let i = 0; i < 5; i++) {
				const x = (Math.sin(time * 0.3 + i) * 0.5 + 0.5) * canvas.width;
				const y = (Math.cos(time * 0.2 + i * 1.5) * 0.5 + 0.5) * canvas.height;
				const size = Math.sin(time + i) * 2 + 3;

				ctx.beginPath();
				ctx.rect(x - size / 2, y - size / 2, size, size);
				ctx.fillStyle = `rgba(59, 130, 246, ${darkMode ? 0.3 : 0.2})`;
				ctx.fill();

				// Add binary-like text effect
				if (Math.sin(time * 2 + i) > 0.7) {
					ctx.font = "10px monospace";
					ctx.fillStyle = `rgba(59, 130, 246, ${darkMode ? 0.5 : 0.3})`;
					ctx.fillText(Math.random() > 0.5 ? "1" : "0", x + 10, y);
				}
			}

			animationRef.current = requestAnimationFrame(animate);
		};

		animate();

		return () => {
			window.removeEventListener("resize", resizeCanvas);
			window.removeEventListener("mousemove", handleMouseMove);
			if (animationRef.current) {
				cancelAnimationFrame(animationRef.current);
			}
		};
	}, [darkMode]);

	return (
		<canvas
			ref={canvasRef}
			className="fixed inset-0 pointer-events-none z-0"
			style={{ opacity: 0.7 }}
		/>
	);
};

export default AnimatedGraphNodes;
