/** @format */

import { useState } from "react";
import React from "react";

function NavBar({ ContentChangeBtn }) {
	const [active, SetActive] = useState("about");
	function selectActiveBtn(page) {
		SetActive(page);
		ContentChangeBtn(page);
	}
	return (
		<nav className="navbar">
			<ul className="navbar-list">
				<li className="navbar-item">
					<button
						className={
							active === "about" ? "navbar-link active" : `navbar-link`
						}
						onClick={() => selectActiveBtn("about")}
					>
						About
					</button>
				</li>
				<li className="navbar-item">
					<button
						className={
							active === "resume" ? "navbar-link active" : `navbar-link`
						}
						onClick={() => selectActiveBtn("resume")}
						data-nav-link
					>
						Resume
					</button>
				</li>
				<li className="navbar-item">
					<button
						className={
							active === "portfolio" ? "navbar-link active" : `navbar-link`
						}
						onClick={() => selectActiveBtn("portfolio")}
						data-nav-link
					>
						Portfolio
					</button>
				</li>
				<li className="navbar-item">
					<button
						className={active === "blog" ? "navbar-link active" : `navbar-link`}
						onClick={() => selectActiveBtn("blog")}
						data-nav-link
					>
						Blog
					</button>
				</li>
				<li className="navbar-item">
					<button
						className={
							active === "contact" ? "navbar-link active" : `navbar-link`
						}
						onClick={() => selectActiveBtn("contact")}
						data-nav-link
					>
						Contact
					</button>
				</li>
			</ul>
		</nav>
	);
}

export default NavBar;
