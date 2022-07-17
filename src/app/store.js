import { configureStore } from "@reduxjs/toolkit"
import postsReducer from "./features/posts/slicePosts"

export const store = configureStore({
    reducer: {
        posts: postsReducer
    }
})