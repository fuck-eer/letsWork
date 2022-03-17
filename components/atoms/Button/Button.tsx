import Link from "next/link";
import React from "react";
import { size } from "../Text/Text";
import classes from "./Button.module.css";

const buttonVarients = ["solid", "outlined", "naked"] as const;
export type buttonVarient = typeof buttonVarients[number];
export type baseProps = {
	size: size;
	children: React.ReactNode;
};
export type LinkTarget = "_blank" | "_self";
export type LinkType = "internal" | "external";
export type isButtonPorps = {
	onClick: React.MouseEventHandler<HTMLButtonElement>;
	disabled?: boolean;
	varient: buttonVarient;
};
export type isLinkProps = {
	href: string;
	target?: LinkTarget;
	type: LinkType;
};
export type isLink = baseProps & isLinkProps;
export type isButton = baseProps & isButtonPorps;
export type Props = isLink | isButton;

export const checkIsLink = (
	props: isButtonPorps | isLinkProps
): props is isLinkProps => {
	return "href" in props;
};

const Button = ({ size, children, ...rest }: Props): JSX.Element => {
	return checkIsLink(rest) ? (
		<Link href={rest.href}>
			<a
				className={`${classes.link} ${classes[size]}`}
				target={rest.target}
				type={rest.type}
				rel='noopener noreferrer'
			>
				{children}
			</a>
		</Link>
	) : (
		<button
			className={`${classes.button} ${classes[size]} ${classes[rest.varient]}`}
			onClick={rest.onClick}
			disabled={rest.disabled}
		>
			{children}
		</button>
	);
};

export default Button;
