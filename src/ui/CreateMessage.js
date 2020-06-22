import React from 'react'
import styleClasses from './CreateMessage.module.css'

const CreateMessage = ({text, update, add, clear}) => (
        <div className={styleClasses.CreateMessage}>
            <textarea
                onChange={e => update(e.target.value)}
                value = {text}
            />
            
            <div>
                <button
                    className={styleClasses.btn}
                    onClick={add}
                >
                    ADD
                </button>

                <button
                    className={styleClasses.btn}
                    onClick={clear}
                >
                    CLEAR
                </button>
            </div>
        </div>
    )

export default CreateMessage
