import { createSlice } from '@reduxjs/toolkit'
import { getItem } from '../../Utils/localStorage'
import type { PayloadAction } from '@reduxjs/toolkit'

interface FavsAddState {
  id: string | number
  name: string
  image: string
  info: string[]
}

interface FavsRemoveState {
  id: string | number
}

const initialState: FavsAddState[] = getItem('favs') || []

export const FavsSlice = createSlice({
  name: 'favs',
  initialState,
  reducers: {
    addToFavs: (state, action: PayloadAction<FavsAddState>) => {

      const { id } = action.payload

      if (state.length === 0 || state.filter(item => item.id === id).length === 0) {
        state.push(action.payload)
      }
    },
    removeFromFavs: (state, action: PayloadAction<FavsRemoveState>) => {
      const { id } = action.payload

      if (state.some(item => item.id === id)) {
        return state = state.filter(item => item.id !== id)
      }
    },
  }
})

export const { addToFavs, removeFromFavs } = FavsSlice.actions