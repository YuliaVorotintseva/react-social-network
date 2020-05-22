import React from 'react'
import styleClasses from './Post.module.css'

const Post = ({post, updateLikes}) => (
    <div className={styleClasses.Item}>
        <hr />
        <img
            src={post.avatar}
            alt='avatar'
        />
        {post.message}

        <div className={styleClasses.UpdateLikes}>
            <button onClick={() => updateLikes(post.id, '+')}>
                Like
            </button>

            {post.likes} &#11014;
            &#11015; {post.dislikes}

            <button onClick={() => updateLikes(post.id, '-')}>
                Dislike
            </button>
        </div>
        <hr />
    </div>
)

export default Post
