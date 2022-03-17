import React from "react";
import HeroBg from "../../atoms/HeroBg/HeroBg";
import Icon from "../../atoms/Icon/Icon";
import Text from "../../atoms/Text/Text";
import classes from "./HeroComp.module.css";
const HeroComp = () => {
	return (
		<div className={classes.Hero}>
			<HeroBg />
			<div className={classes.HeroText}>
				<Text size='xl' varient='h' inline main>
					<span className='font-extralight'>
						<span className='font-normal'>
							Le’W<span className='text-red'>:</span>
						</span>{" "}
						Lets <span className='font-normal'>Work</span> To
						<span className='font-normal'>gether</span>
					</span>
				</Text>
				<Text size='md' varient='p' main>
					<span className='tracking-wide font-extralight'>
						Finding Jobs can never be <span className='font-light'>easier</span>
						, We work together with employers to
						<br /> give you a <span className='font-light'>
							hassel free
						</span>{" "}
						experience and make you{" "}
						<span className='font-light'>job ready</span> so Le’W
						<span className='text-red'>?</span>
					</span>
				</Text>
			</div>
			<div className={classes.HeroCompanies}>
				<Text size='sm' varient='h' inline>
					<span className='text-lg font-medium text-[#999] tracking-wide'>
						Trusted by world’s leading companies
					</span>
				</Text>
				<div className={classes.Icons}>
					<Icon icon='google' color='#999999' size='lg' />
					<Icon icon='github' color='#999999' size='lg' />
					<Icon icon='facebook' color='#999999' size='lg' />
					<Icon icon='amazon' color='#999999' size='lg' />
					<Icon icon='invision' color='#999999' size='lg' />
				</div>
			</div>
		</div>
	);
};

export default HeroComp;
