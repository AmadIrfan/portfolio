/** @format */

import React from "react";

import Logo1Color from "../../../assets/images/logo-1-color.png";
import Logo2Color from "../../../assets/images/logo-2-color.png";
import Logo3Color from "../../../assets/images/logo-3-color.png";
import Logo4Color from "../../../assets/images/logo-4-color.png";
import Logo5Color from "../../../assets/images/logo-5-color.png";
import Logo6Color from "../../../assets/images/logo-6-color.png";

// Array of logos
const logos = [
	Logo1Color,
	Logo2Color,
	Logo3Color,
	Logo4Color,
	Logo5Color,
	Logo6Color,
];

const Clients = () => {
	return (
		<section className="clients">
			<h3 className="h3 clients-title">Clients</h3>
			<ul className="clients-list has-scrollbar">
				{logos.map((logo, index) => (
					<li className="clients-item" key={index}>
						<a href="/#">
							<img src={logo} alt="client logo" />
						</a>
					</li>
				))}
			</ul>
		</section>
	);
};

export default Clients;
