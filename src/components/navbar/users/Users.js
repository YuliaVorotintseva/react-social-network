import React from 'react'
import * as axios from 'axios'
import styleClasses from './Users.module.css'
import User from './user/User'
import Loader from '../../ui/loader/Loader'

class Users extends React.Component {
    async componentDidMount() {
        let users = []
        const response = await axios
            .get('https://react-social-network-cb9d8.firebaseio.com/users.json')
        Object.values(response.data).forEach(
            usersArr => usersArr.map(user => users.push(user))
        )
        this.props.setUsers(users)
        this.props.setLoad(false)
    }

    render() {
        return (
            <div className={styleClasses.Users}>
                {
                    this.props.isLoad
                    ? <Loader />
                    : this.props.users.map(user => (
                        <User
                            key={user.id}
                            id={user.id}
                            avatar={user.avatar}
                            name={user.name}
                            followed={user.followed}
                            status={user.status}
                            location={user.location}
                            follow={() => this.props.follow(user.id)}
                        />)
                    )
                }
            </div>
        )
    }
}

export default Users
