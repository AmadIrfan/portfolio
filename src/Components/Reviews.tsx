import React, { useState, type RefObject } from "react";
import type { Review } from "../types/portfolio";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ReviewsProps {
	reviews: Review[];
	darkMode: boolean;
	reviewsRef: RefObject<HTMLElement> | RefObject<null>;
}

const Reviews: React.FC<ReviewsProps> = ({ reviews, darkMode, reviewsRef }) => {
	const [currentReview, setCurrentReview] = useState(0);
	const total = reviews.length;
	const review = reviews[currentReview];

	const goNext = () => setCurrentReview((prev) => (prev + 1) % total);
	const goPrev = () => setCurrentReview((prev) => (prev - 1 + total) % total);

	return (
		<section
			id="reviews"
			ref={reviewsRef}
			className={`py-24 transition-colors duration-500 ${
				darkMode ? "bg-gray-900" : "bg-gray-50"
			}`}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
						What People Say
					</h2>
					<div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
				</motion.div>

				<div className="max-w-4xl mx-auto relative">
					<AnimatePresence mode="wait">
						<motion.div
							key={currentReview}
							initial={{ opacity: 0, y: 50, scale: 0.95 }}
							animate={{ opacity: 1, y: 0, scale: 1 }}
							exit={{ opacity: 0, y: -50, scale: 0.95 }}
							transition={{ duration: 0.5 }}
							className={`p-8 rounded-xl shadow-lg ${
								darkMode ? "bg-gray-800" : "bg-white"
							} text-center`}
						>
							<motion.img
								src={review.image}
								alt={review.name}
								className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500 shadow-md"
								initial={{ scale: 0.8 }}
								animate={{ scale: 1 }}
								transition={{ duration: 0.3 }}
							/>
							<motion.div
								className="flex justify-center mb-3"
								initial={{ scale: 0.9 }}
								animate={{ scale: 1 }}
								transition={{ duration: 0.3 }}
							>
								{[...Array(review.rating)].map((_, i) => (
									<Star
										key={i}
										className="text-yellow-400 fill-current"
										size={20}
									/>
								))}
							</motion.div>
							<p className="text-lg italic mb-4 text-gray-600 dark:text-gray-300">
								“{review.message}”
							</p>
							<h4 className="font-bold text-xl text-blue-500">{review.name}</h4>
							<p className="text-sm text-gray-600 dark:text-gray-400">
								{review.position}
							</p>
						</motion.div>
					</AnimatePresence>

					{/* Buttons */}
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ delay: 0.3 }}
						className="flex justify-center items-center gap-4 mt-6"
					>
						<button
							onClick={goPrev}
							className="p-2 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-blue-500 hover:text-white transition"
							aria-label="Previous Review"
						>
							<ChevronLeft size={20} />
						</button>

						<div className="flex gap-2">
							{reviews.map((_, index) => (
								<button
									key={index}
									className={`w-3 h-3 rounded-full transition-all duration-300 ${
										index === currentReview
											? "bg-blue-500 scale-125"
											: "bg-gray-300 dark:bg-gray-600"
									}`}
								/>
							))}
						</div>

						<button
							onClick={goNext}
							className="p-2 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-blue-500 hover:text-white transition"
							aria-label="Next Review"
						>
							<ChevronRight size={20} />
						</button>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Reviews;
