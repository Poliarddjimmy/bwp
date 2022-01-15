import { fecthHorsesAction, showHorseAction } from '../actions/horsesActionsCreators'
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  horses: [],
  horse: {},
  error: null,
}

const HorsesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(showHorseAction.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(showHorseAction.fulfilled, (state, action) => {
      state.loading = false;
      if (!action.payload?.error) {
        state.horse = action?.payload
      } else {
      }
    })
    .addCase(showHorseAction.rejected, (state, action) => {
      state.loading = false;
    })

    .addCase(fecthHorsesAction.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(fecthHorsesAction.fulfilled, (state, action) => {
      state.loading = false;
      if (!action.payload?.error) {
        state.horses = action?.payload
      } else {
        state.error = "Error"
      }
    })
    .addCase(fecthHorsesAction.rejected, (state, action) => {
      state.loading = false;
    })
})


export default HorsesReducer;