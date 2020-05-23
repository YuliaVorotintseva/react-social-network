import { ADD_POST, UPDATE_TEXT, UPDATE_LIKES } from '../Types'

const profileReducer = (state, action) => {
    switch(action.type) {
        case ADD_POST: {
            let message = state.profileText
            state.posts.push({
                message,
                avatar: 'https://avatars.mds.yandex.net/get-pdb/195449/0642142b-b08f-414f-b34d-ca70e6586c2a/s1200?webp=false',
                likes: 0,
                dislikes: 0,
                id: Math.random()
            })
            state.profileText = ''
            break
        }

        case UPDATE_TEXT: {
            state.profileText = action.message
            break
        }

        case UPDATE_LIKES: {
            const posts = state.posts.slice(0, state.posts.length)
            const currentPost = posts.find( e => e.id === action.id)
        
            if(action.func === '+') ++currentPost.likes
            else ++currentPost.dislikes
        
            state.posts = posts
            break
        }

        default: break
    }

    return state
}

export default profileReducer
