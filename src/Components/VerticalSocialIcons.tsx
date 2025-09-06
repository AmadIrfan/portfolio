import { motion } from "framer-motion";
import React from "react";
import type { Contact } from "../types/portfolio";
import { Linkedin, Github, Twitter, Instagram } from "lucide-react";
interface VerticalSocialIconsProps{
    contact: Contact;
}
const VerticalSocialIcons: React.FC<VerticalSocialIconsProps> = ({contact}) => {
	return (
		<>
			<motion.div>
				<div className="flex gap-4 mt-8 justify-center">
					{contact.social.linkedin && (
						<a
						target="_blank"
					href={contact.social.linkedin}
					aria-label="LinkedIn"
					className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 hover:scale-110 transition"
					>
							<Linkedin size={20} />
						</a>
					)}
					{contact.social.github && (
						<a
						target="_blank"
						href={contact.social.github}
						aria-label="GitHub"
							className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-900 hover:scale-110 transition"
						>
							<Github size={20} />
						</a>
					)}
					{contact.social.x && (
						<a
						target="_blank"
							href={contact.social.x}
							aria-label="Twitter"
							className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-900 hover:scale-110 transition"
						>
							<Twitter size={20} />
						</a>
					)}

					{contact.social.instagram && (
						<a
							target="_blank"
							href={contact.social.instagram}
							aria-label="Instagram"
							className="bg-gradient-to-tr from-blue-500 to-purple-600 hover:scale-110 transition-all p-3 rounded-full shadow-lg text-white hover:bg-blue-600 "
						>
							<Instagram size={20} />
						</a>
					)}
				</div>
			</motion.div>
		</>
	);
};

export default VerticalSocialIcons;
