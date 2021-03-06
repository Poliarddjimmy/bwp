import UserReducer from './reducers/userReducer'
import { persistReducer } from "redux-persist";
import ProfileReducer from './reducers/profileReducers';
import storage from 'redux-persist/lib/storage'
import EventsReducer from './reducers/eventsReducers';

const userPersistConfig = {
  key: 'user',
  version: 1,
  storage
}
const persistedUserReducer = persistReducer(userPersistConfig, UserReducer)

const rootReducer = {
  user: persistedUserReducer,
  profile: ProfileReducer,
  events: EventsReducer
}

export default rootReducer;