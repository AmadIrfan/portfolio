// This will be the entry component for the admin side.
// Each section (Profile, Skills, Projects, etc.) will have its own component with CRUD functionality.

import React from "react";
import ProfileManager from "./admin/sections/ProfileManager";
import SkillsManager from "./admin/sections/SkillsManager";
import type { PortfolioData } from "../types/portfolio";
import ProjectsManager from "./admin/sections/ProjectsManager";
// Add other managers: ProjectsManager, EducationManager, etc.
type AdminDashboardProps = {
	portfolio: PortfolioData; // Adjust type as needed
};

const AdminDashboard: React.FC<AdminDashboardProps> = ({ portfolio }) => {
	return (
		<div className="min-h-screen p-4 bg-gray-100 text-gray-800">
			<h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
			<div className="space-y-10">
				<ProfileManager profile={portfolio.profile} />
				<SkillsManager skill={portfolio.skills} />
				{/* Add more sections below */}
				<ProjectsManager projects={portfolio.projects} />
				{/* <EducationManager /> */}
				{/* <CertificationsManager /> */}
				{/* <ExperienceManager /> */}
				{/* <ContactManager /> */}
			</div>
		</div>
	);
};

export default AdminDashboard;
