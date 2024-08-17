/** @format */

import React from "react";

const SkillItem = ({ title, percentage }) => (
	<li className="skills-item">
		<div className="title-wrapper">
			<h5 className="h5">{title}</h5>
			<data value={percentage}>{percentage}%</data>
		</div>
		<div className="skill-progress-bg">
			<div
				className="skill-progress-fill"
				style={{ width: `${percentage}%` }}
			/>
		</div>
	</li>
);

export default SkillItem;
