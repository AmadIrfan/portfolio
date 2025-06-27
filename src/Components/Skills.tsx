import React, { useState, type RefObject } from "react";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import type { Skill } from "../types/portfolio";
import { motion } from "framer-motion";

interface SkillsProps {
	skills: Skill[];
	darkMode?: boolean;
	skillsRef: RefObject<HTMLElement> | RefObject<null>;
}

const Skills: React.FC<SkillsProps> = ({ skills, darkMode, skillsRef }) => {
	const [category, setCategory] = useState("All");

	const categories = ["All", "language", "tool", "framework", "library"];

	const filteredSkills =
		category === "All"
			? skills
			: skills.filter(
					(skill) => skill.category.toLowerCase() === category.toLowerCase()
			  );

	return (
		<section
			id="skills"
			ref={skillsRef}
			className={`py-24 transition-colors duration-500 ${
				darkMode ? "bg-gray-900" : "bg-white"
			}`}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<motion.h2
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-4xl font-bold mb-4 text-gray-900 dark:text-white"
				>
					Tech Expertise
				</motion.h2>
				<div className="w-20 h-1 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-8" />

				{/* Tabs */}
				<Tabs
					defaultValue="All"
					className="mb-10 justify-center flex-row"
					onValueChange={setCategory}
				>
					<TabsList className="flex justify-center bg-transparent flex-wrap gap-3 mb-10">
						{categories.map((cat) => (
							<TabsTrigger
								key={cat}
								value={cat}
								className="capitalize text-sm px-4 py-2 rounded-full border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition"
							>
								{cat}
							</TabsTrigger>
						))}
					</TabsList>
				</Tabs>

				{/* Skills Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
					{filteredSkills.map((skill, idx) => (
						<motion.div
							key={idx}
							initial={{ opacity: 0, scale: 0.95 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.3, delay: idx * 0.05 }}
							className={`flex items-center gap-4 px-5 py-4 w-full max-w-xs border rounded-xl backdrop-blur-sm shadow-sm hover:shadow-lg transition ${
								darkMode
									? "bg-white/5 border-gray-700 text-white"
									: "bg-white/50 border-gray-200 text-gray-800"
							}`}
						>
							{skill.logo && (
								<img
									src={skill.logo}
									alt={skill.name}
									className="w-10 h-10 object-contain"
								/>
							)}
							<div className="text-left">
								<p className="text-lg font-medium">{skill.name}</p>
								<p className="text-sm text-gray-500 dark:text-gray-400">
									{/* {skill.level} */}
								</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Skills;
