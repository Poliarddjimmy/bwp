import { fecthGamesAction, fecthCurrentGameAction } from "../actions/GamesActionsCreators";
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  games: [],
  game: {},
  error: null,
}

const GamesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fecthGamesAction.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(fecthGamesAction.fulfilled, (state, action) => {
      state.loading = false;
      if (!action.payload?.error) {
        state.games = action?.payload
      } else {
      }
    })
    .addCase(fecthGamesAction.rejected, (state, action) => {
      state.loading = false;
    })

    .addCase(fecthCurrentGameAction.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(fecthCurrentGameAction.fulfilled, (state, action) => {
      state.loading = false;
      if (!action.payload?.error) {
        state.game = action?.payload
      } else {
        state.error = "Error"
      }
    })
    .addCase(fecthCurrentGameAction.rejected, (state, action) => {
      state.loading = false;
    })
})


export default GamesReducer;