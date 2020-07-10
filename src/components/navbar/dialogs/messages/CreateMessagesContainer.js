import { connect } from "react-redux"
import Messages from "./Messages"
import { setMessages, setMessagesLoad } from "../../../../redux/Creators"

const mapStateToProps = state => ({
    messages: state.dialogs.messages,
    isLoad: state.dialogs.isMessagesLoad
})

const CreateMessagesContainer = connect(mapStateToProps, {setMessages, setMessagesLoad})(Messages)

export default CreateMessagesContainer
