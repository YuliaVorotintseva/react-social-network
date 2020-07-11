import React from 'react'
import styleClasses from './Input.module.css'

const isInvalid = ({valid, touched, shouldValidate}) => !valid && shouldValidate && touched

const Input = props => {
    const type = props.type || 'text'
    let cls = [styleClasses.Input]
    const htmlFor = `${type}-${Math.random()}`

    if(isInvalid(props)) cls.push(styleClasses.invalid)

    return (
        <div className={cls.join(' ')}>
            <label htmlFor={htmlFor}>
                {props.label}
            </label>

            <input
                type={type}
                id={htmlFor}
                value={props.value}
                onChange={props.onChange}
            />

            {
                isInvalid(props)
                ? <span>{props.errorMessage}</span>
                : null
            }
        </div>
    )
}

export default Input
