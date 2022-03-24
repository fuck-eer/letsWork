/* eslint-disable @next/next/no-img-element */
import React from "react";
import HeroBg from "../../atoms/HeroBg/HeroBg";
import Text from "../../atoms/Text/Text";
import Tag from "../Tags/Tags";
import classes from "./CompHeader.module.css";
export type CompProps = {
	totJobs: number;
	name: string;
	companyUrl: string;
};
const CompHeader = ({ totJobs, name, companyUrl }: CompProps) => {
	return (
		<div className={classes.DetHeader}>
			<HeroBg />
			<div className={classes.CompInfo}>
				<div className={classes.initials}>
					<Text size='xs' varient='h'>
						<span className='pl-2 text-sm font-semibold text-red'>
							{totJobs} {totJobs === 1 ? "Job posted!" : "Jobs posted!"}
						</span>
					</Text>
					<div className={classes.compName}>
						<Text size='xl' varient='h'>
							<span className='text-5xl font-normal '>{name}</span>
						</Text>
					</div>
				</div>
				<div className={classes.tags}>
					<Tag id='url' name={companyUrl} />
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

export default CompHeader;
