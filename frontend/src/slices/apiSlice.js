// This is going to be parent to our other API slices.
// fetchBaseQuery is a function that allows us to make requests to our backend API

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../constants';

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

export const apiSlice = createApi({
	baseQuery,
	tagTypes: ['Product', 'Order', 'User'],
	endpoints: (builder) => ({})
});
