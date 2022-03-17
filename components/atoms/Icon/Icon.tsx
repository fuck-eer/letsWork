import React from "react";
import { size } from "../Text/Text";
import AmazonIcon from "./AmazonIcon";
import FacebookIcon from "./FacebookIcon";
import GithubIcon from "./GithubIcon";
import GoogleIcon from "./GoogleIcon";
import InvisionIcon from "./InvisionIcon";
import SearchIcon from "./searchIcon";
import classes from "./Icon.module.css";
const icons = [
	"google",
	"facebook",
	"invision",
	"github",
	"amazon",
	"search",
] as const;
export type icon = typeof icons[number];
export type IconProps = {
	size: size;
	icon: icon;
	color: string;
};
const Icon = ({ size, icon, color }: IconProps): JSX.Element => {
	switch (icon) {
		case "google":
			return (
				<div className={`${classes.icon} ${classes[size]}`}>
					<GoogleIcon color={color} />
				</div>
			);
		case "amazon":
			return (
				<div className={`${classes.icon} ${classes[size]}`}>
					<AmazonIcon color={color} />
				</div>
			);
		case "facebook":
			return (
				<div className={`${classes.icon} ${classes[size]}`}>
					<FacebookIcon color={color} />
				</div>
			);

		case "github":
			return (
				<div className={`${classes.icon} ${classes[size]}`}>
					<GithubIcon color={color} />
				</div>
			);
		case "invision":
			return (
				<div className={`${classes.icon} ${classes[size]}`}>
					<InvisionIcon color={color} />
				</div>
			);
		case "search":
			return (
				<div className={`${classes.icon} ${classes[size]}`}>
					<SearchIcon color={color} />
				</div>
			);
		default:
			return <div>errr.</div>;
	}
};

export default Icon;
