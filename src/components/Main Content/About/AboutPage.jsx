/** @format */

import React from "react";

import AboutMe from "./AboutMe";
import Services from "./Services";
import Clients from "./Clients";
import TestimonialModel from "./TestimonialModel";
import Testimonial from "./Testimonial";

const AboutPage = (props) => {
	return (
		<article className="about  active" data-page="about">
			<AboutMe />
			{/*- service*/}
			<Services />
			{/*- testimonials*/}
			<Testimonial />
			{/*- testimonials modal*/}
			<TestimonialModel />
			{/*- clients*/}
			<Clients />
		</article>
	);
};

export default AboutPage;
