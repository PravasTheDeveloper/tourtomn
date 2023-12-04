import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axios from 'axios';

export const fetchData = createAsyncThunk('data/fetchUserData', async () => {
    try {
        const response = await axios.get('/api/userauthcheck', {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = response.data;
        return data;
    } catch (error) {
        
        console.error('Error fetching data:', error);
        throw error;
    }
});

const dataSlice = createSlice({
    name: "userdata",
    initialState: {
        status: null,
        data: [],
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.status = 200;
                state.data = action.payload;
                console.log("Hei Man")
                // console.log(action.payload)
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
})

export default dataSlice.reducer;