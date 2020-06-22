import { connect } from "react-redux"
import Messages from "./Messages"

const mapStateToProps = state => ({messages: state.dialogs.messages})

const CreateMessagesContainer = connect(mapStateToProps)(Messages)

export default CreateMessagesContainer
