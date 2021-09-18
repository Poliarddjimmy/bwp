import { createAsyncThunk } from "@reduxjs/toolkit"
import { Profiles, Clear, Events } from "./types"
import API from "../../services/API"


export const fecthEventsAction = createAsyncThunk(
  Events.FETCH_EVENTS,

  async () => {
    try {
      const response = await API.fetchEvents()
      return response.data
    } catch (e) {
      console.log(e)
    }
  }
)

export const showEventAction = createAsyncThunk(
  Events.SHOW_EVENT,

  async (id) => {
    try {
      const response = await API.showEvent(id)
      return response.data
    } catch (e) {
      console.log(e)
    }
  }
)