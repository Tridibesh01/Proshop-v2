import { USERS_URL } from '../constants';
import { apiSlice } from './apiSlice';
// apiSlice helps us deal with endpoints which are asynchronous, while createSlice dont deal with asynchronous endpoints.

export const usersApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation({
			//mutation not query because unlike query, we also want to pass in some data.
			query: (data) => ({
				url: `${USERS_URL}/auth`,
				method: 'POST',
				body: data
			})
		}),
		register: builder.mutation({
			query: (data) => ({
				url: `${USERS_URL}`,
				method: 'POST',
				body: data
			})
		}),
		logout: builder.mutation({
			query: () => ({
				url: `${USERS_URL}/logout`,
				method: 'POST'
			})
		}),
		profile: builder.mutation({
			query: (data) => ({
				url: `${USERS_URL}/profile`,
				method: 'PUT',
				body: data
			})
		})
	})
});

export const { useLoginMutation, useLogoutMutation, useRegisterMutation, useProfileMutation } = usersApiSlice;
