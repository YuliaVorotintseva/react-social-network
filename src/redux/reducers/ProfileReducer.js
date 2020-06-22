import { ADD_POST, UPDATE_TEXT, UPDATE_LIKES } from '../Types'

const initialState = {
    posts: [
        {
            message: 'Hello!',
            avatar: 'https://avatars.mds.yandex.net/get-pdb/195449/0642142b-b08f-414f-b34d-ca70e6586c2a/s1200?webp=false',
            likes: 100,
            dislikes: 0,
            id: 1
        },
        {
            message: 'React',
            avatar: 'https://avatars.mds.yandex.net/get-pdb/195449/0642142b-b08f-414f-b34d-ca70e6586c2a/s1200?webp=false',
            likes: 157,
            dislikes: 2,
            id: 2
        },
        {
            message: 'Redux',
            avatar: 'https://avatars.mds.yandex.net/get-pdb/195449/0642142b-b08f-414f-b34d-ca70e6586c2a/s1200?webp=false',
            likes: 146,
            dislikes: 7,
            id: 3
        }
    ],
    profileText: ''
}

const profileReducer = (state = initialState, action) => {
    let tempState = {...state}
    tempState.posts = state.posts.slice(0, state.posts.length)
    for(let i = 0; i < state.posts.length; ++i) {
        tempState.posts[i] = {...state.posts[i]}
    }

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

        default: {}
    }

    return tempState
}

export default profileReducer
