import UserReducer from './userReducer'
import { persistReducer } from "redux-persist";
import ProfileReducer from './profileReducers';
import storage from 'redux-persist/lib/storage'

const userPersistConfig = {
  key: 'user',
  version: 1,
  storage
}
const persistedUserReducer = persistReducer(userPersistConfig, UserReducer)

const rootReducer = {
  user: persistedUserReducer,
  profile: ProfileReducer
}

export default rootReducer;