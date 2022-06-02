import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import postReducer from "../features/post/postSlice";

const storeToolkit = configureStore({
    reducer:{
        counter: counterReducer,
        posts:postReducer,
    }
})

export default storeToolkit;  