import React from 'react'
import styleClasses from './CreatePost.module.css'

const CreatePost = () => (
    <div className={styleClasses.CreatePost}>
        <textarea placeholder="Write your message here"></textarea>
        <div>
            <button className={styleClasses.btn}>ADD</button>
            <button className={styleClasses.btn}>CLEAR</button>
        </div>
    </div>
)

export default CreatePost
