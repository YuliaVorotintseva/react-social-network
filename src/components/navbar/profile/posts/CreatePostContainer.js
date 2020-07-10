import CreateMessage from '../../../../ui/CreateMessage'
import { connect } from 'react-redux'
import { addPost, updateText } from '../../../../redux/Creators'

const mapStateToProps = state => ({text: state.profile.profileText})

const mapDispatchToProps = dispatch => (
    {
        update: text => dispatch(updateText(text)),
        add: () => dispatch(addPost()),
        clear: () => dispatch(updateText('')),
    }
)

const CreatePostContainer = connect(mapStateToProps, mapDispatchToProps)(CreateMessage)

export default CreatePostContainer
