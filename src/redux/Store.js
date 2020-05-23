import profileReducer from "./reducers/ProfileReducer"
import dialogsReducer from "./reducers/DialogsReducer"

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
        this.state.profile = profileReducer(this.state.profile, action)
        this.state.dialogs = dialogsReducer(this.state.dialogs, action)
        renderTree()
    }
}
