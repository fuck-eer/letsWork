import React from "react";
import MainHeader from "../MainHeader/MainHeader";
import classes from "./Layout.module.css";
export type LayoutPorps = {
	children: React.ReactNode;
};
const Layout = ({ children }: LayoutPorps): JSX.Element => {
	return (
		<>
			<MainHeader />
			<main className={classes.pageLayout}>{children}</main>
		</>
	);
};

export default Layout;
