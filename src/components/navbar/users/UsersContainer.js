import {connect} from 'react-redux'
import {followAC, setUsersAC, setLoadAC} from '../../../redux/Creators'
import Users from './Users'

const mapStateToProps = state => ({
    users: state.users.users,
    pageSize: state.users.pageSize,
    totalUsersCount: state.users.totalUsersCount,
    currentPage: state.users.currentPage,
    isLoad: state.users.isLoad
})

const mapDispatchToProps = dispatch => ({
    follow: id => dispatch(followAC(id)),
    set: users => dispatch(setUsersAC(users)),
    setLoad: load => dispatch(setLoadAC(load))
})

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer
