/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { Job } from "../../../lib/types";
import Icon from "../../atoms/Icon/Icon";
import Text from "../../atoms/Text/Text";
import classes from "./Card.module.css";
export type CardProps = Job;
const Card = ({
	id,
	commitment,
	isFeatured,
	locationNames,
	companyUrl,
	postedAt,
	title,
	companyName,
}: CardProps): JSX.Element => {
	const month = postedAt.toLocaleDateString("en-US", { month: "short" });
	const day = postedAt.toLocaleDateString("en-US", { day: "2-digit" });
	return (
		<div className={`${classes.card} ${isFeatured ? classes.featured : ""}`}>
			<div className={classes.logo}>
				<img
					src={`https://logo.clearbit.com/${companyUrl}`}
					alt='logo'
					width='30px'
					height='30px'
				/>
			</div>
			<div className={classes.details}>
				<Text size='xs' varient='h' inline>
					<span className='font-medium text-[14px]'>{companyName}</span>
				</Text>
				<Text size='md' varient='h' inline>
					<span className='font-medium'>{title}</span>
				</Text>
				<Text size='xs' varient='h' inline>
					<span className='font-extralight'>
						{commitment}/{locationNames}
					</span>
				</Text>
			</div>
			<div className={classes.date}>
				<Text size='xs' varient='h'>
					<span className='font-semibold'>{month}</span>{" "}
					<span className='font-light text-red'>{day}</span>
				</Text>
			</div>
			{/* <div className={classes.featured}></div> */}
		</div>
	);
};

export default Card;
