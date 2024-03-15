import { configureStore } from '@reduxjs/toolkit'
import { FavsSlice, authSlice } from './slices'

export const store = configureStore({
  reducer: {
    FavsReducer: FavsSlice.reducer,
    AuthReducer: authSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch