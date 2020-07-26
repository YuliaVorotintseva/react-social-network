import {connect} from 'react-redux'
import axios from 'axios'
import {authSuccess, logout} from '../../../redux/Creators'
import Auth from './Auth'
//yulia.vorotintseva@gmail.com
function auth(email, password, isLogin) {
    return async dispatch => {
        const data = {
            email,
            password,
            returnSecureToken: true
        }

        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBHYZAZw3DSGO0PcMk9CZAgPeYEtdpdT3o'
        if(isLogin) url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBHYZAZw3DSGO0PcMk9CZAgPeYEtdpdT3o'
        const response = await axios.post(url, data)
        console.log(response)

        localStorage.setItem('token', response.data.idToken)
        localStorage.setItem('userId', response.data.localId)
        localStorage.setItem('expirationDate', new Date(new Date().getTime() + response.data.expiresIn*1000))

        dispatch(authSuccess(response.data.idToken))
        dispatch(autoLogout(response.data.expiresIn))
    }
}

const autoLogout = time => {
    localStorage.setItem('token')
    localStorage.setItem('userId')
    localStorage.setItem('expirationDate')
    return dispatch => setTimeout(() => dispatch(logout, time*1000))
}

const mapDispatchToProps = dispatch => ({
    auth: (email, password, isLogin) => dispatch(auth(email, password, isLogin))
})

const AuthContainer = connect(null, mapDispatchToProps)(Auth)
export default AuthContainer
