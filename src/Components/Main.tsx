import React, { useEffect, useRef, useState } from "react";
import Hero from "./Hero";
import About from "./About";
import Footer from "./Footer";
import Skills from "./Skills";
import Navbar from "./Navbar";
import Contacts from "./Contact";
import Reviews from "./Reviews";
import Projects from "./Projects";
import Educations from "./Education";
import Experiences from "./Experience";

import Certifications from "./Certifications";
import SocialSidebar from "./SocialSidebar";
import type { PortfolioData } from "../types/portfolio";
interface MainProps {
	portfolioData: PortfolioData;
	setLoaderDarkMode: (v: boolean) => void;
}

const Main: React.FC<MainProps> = ({ portfolioData, setLoaderDarkMode }) => {
	const [activeSection, setActiveSection] = useState("home");
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [darkMode, setDarkMode] = React.useState(true);
	const heroRef = useRef<HTMLElement>(null);
	const aboutRef = useRef<HTMLElement>(null);
	const skillsRef = useRef<HTMLElement>(null);
	const educationRef = useRef<HTMLElement>(null);
	const certificationsRef = useRef<HTMLElement>(null);
	const experienceRef = useRef<HTMLElement>(null);
	const projectsRef = useRef<HTMLElement>(null);
	const reviewsRef = useRef<HTMLElement>(null);
	const contactRef = useRef<HTMLElement>(null);

	const sections = [
		// { id: "home", label: "Home", ref: heroRef },
		{ id: "about", label: "About", ref: aboutRef },
		{ id: "skills", label: "Tech Expertise", ref: skillsRef },
		{ id: "education", label: "Education", ref: educationRef },
		{ id: "experience", label: "Experience", ref: experienceRef },
		{ id: "projects", label: "Projects", ref: projectsRef },
		// { id: "reviews", label: "Reviews", ref: reviewsRef },
		{ id: "certifications", label: "Certification", ref: certificationsRef },
		{ id: "contact", label: "Contact", ref: contactRef },
	];

	function setAppDarkMode(v: boolean) {
		setDarkMode(v);
		setLoaderDarkMode(v);
	}
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id);
					}
				});
			},
			{ threshold: 0.3 }
		);

		sections.forEach((section) => {
			if (section.ref.current) {
				observer.observe(section.ref.current);
			}
		});

		return () => observer.disconnect();
	}, []);

	const scrollToSection = (sectionId: string) => {
		const section = sections.find((s) => s.id === sectionId);

		if (section?.ref.current) {
			section.ref.current.scrollIntoView({ behavior: "smooth" });
		}
		setMobileMenuOpen(false);
	};

	return (
		<div
			className={`min-h-screen transition-colors duration-300 ${
				darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"
			} relative overflow-hidden`}
		>
			<Navbar
				darkMode={darkMode}
				setDarkMode={setAppDarkMode}
				profile={portfolioData.profile}
				sections={sections}
				setMobileMenuOpen={setMobileMenuOpen}
				mobileMenuOpen={mobileMenuOpen}
				activeSection={activeSection}
				scrollToSection={scrollToSection}
			/>
			<Hero
				profile={portfolioData.profile}
				contact={portfolioData.contact}
				scrollToSection={scrollToSection}
				heroRef={heroRef}
				darkMode={darkMode}
			/>
			<About
				profile={portfolioData.profile}
				darkMode={darkMode}
				aboutRef={aboutRef}
			/>
			<Skills
				skills={portfolioData.skills}
				darkMode={darkMode}
				skillsRef={skillsRef}
			/>
			<Educations
				education={portfolioData.education}
				darkMode={darkMode}
				educationRef={educationRef}
			/>
			<Experiences
				experience={portfolioData.experience}
				darkMode={darkMode}
				experienceRef={experienceRef}
			/>
			<Projects
				projects={portfolioData.projects}
				darkMode={darkMode}
				projectsRef={projectsRef}
			/>
			<Certifications
				darkMode={darkMode}
				certificationsRef={certificationsRef}
				certifications={portfolioData.certifications}
			/>
			<Reviews
				reviews={portfolioData.reviews}
				darkMode={darkMode}
				reviewsRef={reviewsRef}
			/>
			<Contacts
				contact={portfolioData.contact}
				darkMode={darkMode}
				contactRef={contactRef}
			/>
			<Footer
				profile={portfolioData.profile}
				contact={portfolioData.contact}
				darkMode={darkMode}
				scrollToSection={scrollToSection}
				sections={sections}
			/>
			<SocialSidebar
				darkMode={darkMode}
				socialLinks={portfolioData.contact.social}
				position={"right"}
			/>
		</div>
	);
};

export default Main;
