import { updateLikes } from '../../../../redux/Creators'
import { connect } from 'react-redux'
import Posts from './Posts'

const mapStateToProps = state => ({posts: state.profile.posts})

const mapDispatchToProps = dispatch => (
    {
        updateLike: id => dispatch(updateLikes(id, '+')),
        updateDislike: id => dispatch(updateLikes(id, '-'))
    }
)

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer
