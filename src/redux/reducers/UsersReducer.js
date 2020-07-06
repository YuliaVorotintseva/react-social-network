import {FOLLOW, SET_USERS} from '../Types'

const initialState = {
    users: [],
    pageSize: 0,
    totalUsersCount: 0
}

const usersReducer = (state = initialState, action) => {
    let tempState = {...state}
    for(let i = 0; i < state.users.length; ++i) {
        tempState.users[i] = {...state.users[i]}
    }

    switch(action.type) {
        case FOLLOW: {
            let users = state.users.slice(0, state.users.length)
            let currentUser = users.find(e => e.id === action.id)

            currentUser.followed = !currentUser.followed
            tempState.users = users
            break
        }

        case SET_USERS: {
            //return {...state, users: [...state.users, ...action.users]}
            tempState.users = action.users.slice(0, action.users.length)
            break
        }

        default: {}
    }

    return tempState
}

export default usersReducer
