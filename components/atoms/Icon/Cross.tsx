import React from "react";
import { svgPorp } from "./AmazonIcon";

const Cross = ({ color }: svgPorp) => {
	return (
		<svg
			width='40'
			height='40'
			viewBox='0 0 40 40'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<g>
				<path
					d='M3.04651 3.5L28.0465 28.5M28.0465 3.5L3.04651 28.5L28.0465 3.5Z'
					stroke={color}
					strokeWidth='6'
					strokeLinecap='round'
					strokeLinejoin='round'
					shapeRendering='crispEdges'
				/>
			</g>
		</svg>
	);
};

export default Cross;
