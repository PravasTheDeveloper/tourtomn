import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for fetching user feed
export const fetchFeedUser = createAsyncThunk(
    'feed/fetchUserFeed',
    async () => {
        const response = await axios.get('/api/feedshow');
        return response.data; // Assuming the response contains the data in `data` field
        // console.log(response.data)
    }
);

// Initial state for the slice
const initialState = {
    userFeed: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
};

// Slice
const feedSlice = createSlice({
    name: 'feeddata',
    initialState,
    reducers: {
        likeThePost(state, action) {
            const { id, auth } = action.payload

            const foundItem = state.userFeed.find(item => item._id === id);
           
            if (foundItem) {
                // Clone the found item to avoid mutating the original state
                const updatedItem = { ...foundItem };
                const userIdIndex = updatedItem.likes.findIndex(like => like.user === auth);


                if (userIdIndex !== -1) {
                    updatedItem.likes.splice(userIdIndex, 1);
                } else {
                    updatedItem.likes.push({ user: auth });
                }

                const itemIndex = state.userFeed.findIndex(item => item._id === id);

                state.userFeed[itemIndex] = updatedItem;
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFeedUser.pending, (state, action) => {
                state.status = 'loading';
            })

            .addCase(fetchFeedUser.fulfilled, (state, action) => {
                state.userFeed = action.payload;
            })

            .addCase(fetchFeedUser.rejected, (state, action) => {
                state.status = 'failed';
            })
    }

});

// Export the reducer
export default feedSlice.reducer;
export const { likeThePost } = feedSlice.actions

