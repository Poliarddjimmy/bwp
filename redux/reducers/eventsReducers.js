import { fecthEventsAction, showEventAction } from "../actions/eventsActionCreators";
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  events: [],
  event: {},
  error: null,
}

const EventsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(showEventAction.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(showEventAction.fulfilled, (state, action) => {
      state.loading = false;
      if (!action.payload?.error) {
        state.event = action?.payload
      } else {
      }
    })
    .addCase(showEventAction.rejected, (state, action) => {
      state.loading = false;
    })

    .addCase(fecthEventsAction.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(fecthEventsAction.fulfilled, (state, action) => {
      state.loading = false;
      if (!action.payload?.error) {
        state.events = action?.payload
      } else {
        state.error = "This phone number is already taken"
      }
    })
    .addCase(fecthEventsAction.rejected, (state, action) => {
      state.loading = false;
    })
})


export default EventsReducer;