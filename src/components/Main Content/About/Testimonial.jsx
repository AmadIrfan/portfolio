
// @ts-nocheck
import React, { useState } from "react";
import avatar1 from "../../../assets/images/avatar-1.png";
import avatar2 from "../../../assets/images/avatar-2.png";
import avatar3 from "../../../assets/images/avatar-3.png";
import avatar4 from "../../../assets/images/avatar-4.png";
import IconQuote from "../../../assets/images/icon-quote.svg";

const testimonialsData = [
	{
		avatar: avatar1,
		name: "Daniel Lewis",
		text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
		alt: "Daniel lewis",
	},
	{
		avatar: avatar2,
		name: "Jessica Miller",
		text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
		alt: "Jessica miller",
	},
	{
		avatar: avatar3,
		name: "Emily Evans",
		text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
		alt: "Emily evans",
	},
	{
		avatar: avatar4,
		name: "Henry William",
		text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
		alt: "Henry william",
	},
];

const Testimonial = () => {
	const [modalData, setModalData] = useState(null);

	const openModal = (data) => {
		console.log("Opening modal with data:", data); // Debug log
		setModalData(data);
	};

	const closeModal = () => {
		console.log("Closing modal"); // Debug log
		setModalData(null);
	};

	return (
		<section className="testimonials">
			<h3 className="h3 testimonials-title">Testimonials</h3>
			<ul className="testimonials-list has-scrollbar">
				{testimonialsData.map((testimonial, index) => (
					<li
						className="testimonials-item"
						key={index}
						onClick={() => openModal(testimonial)}
					>
						<div className="content-card">
							<figure className="testimonials-avatar-box">
								<img
									src={testimonial.avatar}
									alt={testimonial.alt}
									width={60}
								/>
							</figure>
							<h4 className="h4 testimonials-item-title">
								{testimonial.name}
							</h4>
							<div className="testimonials-text">
								<p>{testimonial.text}</p>
							</div>
						</div>
					</li>
				))}
			</ul>

			{modalData && (
				<div className="modal-container active" data-modal-container>
					<div
						className="overlay"
						data-overlay
						onClick={closeModal}
					/>
					<section className="testimonials-modal">
						<button
							className="modal-close-btn"
							data-modal-close-btn
							onClick={closeModal}
						>
							&times; {/* Close icon */}
						</button>
						<div className="modal-img-wrapper">
							<figure className="modal-avatar-box">
								<img
									src={modalData.avatar}
									alt={modalData.alt}
									width={80}
									data-modal-img
								/>
							</figure>
							<img src={IconQuote} alt="quote icon" />
						</div>
						<div className="modal-content">
							<h4 className="h3 modal-title" data-modal-title>
								{modalData.name}
							</h4>
							<time dateTime="2021-06-14">14 June, 2021</time>
							<div data-modal-text>
								<p>{modalData.text}</p>
							</div>
						</div>
					</section>
				</div>
			)}
		</section>
	);
};

export default Testimonial;
