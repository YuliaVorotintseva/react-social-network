import React from 'react'
import styleClasses from './Auth.module.css'
import Button from '../../ui/button/Button'
import Input from '../../ui/input/Input'

export default class Auth extends React.Component {
    loginHandler = () => {}
    authHandler = () => {}
    render() {
        return (
            <div className={styleClasses.Auth}>
                <div>
                    <h1>Auth</h1>
                    <form
                        onSubmit={e => e.preventDefault()}
                        className={styleClasses.Form}
                    >
                        <Input label='Email'/>
                        <Input label='Password'/>
                        <Button onClick={this.loginHandler}>Login</Button>
                        <Button onClick={this.authHandler}>Auth</Button>
                    </form>
                </div>
            </div>
        )
    }
}
