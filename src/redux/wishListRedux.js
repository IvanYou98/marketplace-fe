import { createSlice } from "@reduxjs/toolkit";

const wishListReducer = createSlice({
    name: "cart",
    initialState: {
        products: []
    },
    reducers: {
        setWishList: (state, action) => {
            state.products = action.payload.products;
        },
    }
})

// export action creators
export const { setWishList } = wishListReducer.actions;
export default wishListReducer.reducer;