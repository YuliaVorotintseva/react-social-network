import { connect } from "react-redux"
import Items from "./Items"

const mapStateToProps = state => ({items: state.dialogs.items})

const CreateItemsContainer = connect(mapStateToProps)(Items)

export default CreateItemsContainer
