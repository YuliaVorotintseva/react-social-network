import React from 'react'
import styleClasses from './Post.module.css'

const Post = ({message, avatar, likes = 0}) => (
    <div className={styleClasses.Item}>
        <hr />
        <img
            src={avatar}
            alt='avatar'
        />
        {message}
        <p>Likes: {likes}</p>
        <hr />
    </div>
)

export default Post
