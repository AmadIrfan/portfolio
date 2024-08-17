/** @format */

import React from "react";
import { BookOutline } from "react-ionicons";
import TimelineItem from "./TimelineItem";
import SkillItem from "./SkillItem";




const ResumePage = ({ activeClassName }) => {
	const educationData = [
		{
			title: "University School of the Arts",
			dateRange: "2007 — 2008",
			description:
				"Nemo enim ipsam voluptatem, blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi.",
		},
		{
			title: "New York Academy of Art",
			dateRange: "2006 — 2007",
			description:
				"Ratione voluptatem sequi nesciunt, facere quisquam facere menda ossimus, omnis voluptas assumenda est omnis.",
		},
		{
			title: "High School of Art and Design",
			dateRange: "2002 — 2004",
			description:
				"Duis aute irure dolor in reprehenderit in voluptate, quia voluptas magni odit aut fugit, sed consequuntur magni dolores eos.",
		},
	];

	const experienceData = [
		{
			title: "Creative Director",
			dateRange: "2015 — Present",
			description:
				"Nemo enim ipsam voluptatem blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi.",
		},
		{
			title: "Art Director",
			dateRange: "2013 — 2015",
			description:
				"Nemo enim ipsam voluptatem, blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi.",
		},
		{
			title: "Web Designer",
			dateRange: "2010 — 2013",
			description:
				"Nemo enim ipsam voluptatem, blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi.",
		},
	];

	const skillsData = [
		{ title: "Web Design", percentage: 80 },
		{ title: "Graphic Design", percentage: 70 },
		{ title: "Branding", percentage: 90 },
		{ title: "WordPress", percentage: 50 },
	];

	return (
		<article className={activeClassName} data-page="resume">
			<header>
				<h2 className="h2 article-title">Resume</h2>
			</header>
			<section className="timeline">
				<div className="title-wrapper">
					<div className="icon-box">
						<BookOutline cssClasses="ion-icon" color="white" width="35px" />
					</div>
					<h3 className="h3">Education</h3>
				</div>
				<ol className="timeline-list">
					{educationData.map((item, index) => (
						<TimelineItem
							key={index}
							title={item.title}
							dateRange={item.dateRange}
							description={item.description}
						/>
					))}
				</ol>
			</section>
			<section className="timeline">
				<div className="title-wrapper">
					<div className="icon-box">
						<BookOutline cssClasses="ion-icon" color="white" width="35px" />
					</div>
					<h3 className="h3">Experience</h3>
				</div>
				<ol className="timeline-list">
					{experienceData.map((item, index) => (
						<TimelineItem
							key={index}
							title={item.title}
							dateRange={item.dateRange}
							description={item.description}
						/>
					))}
				</ol>
			</section>
			
			<section className="skill">
				<h3 className="h3 skills-title">My Skills</h3>
				<ul className="skills-list content-card">
					{skillsData.map((item, index) => (
						<SkillItem
							key={index}
							title={item.title}
							percentage={item.percentage}
						/>
					))}
				</ul>
			</section>
		</article>
	);
};

export default ResumePage;
