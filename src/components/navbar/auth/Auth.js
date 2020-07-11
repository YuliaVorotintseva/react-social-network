import React from 'react'
import styleClasses from './Auth.module.css'
import Button from '../../ui/button/Button'
import Input from '../../ui/input/Input'
import is from 'is_js'

export default class Auth extends React.Component {
    state = {
        isFormValid: false,
        formControls: {
            email: {
                value: '',
                type: 'email',
                label: 'Email',
                errorMessage: 'Enter correct email',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true
                }
            },
            password: {
                value: '',
                type: 'password',
                label: 'Password',
                errorMessage: 'Enter correct password',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6
                }
            }
        }
    }

    loginHandler = () => {}
    authHandler = () => {}

    onChangeHandler = (event, controlName) => {
        const formControls = {...this.state.formControls}
        const control = {...formControls[controlName]}

        control.value = event.target.value
        control.touched = true
        control.valid = this.validateControl(control.value, control.validation)

        let isFormValid = true
        Object.keys(formControls).forEach(name => isFormValid = formControls[name].valid && isFormValid)

        formControls[controlName] = control
        this.setState({
            isFormValid,
            formControls
        })
    }

    validateControl = (value, validation) => {
        if(!validation) {
            return true
        }

        let isValid = true
        if(validation.required) isValid = value.trim() !== '' && isValid
        if(validation.email) isValid = is.email(value) && isValid
        if(validation.minLength) isValid = value.length >= validation.minLength && isValid
        return isValid
    }

    render() {
        const inputs = Object.keys(this.state.formControls)
            .map((controlName, index) => {
                const control = this.state.formControls[controlName]
                return (
                    <Input
                        key={controlName + index}
                        type={control.type}
                        value={control.value}
                        valid={control.valid}
                        touched={control.touched}
                        label={control.label}
                        shouldValidate={!!control.validation}
                        errorMessage={control.errorMessage}
                        onChange={e => this.onChangeHandler(e, controlName)}
                    />
                )
            })
        
        return (
            <div className={styleClasses.Auth}>
                <div>
                    <h1>Auth</h1>
                    <form
                        onSubmit={e => e.preventDefault()}
                        className={styleClasses.Form}
                    >
                        {inputs}
                        
                        <Button
                            onClick={this.loginHandler}
                            disabled={!this.state.isFormValid}
                        >
                            Login
                        </Button>

                        <Button
                            onClick={this.authHandler}
                            disabled={!this.state.isFormValid}
                        >
                            Auth
                        </Button>
                    </form>
                </div>
            </div>
        )
    }
}
