import { ADD_POST, UPDATE_TEXT, UPDATE_LIKES } from "./Types"

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateTextActionCreator = text => ({
    type: UPDATE_TEXT,
    message: text
})

export const updateLikes = (id, func) => ({
    type: UPDATE_LIKES,
    id: id,
    func: func
})
