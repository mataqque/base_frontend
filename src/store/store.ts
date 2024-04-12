import { configureStore } from '@reduxjs/toolkit';
import projectsSlice from './slice/projectsSlice';
import { type IProject } from './store.interface';

// const middleware = [filesManageApi.middleware, categoryApi.middleware, notesApi.middleware]

export interface RootState {
	projectsSlice: {
		projects: Map<number, IProject>;
	};
}

export const store = configureStore<RootState>({
	reducer: {
		projectsSlice,
	},
});

// setupListeners(store.dispatch)
