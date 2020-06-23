import {connect} from 'react-redux'
import {followAC, setUsersAC} from '../../../redux/Creators'
import Users from './Users'

const mapStateToProps = state => ({
    users: state.users.users
})

const mapDispatchToProps = dispatch => ({
    follow: id => dispatch(followAC(id)),
    set: users => dispatch(setUsersAC(users))
})

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer
