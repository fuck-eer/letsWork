import type { GetStaticProps, NextPage } from "next";
import CardList from "../components/modules/CardList/CardList";
import HeroComp from "../components/modules/HeroComp/HeroComp";
import { getAllJobs } from "../gql/client";
import { Jobs } from "../lib/types";
import { useAppSelector } from "../hooks/storeHooks";
import { searchStateGetter } from "../store/searchSlice";

type HomeProps = {
	jobs: Jobs;
};

const Home: NextPage<HomeProps> = ({ jobs }: HomeProps) => {
	const searchedJobs = useAppSelector(searchStateGetter);

	return (
		<>
			<HeroComp />
			<CardList jobs={searchedJobs.length ? searchedJobs : jobs} />
		</>
	);
};

export const getStaticProps: GetStaticProps = async (ctx) => {
	const { jobs } = await getAllJobs();
	const alljobs: Jobs = jobs;
	return {
		props: { jobs: alljobs },
		revalidate: 1000,
	};
};

export default Home;
