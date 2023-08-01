import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import counterReduces from "./features/counter/counterSlice";
import logger from "./features/middlewares/logger";
// import {logger} from "redux-logger"

const store = configureStore({
    reducer:{
        counter:counterReduces

    }
,
// devTools:true
middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store