import React from 'react'
import styleClasses from './Posts.module.css'
import Post from './post/Post'

const Posts = ({posts, updateLike, updateDislike}) => (
    <div className={styleClasses.Posts}>
        {
            posts.map(post => {
                let id = post.id
                return <Post
                    key={id}
                    post={post}
                    updateLike={() => updateLike(id)}
                    updateDislike={() => updateDislike(id)}
                />
            }
            )
        }
    </div>
)

export default Posts
