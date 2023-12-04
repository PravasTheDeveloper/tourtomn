import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./ReduxSlices/userReducer"
import postWindowReducer from "./ReduxSlices/postWindowReducer"
import profileDataReducer from "./ReduxSlices/userProfileSearch"
import feedDataReducer from "./ReduxSlices/postshowReducer"

const store = configureStore({
    reducer: {
        userdata: userReducer,
        postwindow: postWindowReducer,
        profiledata: profileDataReducer,
        feeddata: feedDataReducer
    }
})

export default store;