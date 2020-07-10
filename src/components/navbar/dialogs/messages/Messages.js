import React from 'react'
import styleClasses from './Messages.module.css'
import Message from './message/Message'
import CreateMessageContainer from './message/CreateMessageContainer'
import Loader from '../../../ui/loader/Loader'
import axios from 'axios'

class Messages extends React.Component {
    async componentDidMount() {
        let messages = []
        const response = await axios
            .get('https://react-social-network-cb9d8.firebaseio.com/messages.json')
        Object.values(response.data).forEach(
            messagesArr => messagesArr.map(message => messages.push(message))
        )
        this.props.setMessages(messages)
        this.props.setMessagesLoad(false)
    }

    render() {
        return (
            <div className={styleClasses.Messages}>
                {
                    this.props.isLoad
                    ? <Loader />
                    : this.props.messages.map(({message, avatar, id}) => <Message
                            key={id}
                            message={message}
                            avatar={avatar}
                        />
                    )
                }

                <hr />
                <CreateMessageContainer />
            </div>
        )
    }
}

export default Messages
