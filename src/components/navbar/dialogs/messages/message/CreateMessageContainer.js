import { connect } from "react-redux"
import CreateMessage from '../../../../../ui/CreateMessage'
import { updateMessageActionCreator, sendMessageActionCreator } from "../../../../../redux/Creators"

const mapStateToProps = state => ({text: state.dialogs.messageText})

const mapDispatchToProps = dispatch => (
    {
        update: text => dispatch(updateMessageActionCreator(text)),
        add: () => dispatch(sendMessageActionCreator()),
        clear: () => dispatch(updateMessageActionCreator(''))
    }
)

const CreateMessageContainer = connect(mapStateToProps, mapDispatchToProps)(CreateMessage)

export default CreateMessageContainer
