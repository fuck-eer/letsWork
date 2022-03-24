import { Jobs } from "../lib/types";
import React, { useState } from "react";
type contextType = {
	allCtxJobs: Jobs;
	searched: boolean;
	toggleSearch: () => void;
	setAllJobsToCtx: (jobs: Jobs) => void;
	resetJobsToCtx: () => void;
};
export const JobsContext = React.createContext<contextType>({
	allCtxJobs: [],
	searched: false,
	toggleSearch: () => {},
	setAllJobsToCtx: (jobs: Jobs) => {},
	resetJobsToCtx: () => {},
});

const JobsContextProvider: React.FC<React.ReactNode> = ({ children }) => {
	const [allCtxJobs, setAllCtxJobs] = useState<Jobs>([]);
	const [searched, setSearched] = useState<boolean>(false);
	const toggleSearch = () => {
		setSearched(true);
	};
	const setAllJobsToCtx = (jobs: Jobs) => {
		setAllCtxJobs(jobs);
	};
	const resetJobsToCtx = () => {
		setAllCtxJobs([]);
		setSearched(false);
	};

	return (
		<JobsContext.Provider
			value={{
				allCtxJobs,
				searched,
				toggleSearch,
				setAllJobsToCtx,
				resetJobsToCtx,
			}}
		>
			{children}
		</JobsContext.Provider>
	);
};
export default JobsContextProvider;
