import React from 'react'
import Post from './Post'

const PostContainer = ({post, dispatch, updateLikes}) => (
    <Post
        post={post}
        updateLike={() => dispatch(updateLikes(post.id, '+'))}
        updateDislike={() => dispatch(updateLikes(post.id, '-'))}
    />
)

export default PostContainer
