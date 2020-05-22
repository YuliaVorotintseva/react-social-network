import React from 'react'
import Post from './post/Post'
import styleClasses from './Posts.module.css'

const Posts = ({posts, updateLikes}) => (
    <div className={styleClasses.Posts}>
        {posts.map(post => <Post
                key={post.id}
                post={post}
                updateLikes={updateLikes}
            />
        )}
    </div>
)

export default Posts
