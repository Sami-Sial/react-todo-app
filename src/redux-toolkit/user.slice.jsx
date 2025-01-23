import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name: "user",
    initialState: {
        isLoading: false,
        error: null,
        user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {},
        isAuthenticated: false
    },
    reducers: {
        signUpUser: (state, action) => {
            state.user = action.payload;
            localStorage.setItem("user", JSON.stringify(state.user));
        },
        logoutUser: (state, action) => {
            state.user = {},
            localStorage.setItem("user", JSON.stringify(state.user));
        },
        // loginUser: (state, action) => {
        //     let { email, password } = action.payload;
        //     if(state.user.email == email && state.user.password == )
        // },
    }
});

export const { signUpUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;