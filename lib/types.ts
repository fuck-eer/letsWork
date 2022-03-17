export type Job = {
	id: string;
	companyName: string;
	companyUrl: string;
	title: string;
	postedAt: Date;
	isFeatured: boolean;
	locationNames: string;
	commitment: string;
};
export type tag = {
	id: string;
	name: string;
};
export type tags = tag[];
export type JobDescription = {
	discription: string;
	applyUrl: string;
	tags: tags;
};
export type FullJob = Job & JobDescription;
export type Jobs = Job[];
