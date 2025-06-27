import React from "react";
import type { Contact, Profile } from "../types/portfolio";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

interface FooterProps {
	contact: Contact;
	profile: Profile & { designation: string[] }; // designation is now a list
	darkMode: boolean;
	sections: {
		id: string;
		label: string;
		ref: React.RefObject<HTMLElement> | React.RefObject<null>;
	}[];
	scrollToSection: (id: string) => void;
}

const staggerContainer = {
	initial: {},
	animate: {
		transition: {
			staggerChildren: 0.15,
		},
	},
};

const fadeUpItem = {
	initial: { opacity: 0, y: 10 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 0.4 },
};

const Footer: React.FC<FooterProps> = ({
	darkMode,
	profile,
	contact,
	sections,
	scrollToSection,
}) => {
	return (
		<footer
			className={`py-16 transition-colors duration-500 ${
				darkMode
					? "bg-gray-900 border-t border-gray-800"
					: "bg-white border-t border-gray-200"
			}`}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid md:grid-cols-3 gap-12">
					<motion.div
						initial="initial"
						animate="animate"
						variants={staggerContainer}
					>
						<h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
							{profile.name}
						</h3>
						<div className="space-y-1">
							{/* {profile.designation.map((title, index) => (
								<motion.p
									key={index}
									variants={fadeUpItem}
									className="text-gray-600 dark:text-gray-400"
								>
									{title}
								</motion.p>
							))} */}
						</div>
					</motion.div>

					{/* Center: Quick Links */}
					<motion.div
						initial="initial"
						animate="animate"
						variants={staggerContainer}
					>
						<h4 className="font-semibold mb-4 text-gray-800 dark:text-white">
							Quick Links
						</h4>
						<div className="space-y-2">
							{sections.slice(0, 4).map((section) => (
								<motion.button
									key={section.id}
									onClick={() => scrollToSection(section.id)}
									variants={fadeUpItem}
									className="block text-gray-600 dark:text-gray-400 hover:text-blue-500 transition duration-200 hover:translate-x-1"
								>
									{section.label}
								</motion.button>
							))}
						</div>
					</motion.div>

					{/* Right: Connect Icons */}
					<motion.div
						initial="initial"
						animate="animate"
						variants={staggerContainer}
					>
						<h4 className="font-semibold mb-4 text-gray-800 dark:text-white">
							Connect
						</h4>
						<div className="flex space-x-4">
							{[
								{
									href: contact.social.linkedin,
									icon: <Linkedin size={24} />,
									label: "LinkedIn",
								},
								{
									href: contact.social.github,
									icon: <Github size={24} />,
									label: "GitHub",
								},
								{
									href: `mailto:${contact.email}`,
									icon: <Mail size={24} />,
									label: "Email",
								},
							].map((item, i) => (
								<motion.a
									key={i}
									href={item.href}
									aria-label={item.label}
									variants={fadeUpItem}
									className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition transform hover:scale-110"
								>
									{item.icon}
								</motion.a>
							))}
						</div>
					</motion.div>
				</div>

				{/* Bottom: Copyright */}
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.3 }}
					className="border-t border-gray-200 dark:border-gray-700 mt-10 pt-6 text-center"
				>
					<p className="text-sm text-gray-600 dark:text-gray-400">
						© {new Date().getFullYear()} {profile.name}. All rights reserved.
					</p>
				</motion.div>
			</div>
		</footer>
	);
};

export default Footer;
