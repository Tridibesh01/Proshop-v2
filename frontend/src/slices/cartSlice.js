import { createSlice } from '@reduxjs/toolkit';
// apiSlice helps us deal with endpoints which are asynchronous, while createSlice dont deal with asynchronous endpoints.

import { updateCart } from '../utils/cartUtils';

const initialState = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : { cartItems: [], shippingAddress: {}, paymentMethod: 'PayPal' };

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const item = action.payload;

			const existItem = state.cartItems.find((x) => x._id === item._id);

			if (existItem) {
				state.cartItems = state.cartItems.map((x) => (x._id === existItem._id ? item : x));
			} else {
				state.cartItems = [...state.cartItems, item];
			}
			return updateCart(state);
		},
		removeFromCart: (state, action) => {
			state.cartItems = state.cartItems.filter((x) => x._id !== action.payload);

			return updateCart(state);
		},
		saveShippingAddress: (state, action) => {
			state.shippingAddress = action.payload;
			return updateCart(state);
		},
		savePaymentMethod: (state, action) => {
			state.paymentMethod = action.payload;
			return updateCart(state);
		},
		clearCartItems: (state, action) => {
			state.cartItems = [];
			localStorage.setItem('cart', JSON.stringify(state));
		}
	}
});
//reducers object contains the functions that has anything to do with the cart such as add item or delete item from the cart

export const { addToCart, removeFromCart, saveShippingAddress, savePaymentMethod, clearCartItems } = cartSlice.actions;

export default cartSlice.reducer;
