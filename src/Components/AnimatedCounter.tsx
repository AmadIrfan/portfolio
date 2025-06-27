import React, { useEffect, useRef, useState } from "react";

interface AnimatedCounter {
	darkMode?: boolean;
	end: number;
	duration?: number ;
	// Define props here
}

const AnimatedCounter: React.FC<AnimatedCounter> = ({
	end,
	duration = 2000,
}) => {
	const [count, setCount] = useState(0);
	const [isVisible, setIsVisible] = useState(false);
	const ref = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && !isVisible) {
					setIsVisible(true);
				}
			},
			{ threshold: 0.1 }
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => observer.disconnect();
	}, [isVisible]);

	useEffect(() => {
		if (isVisible) {
			let start = 0;
			const increment = end / (duration / 16);
			const timer = setInterval(() => {
				start += increment;
				if (start >= end) {
					setCount(end);
					clearInterval(timer);
				} else {
					setCount(Math.floor(start));
				}
			}, 16);
		}
	}, [isVisible, end, duration]);

	return <span ref={ref}>{count}</span>;
};

export default AnimatedCounter;
