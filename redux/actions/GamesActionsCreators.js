import { createAsyncThunk } from "@reduxjs/toolkit"
import { Games } from "./types"
import API from "../../services/API"

export const fecthGamesAction = createAsyncThunk(
  Games.FETCH_GAMES,

  async () => {
    try {
      const response = await API.fetchGames()
      return response.data
    } catch (e) {
      console.log(e)
    }
  }
)

export const fecthCurrentGameAction = createAsyncThunk(
  Games.FETCH_CURRENT_GAME,

  async (id) => {
    try {
      const response = await API.fecthCurrentGame()
      return response.data
    } catch (e) {
      console.log(e)
    }
  }
)