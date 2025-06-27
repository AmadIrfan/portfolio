import React from "react";
import { Github, Linkedin, Twitter, Mail, Instagram } from "lucide-react";

interface SocialSidebarProps {
	darkMode?: boolean;
	socialLinks: {
		github?: string;
		linkedin?: string;
		x?: string;
		instagram?: string;
		mail?: string;
	};
	position?: "left" | "right";
}

const SocialSidebar: React.FC<SocialSidebarProps> = ({
	darkMode,
	socialLinks,
	position,
}) => {
	const baseClass = `fixed bottom-10 ${position}-150 z-50 flex flex-col items-center space-y-4`;
	const iconClass =
		"text-white bg-gradient-to-tr from-blue-500 to-purple-600 hover:scale-110 transition-all p-2 rounded-full shadow-lg";

	const iconColor = darkMode ? "text-white" : "text-gray-800";

	return (
		<div className={`${baseClass} pl-2`}>
			<div className="w-0.5 h-10 bg-gray-400 mb-4" />
			{socialLinks.linkedin && (
				<a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
					<Linkedin className={`${iconClass} ${iconColor}`} size={30} />
				</a>
			)}
			{socialLinks.github && (
				<a href={socialLinks.github} target="_blank" rel="noreferrer">
					<Github className={`${iconClass} ${iconColor}`} size={30} />
				</a>
			)}
			{socialLinks.x && (
				<a href={socialLinks.x} target="_blank" rel="noreferrer">
					<Twitter className={`${iconClass} ${iconColor}`} size={30} />
				</a>
			)}
			{socialLinks.instagram && (
				<a href={socialLinks.instagram} target="_blank" rel="noreferrer">
					<Instagram className={`${iconClass} ${iconColor}`} size={30} />
				</a>
			)}
			{socialLinks.mail && (
				<a href={`mailto:${socialLinks.mail}`}>
					<Mail className={`${iconClass} ${iconColor}`} size={30} />
				</a>
			)}
			{/* Line connecting icons to bottom */}
			<div className="w-0.5 h-10 bg-gray-400 mt-1" />
		</div>
	);
};

export default SocialSidebar;
