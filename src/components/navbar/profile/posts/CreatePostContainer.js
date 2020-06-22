import CreateMessage from '../../../../ui/CreateMessage'
import { connect } from 'react-redux'
import { addPostActionCreator, updateTextActionCreator } from '../../../../redux/Creators'

const mapStateToProps = state => ({text: state.profile.profileText})

const mapDispatchToProps = dispatch => (
    {
        update: text => dispatch(updateTextActionCreator(text)),
        add: () => dispatch(addPostActionCreator()),
        clear: () => dispatch(updateTextActionCreator(''))
    }
)

const CreatePostContainer = connect(mapStateToProps, mapDispatchToProps)(CreateMessage)

export default CreatePostContainer