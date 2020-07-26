import { createStore, combineReducers } from 'redux'
import profileReducer from "./reducers/ProfileReducer"
import dialogsReducer from "./reducers/DialogsReducer"
import usersReducer from "./reducers/UsersReducer"
import authReducer from "./reducers/AuthReducer"

const reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    users: usersReducer,
    auth: authReducer
})

const store = createStore(reducers)

export default store
