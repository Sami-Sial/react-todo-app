import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todo.slice";
import weatherSlice from "./weather.slice";
import userSlice from "./user.slice";


export const store = configureStore({
    reducer: {
        todos: todoSlice,
        weather: weatherSlice,
        user: userSlice
    },
})