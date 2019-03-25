import React, { Component } from 'react';

export default class Register extends Component {
    render() {
        return (
            <div className="form">
                <h1>Register</h1>
                <form>
                    <p>
                        <input placeholder="Create Username" />
                    </p>
                    <p>
                        <input placeholder="Create Password" />
                    </p>
                    <p>
                        <button type="submit">Submit</button>
                    </p>
                </form>
            </div>
        )
    }
}