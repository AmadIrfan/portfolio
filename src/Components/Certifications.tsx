import React, { type RefObject } from "react";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import type { Certification } from "../types/portfolio.d";

interface CertificationsProps {
	certifications: Certification[];
	certificationsRef: RefObject<HTMLElement> | RefObject<null>;
	darkMode?: boolean;
}

const Certifications: React.FC<CertificationsProps> = ({
	certifications,
	certificationsRef,
	darkMode,
}) => {
	return (
		<section
			id="certifications"
			ref={certificationsRef}
			className={`py-20 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold mb-4">Certifications</h2>
					<div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
				</div>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{certifications.map((cert, idx) => (
						<motion.div
							key={idx}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: idx * 0.1 }}
							className={`p-6 rounded-xl shadow-lg hover:shadow-xl transform transition-transform hover:scale-105 ${
								darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
							}`}
						>
							{cert.logo && (
								<img
									src={cert.logo}
									alt={cert.issuer}
									className="w-16 h-16 mb-4 object-contain"
								/>
							)}
							<h3 className="text-xl font-bold">{cert.title}</h3>
							<p className="text-blue-500 font-semibold">{cert.issuer}</p>
							<p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
								{cert.startDate}- {cert.endDate || "Present"}
							</p>
							{cert.certificateUrl && (
								<a
									href={cert.certificateUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:underline"
								>
									View Certificate <ExternalLink size={16} />
								</a>
							)}
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Certifications;
