import React, { useEffect, useMemo, useRef, useState } from "react";
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
import type { PortfolioData, SectionInterface } from "../types/portfolio";
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

	const sections: SectionInterface[] = useMemo(
		() => [
			{
				id: "about",
				label: "About",
				ref: aboutRef,
				enable: portfolioData.showSections.about,
			},
			{
				id: "skills",
				label: "Tech Expertise",
				ref: skillsRef,
				enable: portfolioData.showSections.skills,
			},
			{
				id: "education",
				label: "Education",
				ref: educationRef,
				enable: portfolioData.showSections.education,
			},
			{
				id: "experience",
				label: "Experience",
				ref: experienceRef,
				enable: portfolioData.showSections.experience,
			},
			{
				id: "projects",
				label: "Projects",
				ref: projectsRef,
				enable: portfolioData.showSections.projects,
			},
			{
				id: "reviews",
				label: "Reviews",
				ref: reviewsRef,
				enable: portfolioData.showSections.reviews,
			},
			{
				id: "certifications",
				label: "Certification",
				ref: certificationsRef,
				enable: portfolioData.showSections.certifications,
			},
			{
				id: "contact",
				label: "Contact",
				ref: contactRef,
				enable: portfolioData.showSections.contact,
			},
		],
		[portfolioData]
	);

	function setAppDarkMode(v: boolean) {
		setDarkMode(v);
		setLoaderDarkMode(v);
	}
	useEffect(() => {
		const prefersDark = window.matchMedia(
			"(prefers-color-scheme: dark)"
		).matches;
		setDarkMode(prefersDark);
		setLoaderDarkMode(prefersDark);

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

		const elements = [
			aboutRef.current,
			skillsRef.current,
			educationRef.current,
			experienceRef.current,
			projectsRef.current,
			reviewsRef.current,
			certificationsRef.current,
			contactRef.current,
		];

		elements.forEach((el) => {
			if (el) observer.observe(el);
		});

		return () => {
			elements.forEach((el) => {
				if (el) observer.unobserve(el);
			});
			observer.disconnect();
		};
	}, []);

	const scrollToSection = (sectionId: string) => {
		const section = sections.find((s) => s.id === sectionId);

		if (!section || !section.ref.current) return;

		// Scroll smoothly to the section
		section.ref.current.scrollIntoView({ behavior: "smooth" });

		// Immediately update active section for better UX
		setActiveSection(section.id);

		// Close mobile menu if open
		if (mobileMenuOpen) {
			setMobileMenuOpen(false);
		}
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

			{portfolioData.showSections.hero && (
				<Hero
					profile={portfolioData.profile}
					contact={portfolioData.contact}
					scrollToSection={scrollToSection}
					heroRef={heroRef}
					darkMode={darkMode}
				/>
			)}
			{portfolioData.showSections.about && (
				<About
					profile={portfolioData.profile}
					darkMode={darkMode}
					aboutRef={aboutRef}
				/>
			)}
			{portfolioData.showSections.skills && (
				<Skills
					skills={portfolioData.skills}
					darkMode={darkMode}
					skillsRef={skillsRef}
				/>
			)}
			{portfolioData.showSections.education && (
				<Educations
					education={portfolioData.education}
					darkMode={darkMode}
					educationRef={educationRef}
				/>
			)}
			{portfolioData.showSections.experience && (
				<Experiences
					experience={portfolioData.experience}
					darkMode={darkMode}
					experienceRef={experienceRef}
				/>
			)}
			{portfolioData.showSections.projects && (
				<Projects
					projects={portfolioData.projects}
					darkMode={darkMode}
					projectsRef={projectsRef}
				/>
			)}
			{portfolioData.showSections.certifications && (
				<Certifications
					darkMode={darkMode}
					certificationsRef={certificationsRef}
					certifications={portfolioData.certifications}
				/>
			)}
			{portfolioData.showSections.reviews && (
				<Reviews
					reviews={portfolioData.reviews}
					darkMode={darkMode}
					reviewsRef={reviewsRef}
				/>
			)}
			{portfolioData.showSections.contact && (
				<Contacts
					contact={portfolioData.contact}
					darkMode={darkMode}
					contactRef={contactRef}
				/>
			)}
			{portfolioData.showSections.footer && (
				<Footer
					profile={portfolioData.profile}
					contact={portfolioData.contact}
					darkMode={darkMode}
					scrollToSection={scrollToSection}
					sections={sections}
				/>
			)}
			{portfolioData.showSections.sideIcons && (
				<SocialSidebar
					darkMode={darkMode}
					socialLinks={portfolioData.contact.social}
					position={"right"}
				/>
			)}
		</div>
	);
};

export default Main;
