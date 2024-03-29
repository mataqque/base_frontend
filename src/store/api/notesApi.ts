import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_API_LOCAL } from '../config'
import { IPropsAddCategory, type IPropsDeleteNote, type IPropsGetNote, type IPropsSearchNote, type IPropsUpdateNote } from './interface'

export const notesApi = createApi({
	reducerPath: 'notesApi',
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_API_LOCAL,
	}),
	endpoints: builder => ({
		notes: builder.mutation({
			query: ({ page = 1, cant = 10, uuid = '' }: IPropsGetNote) => {
				return {
					url: `/notes?page=${page}&cant=${cant}&category=${uuid}`,
					method: 'GET',
				}
			},
		}),
		addNotes: builder.mutation({
			query: (data: IPropsUpdateNote) => {
				return {
					url: `/notes/add`,
					method: 'POST',
					body: data,
				}
			},
		}),
		deleteNotes: builder.mutation({
			query: (data: IPropsDeleteNote) => {
				return {
					url: `/notes/delete/${data.uuid}`,
					method: 'DELETE',
				}
			},
		}),
		searchNotes: builder.mutation({
			query: (data: IPropsSearchNote) => {
				return {
					url: `/notes/search?q=${data.search}`,
					method: 'GET',
				}
			},
		}),
	}),
})

export const { useNotesMutation, useAddNotesMutation, useDeleteNotesMutation, useSearchNotesMutation } = notesApi
