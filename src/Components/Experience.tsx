import React, { type RefObject } from "react";
import type { Experience } from "../types/portfolio.d";
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

interface ExperienceProps {
	darkMode?: boolean;
	experience: Experience[];
	experienceRef: RefObject<HTMLElement> | RefObject<null>;
}

const Experiences: React.FC<ExperienceProps> = ({
	darkMode,
	experience,
	experienceRef,
}) => {
	return (
		<section
			id="experience"
			ref={experienceRef}
			className={`py-24 transition-colors duration-500 ${
				darkMode ? "bg-gray-900" : "bg-white"
			}`}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
						Experience
					</h2>
					<div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
				</motion.div>

				<div className="relative max-w-3xl mx-auto border-l-2 border-purple-500/30 dark:border-purple-400/20 pl-6 space-y-10">
					{experience.map((exp, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, x: -40 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.4, delay: index * 0.1 }}
							className="relative group transition transform hover:scale-[1.02]"
						>
							<div className="absolute -left-[1.05rem] top-1 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-md flex items-center justify-center">
								<Briefcase
									size={14}
									className="text-white group-hover:rotate-12 transition-transform duration-300"
								/>
							</div>
							<div
								className={`p-6 rounded-xl shadow-md ${
									darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
								}`}
							>
								<h3 className="text-xl font-semibold mb-1">{exp.role}</h3>
								<p className="text-purple-500 font-medium mb-1">
									{exp.company}
								</p>
								<p className="text-sm mb-3 text-gray-500 dark:text-gray-400">
									{exp.duration}
								</p>
								<p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
									{exp.description}
								</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Experiences;
