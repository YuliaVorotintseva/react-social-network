import React from 'react'
import styleClasses from './CreatePost.module.css'

const CreatePost = ({addPost, updateText}) => {
    let el = React.createRef()

    const handleClick = () => {
        let text = el.current.value
        if(text.length === 0){
            alert('Write a message!')
        } else {
            addPost(text)
            el.current.value = ''
        }
    }

    const onPostChange = () => {
        let text = el.current.value
        updateText(text)
    }

    return (
        <div className={styleClasses.CreatePost}>
            <textarea
                placeholder='Write your message here'
                onChange={onPostChange}
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
