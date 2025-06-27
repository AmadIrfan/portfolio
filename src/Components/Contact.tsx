import React, { useState, type RefObject } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import { motion } from "framer-motion";
import type { Contact } from "../types/portfolio.d";

interface ContactProps {
	contact: Contact;
	darkMode: boolean;
	contactRef: RefObject<HTMLElement> | RefObject<null>;
}

const Contacts: React.FC<ContactProps> = ({
	darkMode,
	contact,
	contactRef,
}) => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleFormSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		alert("Message sent successfully!");
		setFormData({ name: "", email: "", message: "" });
	};

	const fadeUp = {
		initial: { opacity: 0, y: 30 },
		whileInView: { opacity: 1, y: 0 },
		transition: { duration: 0.6 },
	};

	return (
		<section
			id="contact"
			ref={contactRef}
			className={`py-24 transition-colors duration-500 ${
				darkMode ? "bg-gray-900" : "bg-gray-50"
			}`}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div {...fadeUp} className="text-center mb-16">
					<h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
						Get In Touch
					</h2>
					<div className="w-20 h-1 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
				</motion.div>

				<div className="grid md:grid-cols-2 gap-12">
					<motion.div {...fadeUp}>
						<h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
							Let's Work Together
						</h3>
						<p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
							I'm always open to discussing new opportunities and interesting
							projects. Feel free to reach out if you'd like to collaborate!
						</p>
						<div className="space-y-4 text-gray-700 dark:text-gray-300">
							<div className="flex items-center gap-3">
								<Mail className="text-blue-500" size={20} />
								<span>{contact.email}</span>
							</div>
							<div className="flex items-center gap-3">
								<Phone className="text-blue-500" size={20} />
								<span>{contact.phone}</span>
							</div>
							<div className="flex items-center gap-3">
								<MapPin className="text-blue-500" size={20} />
								<span>{contact.location}</span>
							</div>
						</div>

						<div className="flex gap-4 mt-8">
							<a
								href={contact.social.linkedin}
								aria-label="LinkedIn"
								className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 hover:scale-110 transition"
							>
								<Linkedin size={20} />
							</a>
							<a
								href={contact.social.github}
								aria-label="GitHub"
								className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-900 hover:scale-110 transition"
							>
								<Github size={20} />
							</a>
						</div>
					</motion.div>

					<motion.form
						onSubmit={handleFormSubmit}
						{...fadeUp}
						className={`p-8 rounded-xl shadow-xl ${
							darkMode ? "bg-gray-800" : "bg-white"
						}`}
					>
						<div className="mb-6">
							<label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
								Name
							</label>
							<input
								type="text"
								value={formData.name}
								onChange={(e) =>
									setFormData({ ...formData, name: e.target.value })
								}
								className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 transition ${
									darkMode
										? "bg-gray-700 border-gray-600 text-white"
										: "bg-white border-gray-300 text-gray-800"
								}`}
								placeholder="Your Name"
								required
							/>
						</div>
						<div className="mb-6">
							<label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
								Email
							</label>
							<input
								type="email"
								value={formData.email}
								onChange={(e) =>
									setFormData({ ...formData, email: e.target.value })
								}
								className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 transition ${
									darkMode
										? "bg-gray-700 border-gray-600 text-white"
										: "bg-white border-gray-300 text-gray-800"
								}`}
								placeholder="your@email.com"
								required
							/>
						</div>
						<div className="mb-6">
							<label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
								Message
							</label>
							<textarea
								value={formData.message}
								onChange={(e) =>
									setFormData({ ...formData, message: e.target.value })
								}
								rows={5}
								className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 resize-none transition ${
									darkMode
										? "bg-gray-700 border-gray-600 text-white"
										: "bg-white border-gray-300 text-gray-800"
								}`}
								placeholder="Tell me about your project..."
								required
							/>
						</div>
						<button
							type="submit"
							className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-md"
						>
							<Send size={18} />
							<span>Send Message</span>
						</button>
					</motion.form>
				</div>
			</div>
		</section>
	);
};

export default Contacts;
