const LOGIN = "users/login"
const LOGOUT = "users/logout"
const SIGNUP = "users/signup"
const ADD_SESSION = "users/add_session"

const FETCH_USER = "users"
const SHOW_USER = "users/show"
const SEARCH_USER = "users/search"
const EDIT_USER = "users/update"
const CREATE_USER = "users/create"
const DELETE_USER = "users/delete"
const CHANGE_PASSWORD = "users/change-password"
const USER_CONFIRM = "users/confirm"

const SHOW_PROFILE = "users/profile"
const EDIT_PROFILE = "users/profile/edit"

const FETCH_EVENTS = "events"
const SHOW_EVENT = "events/id"

const FETCH_GAMES = "games"
const FETCH_CURRENT_GAME = "game-current"

const GAMES_USERS = "game_users"

const FETCH_HORSES = "horses"
const SHOW_HORSE = "horses/id"

const CLEAR = "clear"

const SECOND_LAST_GAME = "second-last-game"

const Auth = {
  LOGIN,
  LOGOUT,
  SIGNUP,
  ADD_SESSION,
}

const Users = {
  FETCH_USER,
  SHOW_USER,
  SEARCH_USER,
  EDIT_USER,
  CREATE_USER,
  DELETE_USER,
  CHANGE_PASSWORD,
  USER_CONFIRM,
}

const Profiles = {
  SHOW_PROFILE,
  EDIT_PROFILE,
}

const Clear = {
  CLEAR,
}

const Events = {
  FETCH_EVENTS,
  SHOW_EVENT
}

const Games = {
  FETCH_GAMES,
  FETCH_CURRENT_GAME,
  SECOND_LAST_GAME
}

const GameUsers = {
  GAMES_USERS,
}

const Horses = {
  FETCH_HORSES,
  SHOW_HORSE
}


export {
  Auth,
  Users,
  Clear,
  Profiles,
  Events,
  Games,
  Horses,
  GameUsers,
}
