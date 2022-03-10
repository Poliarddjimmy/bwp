import { fecthGamesAction, fecthCurrentGameAction, createGameUserAction, secondLastGameAction } from "../actions/GamesActionsCreators";
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  games: [],
  game: {},
  error: null,
  game_user: {},
  second_last_game: {}
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
    .addCase(fecthCurrentGameAction.rejected, (state, action) => { //fecthCurrentGameAction
      state.loading = false;
    })
    .addCase(createGameUserAction.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(createGameUserAction.fulfilled, (state, action) => {
      state.loading = false;
      if (!action.payload?.error) {
        state.game_user = action?.payload
      } else {
      }
    })
    .addCase(createGameUserAction.rejected, (state, action) => {
      state.loading = false;
    })
    .addCase(secondLastGameAction.fulfilled, (state, action) => {
      state.loading = false;
      if (!action.payload?.error) {
        state.second_last_game = action?.payload
      } else {
      }
    })
    .addCase(secondLastGameAction.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(secondLastGameAction.rejected, (state, action) => {
      state.loading = false;
    })
})


export default GamesReducer;