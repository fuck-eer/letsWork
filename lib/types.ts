export type Job = {
	id: string;
	company: Company;
	title: string;
	postedAt: Date;
	isFeatured: boolean;
	locationNames: string;
	commitment: Commitment;
	slug: string;
};
export type Company = {
	name: string;
	id: string;
	websiteUrl: string;
	slug: string;
	jobs?: Jobs;
	twitter?: string;
};
export type Commitment = {
	id: string;
	title: string;
};
export type tag = {
	id: string;
	name: string;
};
export type City = {
	id: string;
	name: string;
};
export type tags = tag[];
export type JobDescription = {
	description: string;
	applyUrl: string;
	tags: tags;
};
export type FullJob = Job & JobDescription;
export type Jobs = Job[];
