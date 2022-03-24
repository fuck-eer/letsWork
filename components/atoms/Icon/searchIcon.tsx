import React from "react";
import { svgPorp } from "./AmazonIcon";

const SearchIcon = ({ color }: svgPorp): JSX.Element => {
	return (
		<svg
			width='41'
			height='40'
			viewBox='0 0 41 40'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M28.625 28.125L36.125 35.625'
				stroke={color}
				strokeWidth='6'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M19.25 30.625C25.8084 30.625 31.125 25.3084 31.125 18.75C31.125 12.1916 25.8084 6.875 19.25 6.875C12.6916 6.875 7.375 12.1916 7.375 18.75C7.375 25.3084 12.6916 30.625 19.25 30.625Z'
				stroke={color}
				strokeWidth='6'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
};

export default SearchIcon;
