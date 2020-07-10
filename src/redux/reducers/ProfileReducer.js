import { ADD_POST, UPDATE_TEXT, UPDATE_LIKES, SET_POSTS, SET_LOAD } from '../Types'

const initialState = {
    posts: [],
    profileText: '',
    isLoad: true
}

const profileReducer = (state = initialState, action) => {
    let tempState = {...state}
    tempState.posts = state.posts.slice(0, state.posts.length)

    switch(action.type) {
        case ADD_POST: {
            let message = tempState.profileText
            tempState.posts.push({
                message,
                avatar: 'https://avatars.mds.yandex.net/get-pdb/195449/0642142b-b08f-414f-b34d-ca70e6586c2a/s1200?webp=false',
                likes: 0,
                dislikes: 0,
                id: Math.random()
            })
            tempState.profileText = ''
            break
        }

        case UPDATE_TEXT: {
            tempState.profileText = action.message
            break
        }

        case UPDATE_LIKES: {
            const posts = state.posts.slice(0, state.posts.length)
            const currentPost = posts.find( e => e.id === action.id)
        
            if(action.func === '+') ++currentPost.likes
            else ++currentPost.dislikes
        
            tempState.posts = posts
            break
        }

        case SET_POSTS: {
            tempState.posts = action.posts.slice(0, action.posts.length)
            break
        }

        case SET_LOAD: {
            tempState.isLoad = action.isLoad
            break
        }

        default: {}
    }

    return tempState
}

export default profileReducer
