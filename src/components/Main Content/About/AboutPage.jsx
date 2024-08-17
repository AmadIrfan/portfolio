/** @format */

import React from "react";

import AboutMe from "./AboutMe";
import Services from "./Services";
import Clients from "./Clients";
import Testimonial from "./Testimonial";

const AboutPage = ({ activeClassName }) => {
	return (
		<article className={activeClassName} data-page="about">
			<header>
				<h2 className="h2 article-title">About me</h2>
			</header>

			<AboutMe />
			{/*- service*/}
			<Services />
			{/*- testimonials*/}
			<Testimonial />
			{/*- clients*/}
			<Clients />
		</article>
	);
};

export default AboutPage;
