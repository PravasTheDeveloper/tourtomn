import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUserById = createAsyncThunk('user/fetchUserProfile', async (userId) => {
  const response = await axios.get(`/api/userprofile/${userId}`);
  return response.data;
});

const profileDataSlice = createSlice({
  name: 'user',
  initialState: {
    DataStatus: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.DataStatus = action.payload;
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default profileDataSlice.reducer;
