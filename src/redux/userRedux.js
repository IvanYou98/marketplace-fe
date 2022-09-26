import { createSlice } from "@reduxjs/toolkit";

const UserReducer = createSlice({
    name: "user",
    initialState: null,
    reducers: {
        setUser: (state, action) => {
            state = action.payload;
        }
    }
})

export const { setUser } = UserReducer.actions;
export default UserReducer.reducer;