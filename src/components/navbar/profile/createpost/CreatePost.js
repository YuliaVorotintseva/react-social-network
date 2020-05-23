import React from 'react'
import styleClasses from './CreatePost.module.css'
import { addPostActionCreator, updateTextActionCreator } from '../../../../redux/Creators'

const CreatePost = ({profileText, dispatch}) => {
    let el = React.createRef()

    const handleClick = () => {
        if(el.current.value.length === 0){
            alert('Write a message!')
        } else {
            dispatch(addPostActionCreator())
        }
    }

    const onPostChange = () => {
        let text = el.current.value
        dispatch(updateTextActionCreator(text))
    }

    return (
        <div className={styleClasses.CreatePost}>
            <textarea
                onChange={onPostChange}
                value={profileText}
                ref={el}
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
                    onClick={() => dispatch(updateTextActionCreator(''))}
                >
                    CLEAR
                </button>
            </div>
        </div>
    )
}

export default CreatePost
