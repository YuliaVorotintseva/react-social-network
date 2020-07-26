import {
    ADD_POST,
    UPDATE_TEXT,
    UPDATE_LIKES,
    UPDATE_MESSAGE,
    SEND_MESSAGE,
    FOLLOW,
    SET_USERS,
    SET_LOAD,
    SET_POSTS,
    SET_MESSAGES,
    SET_ITEMS,
    SET_MESSAGES_LOAD,
    SET_ITEMS_LOAD,
    SUCCESS_AUTH,
    AUTH_LOGOUT
} from "./Types"

export const addPost = () => ({type: ADD_POST})

export const updateText = text => ({
    type: UPDATE_TEXT,
    message: text
})

export const updateLikes = (id, func) => ({
    type: UPDATE_LIKES,
    id,
    func
})

export const setPosts = posts => ({
    type: SET_POSTS,
    posts
})

export const updateMessage = message => ({
    type: UPDATE_MESSAGE,
    message
})

export const sendMessage = () => ({type: SEND_MESSAGE})

export const setMessages = messages => ({
    type: SET_MESSAGES,
    messages
})

export const setItems = items => ({
    type: SET_ITEMS,
    items
})

export const follow = id => ({
    type: FOLLOW,
    id
})

export const setUsers = users => ({
    type: SET_USERS,
    users
})

export const setLoad = load => ({
    type: SET_LOAD,
    load
})

export const setMessagesLoad = load => ({
    type: SET_MESSAGES_LOAD,
    load
})

export const setItemsLoad = load => ({
    type: SET_ITEMS_LOAD,
    load
})

export const authSuccess = token => ({
    type: SUCCESS_AUTH,
    token
})

export const logout = () => ({type: AUTH_LOGOUT})
