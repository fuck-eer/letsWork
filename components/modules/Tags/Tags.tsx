import React from "react";
import { tag } from "../../../lib/types";
import Text from "../../atoms/Text/Text";
import classes from "./Tags.module.css";
export type TagProps = tag;
const Tag = ({ id, name }: TagProps) => {
	return (
		<div className={classes.tag}>
			<Text size='xs' varient='p' inline>
				<span className='text-sm font-semibold'>{name}</span>
			</Text>
		</div>
	);
};

export default Tag;
