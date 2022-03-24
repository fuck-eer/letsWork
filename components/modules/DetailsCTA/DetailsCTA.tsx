import React from "react";
import Button from "../../atoms/Button/Button";
import Icon from "../../atoms/Icon/Icon";
import Text from "../../atoms/Text/Text";
import classes from "./DetailsCTA.module.css";
export type CTAProps = {
	location: string;
	date: Date;
	url: string;
	applyUrl: string;
};
const DetailsCTA = ({ location, date, url, applyUrl }: CTAProps) => {
	const parsedDate = date.toLocaleDateString("en-US", {
		month: "short",
		year: "numeric",
		day: "2-digit",
	});
	return (
		<div className={classes.ctaPanel}>
			<div className={classes.ctaHeading}>
				<Icon icon='location' size='sm' color='black' />

				<Text size='md' varient='h' className='self-start' onHover>
					{location}
				</Text>
			</div>
			<div className={classes.ctaHeading}>
				<Icon icon='calender' size='sm' color='black' />

				<Text size='md' className='self-start' varient='h' onHover>
					{parsedDate}
				</Text>
			</div>
			<div className={classes.ctaHeading}>
				<Icon icon='world' size='sm' color='black' />

				<Text size='md' className='self-start' varient='h' onHover>
					{url}
				</Text>
			</div>
			<div className={classes.ctaHeading}>
				<Icon icon='eleminate' size='sm' color='black' />

				<Text size='md' className='self-start' varient='h' onHover>
					3 posts
				</Text>
			</div>
			<Button
				size='xl'
				onClick={() => {
					window.open(applyUrl, "_blank");
				}}
				varient='solid'
			>
				Apply Now
			</Button>
		</div>
	);
};

export default DetailsCTA;
