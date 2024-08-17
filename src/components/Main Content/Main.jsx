/** @format */

import React, { useState } from "react";
import NavBar from "./NavBar";
import AboutPage from "./About/AboutPage";
import ResumePage from "./Resume/ResumePage";
import ContactPage from "./Contact/ContactPage";
import PortfolioPage from "./Portfolio/PortfolioPage";
import BlogPage from "./Blog/BlogPage";

const Main = () => {
	const [activePage, setActivePage] = useState("about");

	const handleNavClick = (page) => {
		console.log("this");

		setActivePage(page);
		window.scrollTo(0, 0);
	};

	return (
		<div className="main-content">
			<NavBar ContentChangeBtn={handleNavClick} />
			<AboutPage activeClassName={activePage === "about" ? "about active" : "about"} />
			<ResumePage activeClassName={activePage === "resume" ? "resume active" : "resume"} />
			<PortfolioPage activeClassName={activePage === "portfolio" ? "portfolio active" : "portfolio"} />
			<BlogPage activeClassName={activePage === "blog" ? "blog active" : "blog"} />
			<ContactPage activeClassName={activePage === "contact" ? " contact active" : "contact"} />
		</div>
	);
};

export default Main;

// /** @format */

// import React from "react";
// import NavBar from "./NavBar";
// import AboutPage from "./About/AboutPage";
// import ResumePage from "./Resume/ResumePage";
// import PortfolioPage from "./Portfolio/PortfolioPage";
// import BlogPage from "./Blog/BlogPage";

// const Main = ({ children }) => {
// 	return (
// 		<div className="main-content">
// 			<NavBar />
// 			{/*- #ABOUT*/}
// 			<AboutPage />
// 			{/* - #RESUME*/}
// 			<ResumePage />
// 			{/*- #PORTFOLIO*/}
// 			<PortfolioPage />
// 			{/*- #BLOG*/}
// 			<BlogPage />- #CONTACT
// 		</div>
// 	);
// };

// export default Main;
