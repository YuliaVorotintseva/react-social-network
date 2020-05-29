import React from 'react'
import styleClasses from './Posts.module.css'
import PostContainer from './post/PostContainer'
import StoreContext from '../../../../StoreContext'

const Posts = ({updateLikes}) => (
    <StoreContext.Consumer>
        {
            value => (
                <div className={styleClasses.Posts}>
                    {value.state.profile.posts.map(post => <PostContainer
                            key={post.id}
                            post={post}
                            dispatch={value.dispatch}
                            updateLikes={updateLikes}
                        />
                    )}
                </div>
            )
        }
    </StoreContext.Consumer>
)

export default Posts
