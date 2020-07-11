import React from 'react'
import styleClasses from './Button.module.css'

const Button = props => {
    return (
        <button
            onClick={props.onClick}
            className={styleClasses.Button}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    )
}

export default Button
