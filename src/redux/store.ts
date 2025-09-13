import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './slices/counter';

export const store = configureStore({
  reducer : {
    counter: counterSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch