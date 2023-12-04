import { createSlice } from '@reduxjs/toolkit'

const postWindowSlice = createSlice({
    name: "postwindow",
    initialState: {
        postwindowstatus: false,
        // data: [],
        loading: false,
    },
    reducers: {
        postWindowOpen(state, action) {
            state.postwindowstatus = true
        },

        postWindowClose(state, action) {
            state.postwindowstatus = false
        }
    },
})

export default postWindowSlice.reducer
export const { postWindowOpen, postWindowClose } = postWindowSlice.actions