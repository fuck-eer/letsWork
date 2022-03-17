/* eslint-disable @next/next/no-img-element */
import React from "react";
import { tags } from "../../../lib/types";
import HeroBg from "../../atoms/HeroBg/HeroBg";
import Text from "../../atoms/Text/Text";
import Tag from "../Tags/Tags";
import classes from "./DetailsHeader.module.css";
export type DetHeaderProps = {
	companyName: string;
	companyUrl: string;
	title: string;
	tags: tags;
};
const DetailsHeader = ({
	companyName,
	tags,
	title,
	companyUrl,
}: DetHeaderProps) => {
	return (
		<div className={classes.DetHeader}>
			<HeroBg />
			<div className={classes.CompInfo}>
				<div className={classes.initials}>
					<Text size='xs' varient='h'>
						<span className='pl-2 text-sm font-semibold text-red'>
							{companyName}
						</span>
					</Text>
					<div className={classes.compName}>
						<Text size='xl' varient='h'>
							<span className='text-5xl font-normal '>{title}</span>
						</Text>
					</div>
				</div>
				<div className={classes.tags}>
					{tags &&
						tags.map((tag) => <Tag id={tag.id} key={tag.id} name={tag.name} />)}
				</div>
			</div>
			<div className={classes.CompLogo}>
				<div className={classes.logo}>
					<img src={`https://logo.clearbit.com/${companyUrl}`} alt='logo' />
				</div>
			</div>
		</div>
	);
};

export default DetailsHeader;
