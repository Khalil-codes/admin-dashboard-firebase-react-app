import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        saveProducts: (state, action) => {
            return [...action.payload];
        },
    },
});

export const { saveProducts } = productsSlice.actions;

export default productsSlice.reducer;
