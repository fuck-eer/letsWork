/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { getallCompanies, getJobsByLoc } from "../../../gql/client";
import { Company } from "../../../lib/types";
import { JobsContext } from "../../../context/context";
import Button from "../../atoms/Button/Button";
import Icon from "../../atoms/Icon/Icon";
import Text from "../../atoms/Text/Text";
import classes from "./MainHeader.module.css";
import { useAppDispatch } from "../../../hooks/storeHooks";
import { searchActions } from "../../../store/searchSlice";
import { useRouter } from "next/router";
const MainHeader = (): JSX.Element => {
	const [showForm, setShowForm] = useState<boolean>(false);
	const [locInput, setLocInput] = useState<string>("");
	const [scrolled, setscrolled] = useState(0);
	const [allCompanies, setAllCompanies] = useState<Company[]>([]);
	const dispatch = useAppDispatch();
	const router = useRouter();
	useEffect(() => {
		const onScrollfunc = () => setscrolled(window.pageYOffset);
		window.removeEventListener("scroll", onScrollfunc);
		window.addEventListener("scroll", onScrollfunc, { passive: true });
		return () => window.removeEventListener("scroll", onScrollfunc);
	}, []);
	useEffect(() => {
		const func = async () => {
			const { companies } = await getallCompanies();
			const allCps: Company[] = companies;
			setAllCompanies(allCps);
		};
		func();
	}, []);

	const onSearch = async (e: React.FormEvent) => {
		e.preventDefault();
		console.log(locInput);
		const { jobs } = await getJobsByLoc(locInput);
		dispatch(searchActions.setAllJobs({ jobs }));
		if (Object.keys(router.query).length !== 0) {
			router.push("/#jobsList");
		}
	};
	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setLocInput(e.target.value);
	};

	let comps: JSX.Element | JSX.Element[] = (
		<Text
			size='xs'
			className='flex justify-start items-center gap-3 w-[80%]'
			varient='li'
			onHover
		>
			<span className='flex w-[20px] items-center justify-center'>
				<img src='https://logo.clearbit.com/www.gis.com' alt='🔃' />
			</span>{" "}
			Loading..
		</Text>
	);
	if (allCompanies.length) {
		comps = allCompanies.map((company) => (
			<Link key={company.id} href={`/${company.slug}`}>
				<a className='w-[80%]'>
					<Text
						size='xs'
						className='flex justify-start items-center gap-3 w-[100%]'
						varient='li'
						onHover
					>
						<span className='flex w-[20px] min-w-[20px] items-center justify-center'>
							<img src={`https://logo.clearbit.com/${company.websiteUrl}`} />
						</span>{" "}
						{company.name}
					</Text>
				</a>
			</Link>
		));
	}

	return (
		<div
			className={`${classes.mainHeader} ${scrolled > 0 ? classes.shadow : ""}`}
		>
			<div className={classes.logo}>
				<Link href='/'>
					<a>
						<Text size='xl' varient='h' main inline animate onHover>
							Le<span className='text-red'>&rsquo;</span>W
						</Text>
					</a>
				</Link>
			</div>
			<nav className={classes.navbar}>
				<ul className={classes.navlinks}>
					<li>
						<Button size='sm' href='#' type='internal'>
							Login/Signup
						</Button>
					</li>
					<li className={classes.employerLi}>
						<Button size='sm' href='#' type='internal'>
							Employers
						</Button>
						<div className={classes.popup}>
							<ul className={classes.inList}>{comps}</ul>
						</div>
					</li>
					<li className='flex flex-row items-center justify-start gap-1'>
						{showForm && (
							<form
								className='flex flex-row items-center justify-end gap-1 transition-all'
								onSubmit={onSearch}
							>
								<input
									className='px-2 py-0 border-2 rounded'
									value={locInput}
									onChange={onChange}
									placeholder='Location...'
								/>
								<Button size='sm' varient='solid' onClick={() => {}}>
									<Icon size='sm' color='#ffffff' icon='search' />
								</Button>
							</form>
						)}

						<Button
							size='sm'
							varient='naked'
							onClick={() => {
								setShowForm((prev) => !prev);
								dispatch(searchActions.setAllJobs({ jobs: [] }));
								setLocInput("");
							}}
						>
							{!showForm ? (
								<Icon size='sm' color='#ff5050' icon='search' />
							) : (
								<Icon size='sm' color='#ff5050' icon='cross' />
							)}
						</Button>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default MainHeader;
