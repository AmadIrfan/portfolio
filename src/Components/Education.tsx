import React, { type RefObject } from "react";
import type { Education } from "../types/portfolio.d";
import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

interface EducationProps {
	darkMode?: boolean;
	education: Education[];
	educationRef: RefObject<HTMLElement> | RefObject<null>;
}

const Educations: React.FC<EducationProps> = ({
	darkMode,
	educationRef,
	education,
}) => {
	return (
		<section
			id="education"
			ref={educationRef}
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
						Education
					</h2>
					<div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
				</motion.div>

				<div className="relative max-w-3xl flex-row  justify-center mx-auto border-l-2 border-blue-500/30 dark:border-blue-400/20 pl-6 space-y-10">
					{education.map((edu, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, x: -40 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.4, delay: index * 0.1 }}
							className={`relative group justify-center transition transform hover:scale-[1.02]`}
						>
							<div className="absolute -left-[1.05rem] top-0 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-md flex items-center justify-center">
								<GraduationCap
									size={14}
									className="text-white group-hover:rotate-12 transition-transform duration-300"
								/>
							</div>
							<div
								className={`p-6 rounded-xl shadow-md ${
									darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
								}`}
							>
								<h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
								<p className="text-blue-500 font-medium mb-1">
									{edu.institution}
								</p>
								<p className="text-sm mb-3 text-gray-500 dark:text-gray-400">
									{edu.startYear} - {edu.endYear}
								</p>
								<p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
									{edu.description}
								</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Educations;
