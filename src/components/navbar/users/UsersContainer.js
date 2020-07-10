import {connect} from 'react-redux'
import {follow, setUsers, setLoad} from '../../../redux/Creators'
import Users from './Users'

const mapStateToProps = state => ({
    users: state.users.users,
    isLoad: state.users.isLoad
})

const UsersContainer = connect(mapStateToProps, {follow, setUsers, setLoad})(Users)
export default UsersContainer
