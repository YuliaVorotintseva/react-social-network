import React from 'react'
import styleClasses from './CreateMessage.module.css'
import Button from '../button/Button'

const CreateMessage = ({text, update, add, clear}) => (
        <div className={styleClasses.CreateMessage}>
            <textarea
                onChange={e => update(e.target.value)}
                value = {text}
            />
            
            <div>
                <Button onClick={add}>ADD</Button>
                <Button onClick={clear}>CLEAR</Button>
            </div>
        </div>
    )

export default CreateMessage
