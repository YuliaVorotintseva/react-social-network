import { UPDATE_MESSAGE, SEND_MESSAGE } from '../Types'

const dialogsReducer = (state, action) => {
    switch(action.type) {
        case UPDATE_MESSAGE: {
            state.messageText = action.message
            break
        }

        case SEND_MESSAGE: {
            let message = state.messageText
            state.messages.push({
                message,
                avatar: 'https://avatars.mds.yandex.net/get-pdb/195449/0642142b-b08f-414f-b34d-ca70e6586c2a/s1200?webp=false',
                id: Math.random()
            })
            state.messageText = ''
            break
        }

        default: break
    }

    return state
}

export default dialogsReducer
