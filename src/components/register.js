import React, { Component } from 'react';
import adapters from '..//adapters'

export default class Register extends Component {

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

        adapters.createUser(this.state.username, this.state.password)

    }


    render() {
        return (
            <div className="form">
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
                    <p>
                        Create Username: <input onChange={this.usernameChange} value={this.state.username} />
                    </p>
                    <p>
                        Create Password: <input onChange={this.passwordChange} value={this.state.password}  />
                    </p>
                    <p>
                        <button type="submit">Submit</button>
                    </p>
                </form>
            </div>
        )
    }
}