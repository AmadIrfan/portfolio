/** @format */

import React from "react";
import { LogoFacebook, LogoTwitter, LogoInstagram } from "react-ionicons";
const SocialMediaLink = () => {
	return (
		<>
			<div className="separator" />
			<ul className="social-list">
				<li className="social-item">
					<a href="/#" className="social-link">
						<LogoFacebook />
					</a>
				</li>
				<li className="social-item">
					<a href="/#" className="social-link">
						<LogoTwitter />
					</a>
				</li>
				<li className="social-item">
					<a href="/#" className="social-link">
						<LogoInstagram />
					</a>
				</li>
			</ul>
		</>
	);
};

export default SocialMediaLink;
	