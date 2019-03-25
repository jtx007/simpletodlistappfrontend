import React, { Component } from 'react';

export default class Login extends Component {
    render () {
        return (
            <div className="form">
                <h1>Login</h1>
                <form>
                    <p>
                        <input placeholder="Enter username" />
                    </p>
                    <p>
                        <input placeholder="Enter password" />
                    </p>
                    <p>
                        <button type="submit">Submit</button>
                    </p>
                </form>
            </div>
        )
    }
}