import React, { Component } from 'react'

class Form extends Component {
    render() {
        return (
            <div className="form">
                <h1>Add Todo</h1>
                <form>
                    <input placeholder="Add todo here"/>
                    <p className="submit-button">
                        <button type="submit">Submit</button>
                    </p>
                </form>
            </div>
        )
    }
}

export default Form;