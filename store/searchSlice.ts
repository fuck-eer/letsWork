import { RootState } from "./store";
import { createSlice } from "@reduxjs/toolkit";
import { Jobs } from "../lib/types";
type initSta = {
	resJobs: Jobs;
};
const initialState: initSta = {
	resJobs: [],
};

const searchSlice = createSlice({
	initialState,
	name: "searchSlice",
	reducers: {
		setAllJobs(state, action) {
			state.resJobs = action.payload.jobs;
		},
	},
});

export default searchSlice.reducer;
export const searchActions = searchSlice.actions;
export const searchStateGetter = (state: RootState) => state.resJobs;
