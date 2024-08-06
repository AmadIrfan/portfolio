/** @format */

import React from "react";
import avatar from "../../assets/images/my-avatar.png";

// import MailOutline from "react-ionicons";
// import CalendarOutline from "react-ionicons";
// import LocationOutline from "react-ionicons";
// import PhonePortraitOutline from "react-ionicons";
// import a from "react-ionicons";

// import ChevronDown from "react-ionicons";

const SidebarInfo = (props) => {
	return (
		<>
			<div className="sidebar-info">
				<figure className="avatar-box">
					<img src={avatar} alt="Amad Irfan" width={80} />
				</figure>
				<div className="info-content">
					<h1 className="name" title="Amad Irfan">
						Amad Irfan
					</h1>
					<p className="title">Web developer</p>
				</div>
				<button
					className="info_more-btn"
					data-sidebar-btn
					onClick={() => props.onBtnClick(props.isActive)}
				>
					<span>Show Contacts</span>
					{/* <ChevronDown /> */}
				</button>
			</div>
			<div className="sidebar-info_more">
				<div className="separator" />
				<ul className="contacts-list">
					<li className="contact-item">
						<div className="icon-box">{/* <MailOutline /> */}</div>
						<div className="contact-info">
							<p className="contact-title">Email</p>
							<a
								href="mailto:richard@example.com"
								className="contact-link"
							>
								richard@example.com
							</a>
						</div>
					</li>
					<li className="contact-item">
						<div className="icon-box">
							{/* <PhonePortraitOutline /> */}
						</div>
						<div className="contact-info">
							<p className="contact-title">Phone</p>
							<a href="tel:+12133522795" className="contact-link">
								+1 (213) 352-2795
							</a>
						</div>
					</li>
					<li className="contact-item">
						<div className="icon-box">
							{/* <CalendarOutline /> */}
						</div>
						<div className="contact-info">
							<p className="contact-title">Birthday</p>
							<time dateTime="1982-06-23">June 23, 1982</time>
						</div>
					</li>
					<li className="contact-item">
						<div className="icon-box">
							{/* <LocationOutline /> */}
						</div>
						<div className="contact-info">
							<p className="contact-title">Location</p>
							<address>Sacramento, California, USA</address>
						</div>
					</li>
				</ul>
			</div>
		</>
	);
};

export default SidebarInfo;
