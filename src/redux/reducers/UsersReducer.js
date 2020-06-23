import {FOLLOW, SET_USERS} from '../Types'

const initialState = {
    users: [
        {
            id: 1,
            followed: true,
            name: 'Alexander',
            avatar: 'https://avatars.mds.yandex.net/get-pdb/2080185/1b3048b8-08b8-478d-b157-3f8d78081f8d/s1200?webp=false',
            status: 'Fullstack developer',
            location: {
                country: 'USA',
                city: 'New York'
            }
        },

        {
            id: 2,
            followed: false,
            name: 'Sam',
            avatar: 'https://avatars.mds.yandex.net/get-pdb/2080185/1b3048b8-08b8-478d-b157-3f8d78081f8d/s1200?webp=false',
            status: 'Backend developer',
            location: {
                country: 'Russia',
                city: 'Omsk'
            }
        }
    ]
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
            return {...state, users: [...state.users, ...action.users]}
        }

        default: {}
    }

    return tempState
}

export default usersReducer
