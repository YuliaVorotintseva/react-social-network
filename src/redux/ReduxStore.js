import { createStore, combineReducers } from 'redux'
import profileReducer from "./reducers/ProfileReducer"
import dialogsReducer from "./reducers/DialogsReducer"
import usersReducer from "./reducers/UsersReducer"

const reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    users: usersReducer
})

const store = createStore(reducers)

export default store
