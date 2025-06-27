import React, { type RefObject } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import AnimatedCounter from "./AnimatedCounter";
import type { Profile } from "../types/portfolio";
import profileImg from "../assets/img.jpg"; // Adjust the path as necessary

interface AboutProps {
	darkMode?: boolean;
	profile: Profile;
	aboutRef?: RefObject<HTMLElement> | RefObject<null>;
}

const About: React.FC<AboutProps> = ({ darkMode, aboutRef, profile }) => {
	return (
		<section
			id="about"
			ref={aboutRef}
			className={`py-24 ${
				darkMode ? "bg-gray-900" : "bg-gray-50"
			} transition-colors duration-500`}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl font-bold mb-3 text-gray-900 dark:text-white">
						About Me
					</h2>
					<div className="w-20 h-1 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
				</motion.div>

				<div className="grid md:grid-cols-2 gap-12 items-center">
					<motion.div
						initial={{ scale: 0.8, opacity: 0 }}
						whileInView={{ scale: 1, opacity: 1 }}
						transition={{ duration: 0.5 }}
					>
						<img
							src={!profile.imageUrl ? profileImg : profile.imageUrl}
							alt={profile.name}
							className="rounded-2xl shadow-2xl w-full max-w-md mx-auto object-cover"
						/>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
						className="space-y-6"
					>
						<p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
							{profile.bio}
						</p>

						<div className="grid grid-cols-2 gap-4">
							<Card className="bg-gradient-to-br from-blue-100/30 to-purple-100/30 dark:from-blue-900/20 dark:to-purple-900/20 border-none shadow-md">
								<CardContent className="p-6 text-center">
									<p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
										<AnimatedCounter end={10} />+
									</p>
									<p className="text-sm mt-2 text-gray-700 dark:text-gray-300">
										Projects Completed
									</p>
								</CardContent>
							</Card>
							<Card className="bg-gradient-to-br from-blue-100/30 to-purple-100/30 dark:from-blue-900/20 dark:to-purple-900/20 border-none shadow-md">
								<CardContent className="p-6 text-center">
									<p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
										<AnimatedCounter end={2} />+
									</p>
									<p className="text-sm mt-2 text-gray-700 dark:text-gray-300">
										Years Experience
									</p>
								</CardContent>
							</Card>
						</div>

						<Button
							asChild
							className="mt-4 text-base font-semibold px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 shadow-lg transition-all"
						>
							<a
								href={profile.resumeLink}
								target="_blank"
								rel="noopener noreferrer"
							>
								<Download className="mr-2 h-5 w-5" />
								Download Resume
							</a>
						</Button>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default About;
