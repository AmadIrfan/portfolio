/** @format */

import React from "react";

const FilterList = ({ filters, onFilterClick }) => (
	<ul className="filter-list">
		{filters.map((filter) => (
			<li className="filter-item" key={filter}>
				<button
					className={filter === "All" ? "active" : ""}
					onClick={() => onFilterClick(filter)}
				>
					{filter}
				</button>
			</li>
		))}
	</ul>
);

export default FilterList;
