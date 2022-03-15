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

  async () => {
    try {
      const response = await API.fecthCurrentGame()
      return response.data
    } catch (e) {
      console.log(e)
    }
  }
)

export const createGameUserAction = createAsyncThunk(
  Games.GAMES_USERS,

  async (payload) => {
    try {
      const response = await API.createGameUser(payload)
      return response.data?.game_user
    } catch (e) {
      console.log(e)
    }
  }
)

export const secondLastGameAction = createAsyncThunk(
  Games.SECOND_LAST_GAME,

  async () => {
    try {
      const response = await API.secondLastGame()
      return response.data
    } catch (e) {
      console.log(e)
    }
  }
)