import React from "react";
import { svgPorp } from "./AmazonIcon";

const Location = ({ color }: svgPorp) => {
	return (
		<svg
			width='34'
			height='46'
			viewBox='0 0 34 46'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<g clipPath='url(#clip0_10_454)'>
				<path
					d='M33.75 17.375C33.75 25.0566 23.4668 38.7324 18.958 44.375C17.877 45.7197 15.873 45.7197 14.792 44.375C10.2041 38.7324 0 25.0566 0 17.375C0 8.05508 7.55508 0.5 16.875 0.5C26.1914 0.5 33.75 8.05508 33.75 17.375Z'
					fill={color}
				/>
			</g>
			<defs>
				<clipPath id='clip0_10_454'>
					<rect
						width='33.75'
						height='45'
						fill='white'
						transform='translate(0 0.5)'
					/>
				</clipPath>
			</defs>
		</svg>
	);
};

export default Location;
