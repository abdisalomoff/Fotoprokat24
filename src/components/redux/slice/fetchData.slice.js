import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchData = createAsyncThunk("fetchData", async (params) => {
    const { url, options } = params;
    try {
        const response = await axios.request({ url, ...options });
        return response.data;
    } catch (error) {
        console.error(error);
    }
});

const getDataSlice = createSlice({
    name: "data",
    initialState: {
        loading: false,
        data: null,
        error: false,
    },

    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state, action) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.loading = false, 
            state.data = action.payload;
        })
        builder.addCase(fetchData.rejected, (state, action) => {
            state.loading = false,
            state.error = true;
        })
    }

})

export default getDataSlice.reducer;
