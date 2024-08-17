/** @format */

import React from "react";
import { EyeOutline } from "react-ionicons";

const ProjectItem = ({ image, title, category, altText, link }) => (
	<li className="project-item active" data-filter-item data-category={category}>
		<a href={link}>
			<figure className="project-img">
				<div className="project-item-icon-box">
					<EyeOutline />
				</div>
				<img src={image} alt={altText} loading="lazy" />
			</figure>
			<h3 className="project-title">{title}</h3>
			<p className="project-category">{category}</p>
		</a>
	</li>
);

export default ProjectItem;
