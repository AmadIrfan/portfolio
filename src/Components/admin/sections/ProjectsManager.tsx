import React, { type FC } from "react";
import type { Project } from "../../../types/portfolio";

const ProjectsManager: FC<{ projects: Project[] }> = ({ projects }) => {
	return (
		<div className="bg-white p-6 rounded shadow">
			<h2 className="text-xl font-semibold mb-4">Projects</h2>

			<div className="project-list">
				{projects.map((project, index) => (
					<div key={`project-key-${index}`} className="mb-5  ">
						<div key={`c0-${index}`} className=" text-2xl">
							Project {index + 1}
						</div>

						<div className="p-2">
							<label className="m" htmlFor="">
								Title
							</label>

							<input
								readOnly
								key={`cc1-${index}`}
								className="block  p-2 border font-bold rounded w-full md:w-xl"
								value={project.title}
							/>
						</div>
						<div className="m-2 px-2">
							<input
								readOnly
								type="checkbox"
								key={`cc8-${index}`}
								className="p-2 border rounded"
								value={project.isCompleted}
							/>
							<label htmlFor="" className="ml-1">
								Completed
							</label>
						</div>

						<div className="px-2 mb-2">
							<label htmlFor="">Description</label>{" "}
                            <textarea
                                readOnly
								key={`cc2-${index}`}
								className=" block p-2 border rounded w-full "
								value={project.description}
							/>
						</div>
						<div key={`cc4-${index}`} className="flex flex-row flex-wrap ">
							{project.github && (
								<div className="px-2 mb-2">
									<label htmlFor="">Github Url</label>
									<input
										readOnly
										key={`cc41-${index}`}
										className="p-2 border overflow-x-auto rounded w-full md:w-xl h-fit"
										value={project.github}
									/>
								</div>
							)}
							{project.image && (
								<div className="px-2 mb-2">
									<label htmlFor="">Image URL</label>

									<input
										readOnly
										key={`cc42-${index}`}
										className="p-2 border overflow-x-auto rounded w-full md:w-xl h-fit"
										value={project.image}
									/>
								</div>
							)}
							{project.liveDemo && (
								<div className="px-2 mb-2">
									<label htmlFor="">Demo URL</label>
									<input
										readOnly
										key={`cc3-${index}`}
										className="p-2 border rounded w-full md:w-xl h-fit"
										value={project.liveDemo}
									/>
								</div>
							)}
						</div>
						<div className="md:flex md:flex-row md:flex-wrap block">
							<div className="ml-2 w-full md:w-fit">
								<label htmlFor="">Start Date</label>
								<input
									readOnly
									key={`cc6-${index}`}
									className="block p-2 w-full border rounded"
									value={project.endDate}
								/>
							</div>
							<div className="ml-2 w-full md:w-fit">
								<label htmlFor="">End Date</label>
								<input
									readOnly
									key={`cc7-${index}`}
									className="block w-full p-2 border rounded"
									value={project.startDate}
								/>
							</div>
						</div>
						<div className="px-2 py-1 mt-3">
							<label className="font-bold" htmlFor="">
								Tools Used
							</label>
							<div className="block">
								{project.tech.map((v, i) => {
									return (
										<input
											readOnly
											key={`cc9-${index}-${i}`}
											className="p-2 border m-1 w-full md:w-sm	 rounded"
											value={v}
										/>
									);
								})}
							</div>
						</div>
						<div className="w-full h-1 bg-gray-700 rounded-2xl mt-4"></div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ProjectsManager;
