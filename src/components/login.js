import React, { Component } from 'react';
import adapters from '../adapters'
export default class Login extends Component {

    state = {
        username: '',
        password: ''
    }

    usernameChange = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    passwordChange = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        adapters.loginUser(this.state.username, this.state.password)
        .then( r => r.json())
        .then(data => localStorage.setItem('token', data.token))
    }

    render () {
        console.log(adapters.loginUser)
        return (
            <div className="form">
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <p>
                    Enter Username: <input onChange={this.usernameChange} value={this.state.username} />
                    </p>
                    <p>
                    Enter Password: <input onChange={this.passwordChange} value={this.state.password} />
                    </p>
                    <p>
                        <button type="submit">Submit</button>
                    </p>
                </form>
            </div>
        )
    }
}