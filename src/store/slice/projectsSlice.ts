import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type IProject } from '../store.interface';
import { data } from './data/combine';
import { type RootState } from '../store';

const projectsSlice = createSlice({
	name: 'projectsSlice',
	initialState: {
		projects: data,
	},
	reducers: {
		addProject: (state, action: PayloadAction<Map<number, IProject>>) => {
			state.projects = action.payload;
		},
		removeProject: (state, action: PayloadAction<number>) => {},
	},
});

export const { addProject } = projectsSlice.actions;
export default projectsSlice.reducer;

export const selectProjects = (state: RootState): Map<number, IProject> => {
	return state.projectsSlice.projects;
};
