import React from 'react'
import styleClasses from './CreatePost.module.css'

const CreatePost = () => {
    let el = React.createRef()

    const addPost = () => {
        let text = el.current.value
        console.log(text)
    }

    return (
        <div className={styleClasses.CreatePost}>
            <textarea
                placeholder="Write your message here"
                ref={el}
            />
            
            <div>
                <button
                    className={styleClasses.btn}
                    onClick={addPost}
                >
                    ADD
                </button>

                <button
                    className={styleClasses.btn}
                    onClick={() => {}}
                >
                    CLEAR
                </button>
            </div>
        </div>
    )
}

export default CreatePost
