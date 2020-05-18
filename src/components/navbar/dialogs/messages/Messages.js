import React from 'react'
import styleClasses from './Messages.module.css'
import Message from './message/Message'

const messages = [
    {message: 'JavaScript', id: 1},
    {message: 'React', id: 2},
    {message: 'Redux', id: 3},
    {message: 'Vue', id: 4},
    {message: 'Angular', id: 5},
    {message: 'NodeJS', id: 6}
]

const Messages = () => (
    <div className={styleClasses.Messages}>
        <Message message='JavaScript' />
        <Message message='React' />
        <Message message='Redux' />
   </div>
)

export default Messages
