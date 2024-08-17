import React from "react";



const TimelineItem = ({ title, dateRange, description }) => (
	<li className="timeline-item">
		<h4 className="h4 timeline-item-title">{title}</h4>
		<span>{dateRange}</span>
		<p className="timeline-text">{description}</p>
	</li>
);


export default TimelineItem;