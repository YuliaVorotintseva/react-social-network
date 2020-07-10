import {
    UPDATE_MESSAGE,
    SEND_MESSAGE,
    SET_MESSAGES,
    SET_MESSAGES_LOAD,
    SET_ITEMS_LOAD,
    SET_ITEMS
} from '../Types'

const initialState = {
    items: [],
    messages: [],
    messageText: '',
    isMessagesLoad: true,
    isItemsLoad: true
}

const dialogsReducer = (state = initialState, action) => {
    let tempState = {...state}
    tempState.messages = state.messages.slice(0, state.messages.length)

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

        case SET_MESSAGES: {
            tempState.messages = action.messages.slice(0, action.messages.length)
            break
        }

        case SET_ITEMS: {
            tempState.items = action.items.slice(0, action.items.length)
            break
        }

        case SET_MESSAGES_LOAD: {
            tempState.isMessagesLoad = action.isLoad
            break
        }

        case SET_ITEMS_LOAD: {
            tempState.isItemsLoad = action.isLoad
            break
        }

        default: {}
    }

    return tempState
}

export default dialogsReducer
