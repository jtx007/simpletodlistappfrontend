import React, { Component } from 'react';

export default class List extends Component {

    state = {
        name: '',
        duedate: ''
    }

    handleNameChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleDateChange = (e) => {
        this.setState({
            duedate: e.target.value
        })
    }


    render() {
        return (
            <div className="form">
                <h1>Create a new list</h1>
                    <form>
                        <p>
                        Name of List:<input onChange={() => this.handleNameChange} value={this.state.name} />
                        </p>
                        <p>
                        Due Date:<input onChange={() => this.handleDateChange} value={this.state.duedate}/>
                        </p>
                        <p>
                            <button type="submit">Submit</button>
                        </p>

                    </form>
            </div>
        )
    }
}