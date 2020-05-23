import { ADD_POST, UPDATE_TEXT, UPDATE_LIKES, UPDATE_MESSAGE, SEND_MESSAGE } from "./Types"

let renderTree = () => {}

export const subscribe = observer => {
    renderTree = observer
}

export const store = {
    state: {
        dialogs: {
            items: [
                {
                    name: 'Slava',
                    avatar: 'https://avatars.mds.yandex.net/get-pdb/195449/0642142b-b08f-414f-b34d-ca70e6586c2a/s1200?webp=false',
                    id: '1'
                },
                {
                    name: 'Misha',
                    avatar: 'https://avatars.mds.yandex.net/get-pdb/195449/0642142b-b08f-414f-b34d-ca70e6586c2a/s1200?webp=false',
                    id: '2'
                },
                {
                    name: 'Sasha',
                    avatar: 'https://avatars.mds.yandex.net/get-pdb/195449/0642142b-b08f-414f-b34d-ca70e6586c2a/s1200?webp=false',
                    id: '3'
                }
            ],
            messages: [
                {
                    message: 'JavaScript',
                    avatar: 'https://avatars.mds.yandex.net/get-pdb/195449/0642142b-b08f-414f-b34d-ca70e6586c2a/s1200?webp=false',
                    id: 1
                },
                {
                    message: 'React',
                    avatar: 'https://avatars.mds.yandex.net/get-pdb/195449/0642142b-b08f-414f-b34d-ca70e6586c2a/s1200?webp=false',
                    id: 2
                },
                {
                    message: 'Redux',
                    avatar: 'https://avatars.mds.yandex.net/get-pdb/195449/0642142b-b08f-414f-b34d-ca70e6586c2a/s1200?webp=false',
                    id: 3
                },
                {
                    message: 'Vue',
                    avatar: 'https://avatars.mds.yandex.net/get-pdb/195449/0642142b-b08f-414f-b34d-ca70e6586c2a/s1200?webp=false',
                    id: 4
                },
                {
                    message: 'Angular',
                    avatar: 'https://avatars.mds.yandex.net/get-pdb/195449/0642142b-b08f-414f-b34d-ca70e6586c2a/s1200?webp=false',
                    id: 5
                },
                {
                    message: 'NodeJS',
                    avatar: 'https://avatars.mds.yandex.net/get-pdb/195449/0642142b-b08f-414f-b34d-ca70e6586c2a/s1200?webp=false',
                    id: 6
                }
            ],

            messageText: ''
        },
    
        profile: {
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
    },

    dispatch(action) {
        switch(action.type) {
            case ADD_POST: {
                let message = this.state.profile.profileText
                this.state.profile.posts.push({
                    message,
                    avatar: 'https://avatars.mds.yandex.net/get-pdb/195449/0642142b-b08f-414f-b34d-ca70e6586c2a/s1200?webp=false',
                    likes: 0,
                    dislikes: 0,
                    id: Math.random()
                })
                this.state.profile.profileText = ''
                renderTree()
                break
            }

            case UPDATE_TEXT: {
                this.state.profile.profileText = action.message
                renderTree()
                break
            }

            case UPDATE_LIKES: {
                const posts = this.state.profile.posts.slice(0, this.state.profile.posts.length)
                const currentPost = posts.find( e => e.id === action.id)
            
                if(action.func === '+') ++currentPost.likes
                else ++currentPost.dislikes
            
                this.state.profile.posts = posts
                renderTree()
                break
            }

            case UPDATE_MESSAGE: {
                console.log(action.message)
                this.state.dialogs.messageText = action.message
                renderTree()
                break
            }

            case SEND_MESSAGE: {
                let message = this.state.dialogs.messageText
                this.state.dialogs.messages.push({
                    message,
                    avatar: 'https://avatars.mds.yandex.net/get-pdb/195449/0642142b-b08f-414f-b34d-ca70e6586c2a/s1200?webp=false',
                    id: Math.random()
                })
                this.state.dialogs.messageText = ''
                renderTree()
                break
            }

            default: break
        }
    }
}
