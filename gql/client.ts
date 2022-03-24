import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import { Job } from "../lib/types";

const client = new ApolloClient({
	cache: new InMemoryCache(),
	uri: "https://api.graphql.jobs/",
});

export const getAllJobs = async () => {
	try {
		const { data } = await client.query({
			query: gql`
				query {
					jobs {
						slug
						id
						company {
							id
							name
							slug
							websiteUrl
						}
						title
						isFeatured
						postedAt
						commitment {
							id
							title
						}
						locationNames
					}
				}
			`,
		});

		return data;
	} catch (err) {
		alert(err);
	}
};

export const getJob = async (title: string, company: string) => {
	try {
		const { data } = await client.query({
			query: gql`
				query {
					job(
						input: {
							jobSlug: "${title}"
							companySlug: "${company}"
						}
					)  {
    id
    slug
    title
    commitment {
      id
      title
    }
    company {
      id
      name
      websiteUrl
      slug
    }
    tags {
      id
      name
    }
    cities {
      name
    }
    locationNames
    isFeatured
    postedAt
    applyUrl
    description
  }
				}
			`,
		});

		return data;
	} catch (err) {
		console.error(err);
	}
};

export const getallCompanies = async () => {
	try {
		const { data } = await client.query({
			query: gql`
				query {
					companies {
						name
						slug
						id
						websiteUrl
					}
				}
			`,
		});
		return data;
	} catch (err) {
		console.log(err);
	}
};

export const getCompany = async () => {
	try {
		const { data } = await client.query({
			query: gql`
				query {
					companies {
						name
						slug
						id
						websiteUrl
						jobs {
							id
							slug
							company {
								id
								name
								slug
								websiteUrl
							}
							title
							isFeatured
							postedAt
							commitment {
								id
								title
							}
							locationNames
						}
						twitter
					}
				}
			`,
		});
		return data;
	} catch (err) {
		console.log(err);
	}
};
export const getJobsByLoc = async (loc: string) => {
	try {
		const { data } = await client.query({
			query: gql`
			query {
				jobs(input: { type: "city", slug: "${loc}" }) {
					id
					slug
					company {
						id
						name
						slug
						websiteUrl
					}
					title
					isFeatured
					postedAt
					commitment {
						id
						title
					}
					locationNames
				}
			}
		`,
		});
		return data;
	} catch (err) {
		console.log(err);
	}
};

export default client;
