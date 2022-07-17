import { createSlice } from "@reduxjs/toolkit"
import { samplePosts } from "../../data/samplePosts"

const initialState = samplePosts

const slicePosts = createSlice({
    name: "post",
    initialState,
    reducers: {}
})

export const selectAllPosts = state => state.posts

export default slicePosts.reducer