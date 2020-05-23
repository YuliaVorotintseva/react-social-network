import React from 'react'
import styleClasses from './CreatePost.module.css'

const CreatePost = ({profileText, dispatch}) => {
    let el = React.createRef()

    const handleClick = () => {
        if(el.current.value.length === 0){
            alert('Write a message!')
        } else {
            dispatch({type: 'ADD_POST'})
            el.current.value = ''
        }
    }

    const onPostChange = () => {
        let text = el.current.value
        dispatch({
            type: 'UPDATE_TEXT',
            message: text
        })
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
                    onClick={() => el.current.value = ''}
                >
                    CLEAR
                </button>
            </div>
        </div>
    )
}

export default CreatePost
