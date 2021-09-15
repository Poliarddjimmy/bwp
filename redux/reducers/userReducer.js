import {
  loginAction,
  logoutAction,
  registerAction,
  clearMessageAction
} from "../actions/userActionCreators";
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  users: [],
  user: null,
  currentUser: null,
  access_token: null,
  error: null,
}

const UserReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loginAction.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(loginAction.fulfilled, (state, action) => {
      state.loading = false;
      if (!action.payload?.error) {
        state.currentUser = action.payload?.current_user;
        state.access_token = action.payload?.access_token
      } else {
        state.error = "This phone number is already taken"
      }
    })
    .addCase(loginAction.rejected, (state, action) => {
      state.loading = false;
    })

    .addCase(registerAction.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(registerAction.fulfilled, (state, action) => {
      state.loading = false;
      if (!action.payload?.error) {
        state.currentUser = action.payload?.current_user;
        state.access_token = action.payload?.access_token
      } else {
        state.error = "This phone number is already taken"
      }
    })
    .addCase(registerAction.rejected, (state, action) => {
      state.loading = false;
    })

    .addCase(logoutAction.pending, (state, action) => {
      state.token = null;
      state.currentUser = null;
    })
    .addCase(logoutAction.fulfilled, (state, action) => {
      state.token = null;
      state.currentUser = null;
    })

    .addCase(clearMessageAction.pending, (state, action) => {
      state.error = null;
    })
    .addCase(clearMessageAction.fulfilled, (state, action) => {
      state.error = null;
    })
})


export default UserReducer;