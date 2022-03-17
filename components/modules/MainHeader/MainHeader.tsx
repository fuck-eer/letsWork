import React, { useEffect, useState } from "react";
import Button from "../../atoms/Button/Button";
import Icon from "../../atoms/Icon/Icon";
import Text from "../../atoms/Text/Text";
import classes from "./MainHeader.module.css";
const MainHeader = (): JSX.Element => {
	const [scrolled, setscrolled] = useState(0);
	useEffect(() => {
		const onScrollfunc = () => setscrolled(window.pageYOffset);

		window.removeEventListener("scroll", onScrollfunc);
		window.addEventListener("scroll", onScrollfunc, { passive: true });
		return () => window.removeEventListener("scroll", onScrollfunc);
	}, []);
	return (
		<div
			className={`${classes.mainHeader} ${scrolled > 0 ? classes.shadow : ""}`}
		>
			<div className={classes.logo}>
				<Text size='xl' varient='h' main inline animate onHover>
					Le<span className='text-red'>&rsquo;</span>W
				</Text>
			</div>
			<nav className={classes.navbar}>
				<ul className={classes.navlinks}>
					<li>
						<Button size='sm' href='#' type='internal'>
							Login/Signup
						</Button>
					</li>
					<li>
						<Button size='sm' href='#' type='internal'>
							Companies
						</Button>
					</li>
					<li>
						<Button size='sm' href='#' type='internal'>
							Countries
						</Button>
					</li>
					<li>
						<Button
							size='sm'
							varient='naked'
							onClick={() => {
								console.log("clicked");
							}}
						>
							<Icon size='sm' color='#ff5050' icon='search' />
						</Button>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default MainHeader;
