import React, { Component } from 'react'

class Navbar extends Component {

    render() {
        return (
            <div>
                <nav className="navbar">
                    <button className="button">Login</button>  <button  className="button">Register</button>  <button onClick={() => this.props.showForm()} className="button">Add todo</button>
                </nav>
            </div>
        )
    }
}

export default Navbar;