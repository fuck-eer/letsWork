import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Content from "../../../components/modules/Content/Content";
import DetailsCTA from "../../../components/modules/DetailsCTA/DetailsCTA";
import DetailsHeader from "../../../components/modules/DetailsHeader/DetailsHeader";
import { getJob } from "../../../gql/client";
import { FullJob } from "../../../lib/types";

type JobProps = {
	job: FullJob;
};
const JobPage: NextPage<JobProps> = ({ job }: JobProps) => {
	const DetailsHeaderData = {
		companyName: job.company.name,
		companyUrl: job.company.websiteUrl,
		title: job.title,
		tags: job.tags,
	};
	const CTAData = {
		date: new Date(job.postedAt),
		location: job.locationNames || "Remote",
		url: job.company.websiteUrl,
		applyUrl: job.applyUrl,
	};
	const ContentData = {
		content: job.description,
	};

	return (
		<>
			<DetailsHeader {...DetailsHeaderData} />
			<div className='flex items-start justify-around '>
				<Content {...ContentData} />
				<DetailsCTA {...CTAData} />
			</div>
		</>
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [
			{
				params: {
					companySlug: "segment",
					titleSlug: "senior-fullstack-engineer-platform",
				},
			},
		],
		fallback: "blocking",
	};
};
export const getStaticProps: GetStaticProps = async (ctx) => {
	const { params } = ctx;
	const titleSlug = params?.titleSlug as string;
	const companySlug = params?.companySlug as string;

	const data = await getJob(titleSlug, companySlug);
	if (!data) {
		return {
			notFound: true,
		};
	}
	const fulljob: FullJob = data.job;
	return {
		props: {
			job: fulljob,
		},
		revalidate: 10000,
	};
};

export default JobPage;
