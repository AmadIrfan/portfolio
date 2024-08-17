/** @format */

import React from "react";
import { ChevronDown } from "react-ionicons";

const FilterSelectBox = ({ options, selected, onSelect }) => (
	<div className="filter-select-box">
		<button className="filter-select" data-select>
			<div className="select-value" data-select-value="">
				{selected}
			</div>
			<div className="select-icon">
				<ChevronDown />
			</div>
		</button>
		<ul className="select-list">
			{options.map((option) => (
				<li className="select-item" key={option}>
					<button data-select-item onClick={() => onSelect(option)}>
						{option}
					</button>
				</li>
			))}
		</ul>
	</div>
);

export default FilterSelectBox;
