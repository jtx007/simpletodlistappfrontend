import React, { Component } from 'react';
import Navbar from './components/navbar'
import List from './components/list'
import Form from './components/form'
import './App.css';

class App extends Component {

  state = {
    showForm: false
  }

  showForm = () => {
    this.setState((prevState) => ({
      showForm: !prevState.showForm 
    }))
  }


  render() {
    console.log(this.state)
    return (
      <div>
        <Navbar formStatus={this.state.showForm} showForm={this.showForm} />
        
        {this.state.showForm ? <Form /> : <List />}
      </div>
    );
  }
}

export default App;
