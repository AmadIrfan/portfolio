/** @format */

import React from "react";
import NavBar from "./NavBar";
import AboutPage from "./About/AboutPage";
import ResumePage from "./Resume/ResumePage";
import PortfolioPage from "./Portfolio/PortfolioPage";
import BlogPage from "./Blog/BlogPage";

const Main = (props) => {
	return (
		<div className="main-content">
			<NavBar />
			{/*- #ABOUT*/}
			<AboutPage />
			{/* - #RESUME*/}
			<ResumePage />
			{/*- #PORTFOLIO*/}
			<PortfolioPage />
			{/*- #BLOG*/}
			<BlogPage />
			{/*- #CONTACT*/}
		</div>
	);
};

export default Main;
