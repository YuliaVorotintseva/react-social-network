import React from 'react'
import styleClasses from './Post.module.css'

const Post = ({post, dispatch}) => (
    <div className={styleClasses.Item}>
        <hr />
        <img
            src={post.avatar}
            alt='avatar'
        />
        {post.message}

        <div className={styleClasses.UpdateLikes}>
            <button onClick={() => dispatch({
                type: 'UPDATE_LIKES',
                id: post.id,
                case: '+'
            })}>
                Like
            </button>

            {post.likes} &#11014;
            &#11015; {post.dislikes}

            <button onClick={() => dispatch({
                type: 'UPDATE_LIKES',
                id: post.id,
                case: '-'
            })}>
                Dislike
            </button>
        </div>
        <hr />
    </div>
)

export default Post
