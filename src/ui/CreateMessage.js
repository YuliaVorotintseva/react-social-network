import React from 'react'
import styleClasses from './CreateMessage.module.css'

const CreateMessage = ({text, dispatch, updateActionCreator, addActionCreator}) => {
    let message = text

    const onMessageChange = e => {
        let tempText = e.target.value
        dispatch(updateActionCreator(tempText))
    }

    const handleClick = () => {
        if(message.length === 0) {
            alert('Write your message!')
        } else {
            dispatch(addActionCreator())
        }
    }

    return (
        <div className={styleClasses.CreateMessage}>
            <textarea
                value={text}
                onChange={onMessageChange}
            />
            
            <div>
                <button
                    className={styleClasses.btn}
                    onClick={handleClick}
                >
                    ADD
                </button>

                <button
                    className={styleClasses.btn}
                    onClick={() => dispatch(updateActionCreator(''))}
                >
                    CLEAR
                </button>
            </div>
        </div>
    )
}

export default CreateMessage
