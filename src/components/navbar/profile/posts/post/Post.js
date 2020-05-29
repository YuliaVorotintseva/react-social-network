import React from 'react'
import styleClasses from './Post.module.css'

const Post = ({post, updateLike, updateDislike}) => (
    <div className={styleClasses.Item}>
        <hr />
        <img
            src={post.avatar}
            alt='avatar'
        />
        {post.message}

        <div className={styleClasses.UpdateLikes}>
            <button onClick={updateLike}>
                Like
            </button>

            {post.likes} &#11014;
            &#11015; {post.dislikes}

            <button onClick={updateDislike}>
                Dislike
            </button>
        </div>
        <hr />
    </div>
)

export default Post
