import { PRODUCTS_URL, UPLOAD_URL } from '../constants';
import { apiSlice } from './apiSlice';
// apiSlice helps us deal with endpoints which are asynchronous, while createSlice dont deal with asynchronous endpoints.

export const productsApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getProducts: builder.query({
			query: ({ keyword, pageNumber }) => ({
				url: PRODUCTS_URL,
				params: {
					keyword,
					pageNumber
				}
			}),
			providesTags: ['Products'],
			keepUnusedDataFor: 5
		}),
		getProductById: builder.query({
			query: (id) => ({
				url: `${PRODUCTS_URL}/${id}`
			}),
			keepUnusedDataFor: 5
		}),
		createProduct: builder.mutation({
			query: () => ({
				url: `${PRODUCTS_URL}`,
				method: 'POST'
			}),
			invalidatesTags: ['Product']
		}),
		updateProduct: builder.mutation({
			query: (data) => ({
				url: `${PRODUCTS_URL}/${data.productId}`,
				method: 'PUT',
				body: data
			}),
			invalidatesTags: ['Products']
		}),
		uploadProductImage: builder.mutation({
			query: (data) => ({
				url: `${UPLOAD_URL}`,
				method: 'POST',
				body: data
			})
		}),
		deleteProduct: builder.mutation({
			query: (productId) => ({
				url: `${PRODUCTS_URL}/${productId}`,
				method: 'DELETE'
			}),
			providesTags: ['Product']
		}),
		createReview: builder.mutation({
			query: (data) => ({
				url: `${PRODUCTS_URL}/${data.productId}/reviews`,
				method: 'POST',
				body: data
			}),
			invalidatesTags: ['Product']
		}),
		getTopProducts: builder.query({
			query: () => ({
				url: `${PRODUCTS_URL}/top`
			}),
			keepUnusedDataFor: 5
		})
	})
});

export const {
	useGetProductsQuery,
	useGetProductByIdQuery,
	useCreateProductMutation,
	useUpdateProductMutation,
	useUploadProductImageMutation,
	useDeleteProductMutation,
	useCreateReviewMutation,
	useGetTopProductsQuery
} = productsApiSlice;
