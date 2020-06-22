import { UPDATE_MESSAGE, SEND_MESSAGE } from '../Types'

const initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    let tempState = {...state}
    tempState.messages = state.messages.slice(0, state.messages.length)
    for(let i = 0; i < state.messages.length; ++i) {
        tempState.messages[i] = {...state.messages[i]}
    }

    switch(action.type) {
        case UPDATE_MESSAGE: {
            tempState.messageText = action.message
            break
        }

        case SEND_MESSAGE: {
            let message = tempState.messageText
            tempState.messages.push({
                message,
                avatar: 'https://avatars.mds.yandex.net/get-pdb/195449/0642142b-b08f-414f-b34d-ca70e6586c2a/s1200?webp=false',
                id: Math.random()
            })
            tempState.messageText = ''
            break
        }

        default: {}
    }

    return tempState
}

export default dialogsReducer
