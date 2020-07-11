import { connect } from "react-redux"
import CreateMessage from '../../../../ui/message/CreateMessage'
import { updateMessage, sendMessage } from "../../../../../redux/Creators"

const mapStateToProps = state => ({text: state.dialogs.messageText})

const mapDispatchToProps = dispatch => (
    {
        update: text => dispatch(updateMessage(text)),
        add: () => dispatch(sendMessage()),
        clear: () => dispatch(updateMessage(''))
    }
)

const CreateMessageContainer = connect(mapStateToProps, mapDispatchToProps)(CreateMessage)

export default CreateMessageContainer
