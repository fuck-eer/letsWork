import React from "react";
import classes from "./Text.module.css";
import { theme } from "../../../tailwind.config";
const allSizes = ["xl", "lg", "md", "sm", "xs"] as const;
export type size = typeof allSizes[number];

const allVarients = ["h", "p"] as const;
export type varient = typeof allVarients[number];

export type TextProps = {
	size: size;
	varient: varient;
	className?: string;
	main?: boolean;
	inline?: boolean;
	onHover?: boolean;
	animate?: boolean;
	color?: string;
	children: React.ReactNode;
};
const Text = ({
	size,
	className,
	varient,
	main,
	onHover,
	inline,
	animate,
	color = "black",
	children,
}: TextProps): JSX.Element => {
	const textClass = `${className ? className : ""} ${
		varient === "h" ? classes.cuhead : classes.cupara
	} ${classes[size]} ${inline ? "inline-block" : ""} ${
		main ? classes.main : ""
	} ${onHover ? classes.onHover : ""} `;

	if (varient === "p") {
		return <p className={textClass}>{children}</p>;
	}
	switch (size) {
		case "xl":
			return <h1 className={textClass}>{children}</h1>;
		case "lg":
			return <h2 className={textClass}>{children}</h2>;
		case "md":
			return <h3 className={textClass}>{children}</h3>;
		case "sm":
			return <h4 className={textClass}>{children}</h4>;
		case "xs":
			return <h5 className={textClass}>{children}</h5>;
		default:
			return <h3 className={textClass}>{children}</h3>;
	}
};

export default Text;
