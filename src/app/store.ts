import { configureStore } from '@reduxjs/toolkit'
import tradeListReducer from '../features/trade-list/tradeListSlice'
import { enableMapSet } from 'immer';

enableMapSet();

export const store = configureStore({
  reducer: {
    tradeList: tradeListReducer
  }
})

// Get the type of our store variable
export type AppStore = typeof store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch']