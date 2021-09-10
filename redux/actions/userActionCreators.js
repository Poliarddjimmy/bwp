import { createAsyncThunk } from "@reduxjs/toolkit"
import { Auth, Users, Clear } from "./types"
import API from "../../services/API"

import { persistor } from "../store"

export const loginAction = createAsyncThunk(
  Auth.LOGIN,
  async (payload) => {
    try {
      const response = await API.login(payload)
      return response
    } catch (e) {
      console.log(e)
    }
  }
)

export const registerAction = createAsyncThunk(
  Auth.SIGNUP,
  async (payload) => {
    try {
      const response = await API.signup(payload)
      console.log(response.data)
      return response.data
    } catch (e) {
      console.log(e)
    }
  }
)

export const logoutAction = createAsyncThunk(Auth.LOGOUT, async () => {
  persistor.purge()
})

export const clearMessageAction = createAsyncThunk(Clear.CLEAR, async () => {
  return
})