import React from 'react'
import CreateMessage from './CreateMessage'
import StoreContext from '../StoreContext'

const MessageContainer = ({updateActionCreator, addActionCreator}) => (
    <StoreContext.Consumer>
        {
            value => {
                let message = value.state.profile.profileText

                const onMessageChange = e => {
                    let tempText = e.target.value
                    value.dispatch(updateActionCreator(tempText))
                }

                const handleClick = () => {
                    if(message.length === 0) {
                        alert('Write your message!')
                    } else {
                        value.dispatch(addActionCreator())
                    }
                }

                return (
                    <CreateMessage
                        text={message}
                        update={onMessageChange}
                        add={handleClick}
                        clear={() => value.dispatch(updateActionCreator(''))}
                    />
                )
            }
        }
    </StoreContext.Consumer>
)

export default MessageContainer
