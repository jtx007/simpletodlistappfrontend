import React, { Component } from 'react'

class Navbar extends Component {

    render() {
        return (
            <div>
                <nav className="navbar">
                    <button onClick={() => this.props.loginForm()} className="button">Login</button>  
                    <button onClick={() => this.props.registerForm()} className="button">Register</button>  
                    <button onClick={() => this.props.listForm()} className="button">Create List</button>
                    <button onClick={() => this.props.todoForm()} className="button">Add todo</button>
                </nav>
            </div>
        )
    }
}

export default Navbar;