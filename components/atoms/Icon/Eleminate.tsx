import React from "react";
import { svgPorp } from "./AmazonIcon";

const Eleminate = ({ color }: svgPorp) => {
	return (
		<svg
			width='45'
			height='46'
			viewBox='0 0 45 46'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M22.5 4.25C12.15 4.25 3.75 12.65 3.75 23C3.75 33.35 12.15 41.75 22.5 41.75C32.85 41.75 41.25 33.35 41.25 23C41.25 12.65 32.85 4.25 22.5 4.25ZM22.5 38C14.2313 38 7.5 31.2687 7.5 23C7.5 14.7313 14.2313 8 22.5 8C30.7687 8 37.5 14.7313 37.5 23C37.5 31.2687 30.7687 38 22.5 38ZM22.5 11.75C16.3125 11.75 11.25 16.8125 11.25 23C11.25 29.1875 16.3125 34.25 22.5 34.25C28.6875 34.25 33.75 29.1875 33.75 23C33.75 16.8125 28.875 11.75 22.5 11.75ZM28.125 24.875H16.875V21.125H28.125V24.875Z'
				fill={color}
			/>
		</svg>
	);
};

export default Eleminate;