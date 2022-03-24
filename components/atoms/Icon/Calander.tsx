import React from "react";
import { svgPorp } from "./AmazonIcon";

const Calander = ({ color }: svgPorp) => {
	return (
		<svg
			width='45'
			height='46'
			viewBox='0 0 45 46'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M3.75 36.125C3.75 39.3125 6.1875 41.75 9.375 41.75H35.625C38.8125 41.75 41.25 39.3125 41.25 36.125V21.125H3.75V36.125ZM35.625 8H31.875V6.125C31.875 5 31.125 4.25 30 4.25C28.875 4.25 28.125 5 28.125 6.125V8H16.875V6.125C16.875 5 16.125 4.25 15 4.25C13.875 4.25 13.125 5 13.125 6.125V8H9.375C6.1875 8 3.75 10.4375 3.75 13.625V17.375H41.25V13.625C41.25 10.4375 38.8125 8 35.625 8Z'
				fill={color}
			/>
		</svg>
	);
};

export default Calander;
