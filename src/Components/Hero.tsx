import React, { useEffect, useState, type RefObject } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import type { Profile, Contact } from "../types/portfolio.d";
import { motion } from "framer-motion";
import profileImg from "../assets/imges.png"; // Adjust the path as necessary
import VerticalSocialIcons from "./VerticalSocialIcons";

interface HeroProps {
	darkMode?: boolean;
	profile: Profile;
	contact: Contact;
	scrollToSection: (section: string) => void;
	heroRef?: RefObject<HTMLElement> | RefObject<null>;
}

const Hero: React.FC<HeroProps> = ({
	contact,
	profile,
	scrollToSection,
	heroRef,
}) => {
	const [text, setText] = useState("");
	const [index, setIndex] = useState(0);
	const [subIndex, setSubIndex] = useState(0);
	const [deleting, setDeleting] = useState(false);
	const [blink, setBlink] = useState(true);

	const titles = profile.designation;

	// Typewriter logic
	useEffect(() => {
		const current = titles[index];
		if (deleting) {
			if (subIndex > 0) {
				setTimeout(() => setSubIndex(subIndex - 1), 50);
			} else {
				setDeleting(false);
				setIndex((prev) => (prev + 1) % titles.length);
			}
		} else {
			if (subIndex < current.length) {
				setTimeout(() => setSubIndex(subIndex + 1), 100);
			} else {
				setTimeout(() => setDeleting(true), 1500);
			}
		}
	}, [subIndex, deleting]);

	useEffect(() => {
		setText(titles[index].substring(0, subIndex));
	}, [subIndex]);

	useEffect(() => {
		const blinkInterval = setInterval(() => setBlink((prev) => !prev), 500);
		return () => clearInterval(blinkInterval);
	}, []);

	return (
		<section
			id="home"
			ref={heroRef}
			className="relative min-h-screen w-full pt-24 flex items-center justify-center overflow-hidden"
		>
			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center space-y-6">
					{/* Image */}
					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.6 }}
						className="mb-6"
					>
						<img
							src={
								profile.imageUrl.length === 0
									? profileImg
									: profile.imageUrl[profile.heroImageIndex]
							}
							alt={profile.name}
							className="w-44 h-44 rounded-full mx-auto border-4 border-white shadow-2xl hover:scale-105 transition-transform duration-300"
						/>
					</motion.div>

					{/* Name */}
					<motion.h1
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent"
					>
						{profile.name}
					</motion.h1>

					{/* Typewriter Designation */}
					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.8, duration: 0.6 }}
						className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-mono min-h-[2rem]"
					>
						{text}
						<span
							className={`inline-block w-1 bg-blue-500 ml-1 ${
								blink ? "opacity-100" : "opacity-0"
							}`}
						>
							&nbsp;
						</span>
					</motion.p>

					{/* Buttons */}
					<VerticalSocialIcons contact={contact} />
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 1, duration: 0.6 }}
						className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6"
					>
						<Button
							className="px-8 py-3 text-base font-semibold rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 hover:scale-105 transition-all shadow-lg"
							onClick={() => scrollToSection("contact")}
						>
							Contact Me
						</Button>

						<Button
							variant="outline"
							className="px-8 py-3 text-base font-semibold rounded-full border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white hover:scale-105 transition-all"
							onClick={() => scrollToSection("projects")}
						>
							View Projects
						</Button>
					</motion.div>

					{/* Scroll Down Icon */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 1.3 }}
						className="animate-bounce mt-8"
					>
						<ChevronDown size={32} className="mx-auto text-gray-400" />
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
