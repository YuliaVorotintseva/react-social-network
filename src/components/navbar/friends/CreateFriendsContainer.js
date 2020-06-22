import { connect } from "react-redux"
import Friends from "./Friends"

const mapStateToProps = state => ({items: state.dialogs.items})

const CreateFriendsContainer = connect(mapStateToProps)(Friends)

export default CreateFriendsContainer
