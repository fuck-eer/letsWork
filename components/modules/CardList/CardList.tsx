import React from "react";
import { Jobs } from "../../../lib/types";
import Text from "../../atoms/Text/Text";
import Card from "../Card/Card";
import classes from "./CardList.module.css";
export type CardListProps = {
	jobs: Jobs;
};
const CardList = ({ jobs }: CardListProps) => {
	return (
		<div id='jobsList' className={classes.cardList}>
			<div className={classes.listHead}>
				<Text size='xs' varient='h'>
					<span className='text-xl font-medium'>Jobs</span> you might like:
				</Text>
			</div>
			<div className={classes.listHolder}>
				{jobs.length > 0 ? (
					jobs.map((job) => <Card {...job} key={job.id} />)
				) : (
					<p>Not found</p>
				)}
			</div>
		</div>
	);
};

export default CardList;
