import {
    ADD_POST,
    UPDATE_TEXT,
    UPDATE_LIKES,
    UPDATE_MESSAGE,
    SEND_MESSAGE,
    FOLLOW,
    SET_USERS
} from "./Types"

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateTextActionCreator = text => ({
    type: UPDATE_TEXT,
    message: text
})

export const updateLikes = (id, func) => ({
    type: UPDATE_LIKES,
    id,
    func
})

export const updateMessageActionCreator = message => ({
    type: UPDATE_MESSAGE,
    message
})

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})

export const followAC = id => ({
    type: FOLLOW,
    id
})

export const setUsersAC = users => ({
    type: SET_USERS,
    users
})
