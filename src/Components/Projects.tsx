import React, { type RefObject } from "react";
import type { Project } from "../types/portfolio";
import { Github, ExternalLink, WorkflowIcon } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectsProps {
	projects: Project[];
	darkMode?: boolean;
	projectsRef: RefObject<HTMLElement> | RefObject<null>;
}

const Projects: React.FC<ProjectsProps> = ({
	projectsRef,
	darkMode,
	projects,
}) => {
	return (
		<section
			id="projects"
			ref={projectsRef}
			className={`py-24 transition-colors duration-500 ${
				darkMode ? "bg-gray-900" : "bg-white"
			}`}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
						Projects
					</h2>
					<div className="w-20 h-1 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
				</motion.div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
					{projects.map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: index * 0.1 }}
							className={`rounded-2xl overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ${
								darkMode ? "bg-gray-800" : "bg-gray-100"
							}`}
						>
							<div className="relative overflow-hidden">
								{project.image && (
									<img
										src={project.image}
										alt={project.title}
										className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
									/>
								)}
								<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
							</div>

							<div className="p-6 space-y-4">
								<div className="text-xl font-semibold text-gray-900 dark:text-white">
									{project.isCompleted && <WorkflowIcon className="inline" />}{" "}
									{project.title}
								</div>
								<p className="text-sm text-gray-600 dark:text-gray-400">
									{project.description}
								</p>

								<div className="flex flex-wrap gap-2">
									{project.tech.map((tech, techIndex) => (
										<span
											key={techIndex}
											className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300"
										>
											{tech}
										</span>
									))}
								</div>

								<div className="flex space-x-5 pt-2">
									{project.github && (
										<a
											href={project.github}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-500"
										>
											<Github size={18} />
											<span>Code</span>
										</a>
									)}
									{project.liveDemo && (
										<a
											href={project.liveDemo}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-300 hover:text-purple-500"
										>
											<ExternalLink size={18} />
											<span>Demo</span>
										</a>
									)}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
