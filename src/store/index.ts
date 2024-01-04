import { configureStore } from '@reduxjs/toolkit'
import formReducer from './slices/formSlice'
import carsReducer from './slices/carsSlice'

export const store = configureStore({
  reducer: {
    form: formReducer,
    cars: carsReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
