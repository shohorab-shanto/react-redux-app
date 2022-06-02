import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fethchPosts = createAsyncThunk("post/fetchPosts",async() =>{
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts"); 
    return res.data
})

const postSlice = createSlice({
    name:'posts',
    initialState:{
        isLoading:false,
        posts:[],
        error:null
    },

    extraReducers: (builder) => {
        builder.addCase(fethchPosts.pending,(state) => {
            state.isLoading = true;
        });
        builder.addCase(fethchPosts.fulfilled,(state,action) => {
            state.isLoading = false;
            state.posts = action.payload;
            state.error = null;
        });
        builder.addCase(fethchPosts.rejected,(state,action) => {
            state.isLoading = false;
            state.posts = [];
            state.error = action.error.message;
        });
    },
});

export default postSlice.reducer;