import React from 'react'
import styleClasses from './Post.module.css'

const Post = ({message, avatar}) => (
    <div className={styleClasses.Item}>
        <img src={avatar} />
        {message}
    </div>
)

export default Post
