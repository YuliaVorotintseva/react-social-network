import {SUCCESS_AUTH, AUTH_LOGOUT} from '../Types'

const initialState = {
    token: null
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SUCCESS_AUTH: return {
            ...state,
            token: action.token
        }

        case AUTH_LOGOUT: return {
            ...state,
            token: null
        }
        
        default: return state
    }
}

export default authReducer
