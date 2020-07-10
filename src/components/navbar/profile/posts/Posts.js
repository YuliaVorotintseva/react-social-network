import React from 'react'
import styleClasses from './Posts.module.css'
import Post from './post/Post'
import axios from 'axios'
import Loader from '../../../ui/loader/Loader'

class Posts extends React.Component {
    async componentDidMount() {
        let posts = []
        const response = await axios
            .get('https://react-social-network-cb9d8.firebaseio.com/posts.json')
        Object.values(response.data).forEach(
            postsArr => postsArr.map(post => posts.push(post))
        )
        this.props.setPosts(posts)
        this.props.setLoad(false)
    }
    render() {
        return (
            <div className={styleClasses.Posts}>
                {
                    this.props.isLoad
                    ? <Loader />
                    : this.props.posts.map(post => {
                        let id = post.id
                        return <Post
                            key={id}
                            post={post}
                            updateLike={() => this.props.updateLike(id)}
                            updateDislike={() => this.props.updateDislike(id)}
                        />
                    })
                }
            </div>
        )
    }
}

export default Posts
