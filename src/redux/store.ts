import { configureStore } from '@reduxjs/toolkit'
import { FavsSlice } from './slices'

export const store = configureStore({
  reducer: {
    FavsReducer: FavsSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch