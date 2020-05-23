import React from 'react'
import Post from './post/Post'
import styleClasses from './Posts.module.css'

const Posts = ({posts, dispatch}) => (
    <div className={styleClasses.Posts}>
        {posts.map(post => <Post
                key={post.id}
                post={post}
                dispatch={dispatch}
            />
        )}
    </div>
)

export default Posts
