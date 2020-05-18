import React from 'react'
import styleClasses from './Post.module.css'

const Post = ({message, avatar, likes = 0}) => (
    <div className={styleClasses.Item}>
        <img src={avatar} />
        {message}
        <p>Likes: {likes}</p>
    </div>
)

export default Post
