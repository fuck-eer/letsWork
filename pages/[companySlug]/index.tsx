import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import CardList from "../../components/modules/CardList/CardList";
import CompHeader from "../../components/modules/CompanyHeader/CompHeader";
import DetailsHeader from "../../components/modules/DetailsHeader/DetailsHeader";
import { getCompany } from "../../gql/client";
import { Company } from "../../lib/types";
type CompProps = {
	company: Company;
};
const CompanyPage: NextPage<CompProps> = ({ company }: CompProps) => {
	return (
		<>
			{/* {company.name} has:{company.jobs?.length} jobs */}
			<CompHeader
				companyUrl={company.websiteUrl}
				name={company.name}
				totJobs={company.jobs?.length!}
			/>
			<CardList jobs={company.jobs!} />
		</>
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [{ params: { companySlug: "apollo" } }],
		fallback: "blocking",
	};
};
export const getStaticProps: GetStaticProps = async (ctx) => {
	const { params } = ctx;
	const companySlug = params?.companySlug as string;
	const data = await getCompany();
	if (!data) {
		return {
			notFound: true,
		};
	}
	const companies: Company[] = data.companies;
	const companyData = companies.find((comp) => companySlug === comp.slug);
	if (!companyData) {
		return {
			notFound: true,
		};
	}
	return {
		props: {
			company: companyData,
		},
		revalidate: 10000,
	};
};

export default CompanyPage;
