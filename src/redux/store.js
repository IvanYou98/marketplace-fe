import { combineReducers, configureStore } from "@reduxjs/toolkit"

import wishListReducer from "./wishListRedux.js"

export default configureStore({
    reducer: combineReducers({
        wishList: wishListReducer
    })
})