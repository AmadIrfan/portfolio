/** @format */

import React, { useState } from "react";
import ProjectItem from "./ProjectItem";
import FilterList from "./FilterList";
import FilterSelectBox from "./FilterSelectBox";

import project1 from "../../../assets/images/project-1.jpg";
import project2 from "../../../assets/images/project-2.png";
import project3 from "../../../assets/images/project-3.jpg";
import project4 from "../../../assets/images/project-4.png";
import project5 from "../../../assets/images/project-5.png";
import project6 from "../../../assets/images/project-6.png";
import project7 from "../../../assets/images/project-7.png";
import project8 from "../../../assets/images/project-8.jpg";
import project9 from "../../../assets/images/project-9.png";

const projects = [
	{
		image: project1,
		title: "Finance",
		category: "Web development",
		altText: "finance",
		link: "/#",
	},
	{
		image: project2,
		title: "Orizon",
		category: "Web development",
		altText: "orizon",
		link: "/#",
	},
	{
		image: project3,
		title: "Fundo",
		category: "Web design",
		altText: "fundo",
		link: "/#",
	},
	{
		image: project4,
		title: "Brawlhalla",
		category: "Applications",
		altText: "brawlhalla",
		link: "/#",
	},
	{
		image: project5,
		title: "DSM.",
		category: "Web design",
		altText: "dsm.",
		link: "/#",
	},
	{
		image: project6,
		title: "MetaSpark",
		category: "Web design",
		altText: "metaspark",
		link: "/#",
	},
	{
		image: project7,
		title: "Summary",
		category: "Web development",
		altText: "summary",
		link: "/#",
	},
	{
		image: project8,
		title: "Task Manager",
		category: "Applications",
		altText: "task manager",
		link: "/#",
	},
	{
		image: project9,
		title: "Arrival",
		category: "Web development",
		altText: "arrival",
		link: "/#",
	},
];

const categories = ["All", "Web design", "Applications", "Web development"];

const PortfolioPage = ({ activeClassName }) => {
	const [selectedFilter, setSelectedFilter] = useState("All");

	const handleFilterClick = (filter) => {
		setSelectedFilter(filter);
	};

	const filteredProjects =
		selectedFilter === "All"
			? projects
			: projects.filter((project) => project.category === selectedFilter);

	return (
		<article className={activeClassName} data-page="portfolio">
			<header>
				<h2 className="h2 article-title">Portfolio</h2>
			</header>
			<section className="projects">
				<FilterList filters={categories} onFilterClick={handleFilterClick} />
				<FilterSelectBox
					options={categories}
					selected={selectedFilter}
					onSelect={handleFilterClick}
				/>
				<ul className="project-list">
					{filteredProjects.map((project) => (
						<ProjectItem
							key={project.title}
							image={project.image}
							title={project.title}
							category={project.category}
							altText={project.altText}
							link={project.link}
						/>
					))}
				</ul>
			</section>
		</article>
	);
};

export default PortfolioPage;
