import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import dashboardSlice from './slice/dashboardSlice'
import filesManageSlice from './slice/file_managerSlice'
import categorySlice from './slice/categorySlice'
import { filesManageApi } from './api/filesApi'
import { categoryApi } from './api/categoryApi'
import notesSlice from './slice/notesSlide'
import { notesApi } from './api/notesApi'
import { IDash } from './store.interface'

const middleware = [filesManageApi.middleware, categoryApi.middleware, notesApi.middleware]

interface RootState {
	dashboardSlice: {
		activeId: number;
	};
}

export const store = configureStore<RootState>({
	reducer: {
		dashboardSlice,
		// filesManageSlice,
		// notesSlice,
		// categorySlice,
		// [notesApi.reducerPath]: notesApi.reducer,
		// [categoryApi.reducerPath]: categoryApi.reducer,
		// [filesManageApi.reducerPath]: filesManageApi.reducer,
	},
})

// setupListeners(store.dispatch)
