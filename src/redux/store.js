import { combineReducers, configureStore } from "@reduxjs/toolkit"

import wishListReducer from "./wishListRedux.js"
import userReducer from "./userRedux.js"

export default configureStore({
    reducer: combineReducers({
        wishList: wishListReducer,
        user: userReducer
    })
})