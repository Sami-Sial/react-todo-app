import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getWeatherData = createAsyncThunk("getWeatherData", async (city) => {
    try {
        let {data} = await axios.get(import.meta.env.VITE_WEATHER_API_BASE_URL + city + `&appid=${import.meta.env.VITE_WEATHER_API_KEY}`);
        
        return data;
    } catch (error) {
        return error.response.data.message;
    }
})


export const weatherSlice = createSlice({
    name: "todos",
    initialState: {
        isLoading: false,
        error: null,
        weatherData: null
    },
    extraReducers: (builder) => {
           builder.addCase(getWeatherData.pending, (state, action) => {
            state.isLoading = true
        });
        builder.addCase(getWeatherData.rejected, (state, action) => {
            state.error = action.payload
        });
        builder.addCase(getWeatherData.fulfilled, (state, action) => {
            state.isLoading = false

            state.weatherData = action.payload;   
        });
    }
});

export default weatherSlice.reducer;