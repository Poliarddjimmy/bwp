import {
  showProfileAction,
  editProfileAction
} from "../actions/profileActionCreators";
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  profile: null,
  error: null,
}

const ProfileReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(showProfileAction.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(showProfileAction.fulfilled, (state, action) => {
      state.loading = false;
      if (!action.payload?.error) {
        state.profile = action.payload
      } else {
      }
    })
    .addCase(showProfileAction.rejected, (state, action) => {
      state.loading = false;
    })

    .addCase(editProfileAction.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(editProfileAction.fulfilled, (state, action) => {
      state.loading = false;
      if (!action.payload?.error) {
      } else {
        state.error = "This phone number is already taken"
      }
    })
    .addCase(editProfileAction.rejected, (state, action) => {
      state.loading = false;
    })
})


export default ProfileReducer;