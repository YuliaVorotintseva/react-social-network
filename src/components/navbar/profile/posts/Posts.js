import React from 'react'
import Post from './post/Post'
import styleClasses from './Posts.module.css'

const Posts = ({posts}) => (
    <div className={styleClasses.Posts}>
        {posts.map(({id, message, avatar, likes}) => (
            <Post
                key={id}
                message={message}
                avatar={avatar}
                likes={likes}
            />
        ))}
    </div>
)

export default Posts
