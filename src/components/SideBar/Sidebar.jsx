/** @format */

import React, { useState } from "react";
import SidebarInfo from "./SidebarInfo";
import SocialMediaLink from "./SocialMediaLink";

function SideBar() {
	const [isActive, setIsActive] = useState(false);

	const handleToggle = (state) => {
		console.log(isActive);
		// console.log("this"); // This will log 'this', but in this context it might not be useful
		setIsActive((prevState) => !state);
	};

	return (
		<aside
			className={`sidebar${isActive ? " active" : ""}`}
			// onClick={() => handleToggle(isActive)}
			data-sidebar
		>
			<SidebarInfo onBtnClick={handleToggle} isActive={isActive} />
			<SocialMediaLink />
		</aside>
	);
}

export default SideBar;
