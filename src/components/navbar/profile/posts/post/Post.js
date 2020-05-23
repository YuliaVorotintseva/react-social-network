import React from 'react'
import styleClasses from './Post.module.css'
import { updateLikes } from '../../../../../redux/Creators'

const Post = ({post, dispatch}) => (
    <div className={styleClasses.Item}>
        <hr />
        <img
            src={post.avatar}
            alt='avatar'
        />
        {post.message}

        <div className={styleClasses.UpdateLikes}>
            <button onClick={() => dispatch(updateLikes(post.id, '+'))}>
                Like
            </button>

            {post.likes} &#11014;
            &#11015; {post.dislikes}

            <button onClick={() => dispatch(updateLikes(post.id, '-'))}>
                Dislike
            </button>
        </div>
        <hr />
    </div>
)

export default Post
