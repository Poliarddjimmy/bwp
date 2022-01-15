import { createAsyncThunk } from "@reduxjs/toolkit"
import { Horses } from "./types"
import API from "../../services/API"

export const fecthHorsesAction = createAsyncThunk(
  Horses.FETCH_HORSES,

  async () => {
    try {
      const response = await API.fetchHorses()
      return response.data
    } catch (e) {
      console.log(e)
    }
  }
)

export const showHorseAction = createAsyncThunk(
  Horses.SHOW_HORSE,

  async (id) => {
    try {
      const response = await API.showHorse()
      return response.data
    } catch (e) {
      console.log(e)
    }
  }
)