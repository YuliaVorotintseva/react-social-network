import { connect } from "react-redux"
import Items from "./Items"
import { setItems, setItemsLoad } from '../../../../redux/Creators'

const mapStateToProps = state => ({
    items: state.dialogs.items,
    isLoad: state.dialogs.isItemsLoad
})

const CreateItemsContainer = connect(mapStateToProps, {setItems, setItemsLoad})(Items)

export default CreateItemsContainer
