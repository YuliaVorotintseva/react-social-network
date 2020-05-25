import { createStore, combineReducers } from 'redux'
import profileReducer from "./reducers/ProfileReducer"
import dialogsReducer from "./reducers/DialogsReducer"

const reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer
})

const store = createStore(reducers)

export default store
