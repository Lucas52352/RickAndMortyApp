import { createSlice } from "@reduxjs/toolkit";

const initialState: { isAuth: boolean } = {
  isAuth: true
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logIn: (state) => {
      state.isAuth = true
    },
    logOut: (state) => {
      state.isAuth = false
    }
  }
})

export const { logIn, logOut } = authSlice.actions