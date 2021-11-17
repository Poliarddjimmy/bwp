import { createAsyncThunk } from "@reduxjs/toolkit"
import { Profiles, Clear } from "./types"
import API from "../../services/API"


export const showProfileAction = createAsyncThunk(
  Profiles.SHOW_PROFILE,

  async (payload) => {
    try {
      const response = await API.showProfile(payload)
      return response.data
    } catch (e) {
      console.log(e)
    }
  }
)

export const editProfileAction = createAsyncThunk(
  Profiles.EDIT_PROFILE,

  async (payload, id) => {
    try {
      const response = await API.editProfile(payload, id)
      return response.data
    } catch (e) {
      console.log(e)
    }
  }
)