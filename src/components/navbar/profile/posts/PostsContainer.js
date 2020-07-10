import { updateLikes, setPosts, setLoad } from '../../../../redux/Creators'
import { connect } from 'react-redux'
import Posts from './Posts'

const mapStateToProps = state => ({
    posts: state.profile.posts,
    isLoad: state.profile.isLoad
})

const mapDispatchToProps = dispatch => (
    {
        updateLike: id => dispatch(updateLikes(id, '+')),
        updateDislike: id => dispatch(updateLikes(id, '-')),
        setPosts: posts => dispatch(setPosts(posts)),
        setLoad: load => dispatch(setLoad(load))
    }
)

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer
