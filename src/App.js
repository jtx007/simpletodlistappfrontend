import React, { Component } from 'react';
import Navbar from './components/navbar'
import List from './components/list'
import Form from './components/form'
import Register from './components/register'
import Login from './components/login'
import './App.css';

class App extends Component {

  state = {
    todoForm: false,
    registerForm: false,
    loginForm: false,
  }

  todoForm = () => {
    this.setState((prevState) => ({
      todoForm: !prevState.todoForm,
      registerForm: false,
      loginForm: false
    }))
  }

  registerForm = () => {
    this.setState((prevState) => ({
      registerForm: !prevState.registerForm,
      loginForm: false,
      todoForm: false
    }))
  }

  loginForm = () => {
    this.setState((prevState) => ({
      loginForm: !prevState.loginForm,
      registerForm: false,
      todoForm: false

    }))
  }

  formRender = () => {
    if (this.state.todoForm) {
      return <Form />
    } else if (this.state.registerForm) {
      return <Register />
    } else if (this.state.loginForm) {
      return <Login />
    } else {
      return <List />
    }
  }



  render() {
    return (
      <div>
        <Navbar todoForm={this.todoForm} registerForm={this.registerForm} loginForm={this.loginForm} />
        {this.formRender()}
        
        
      </div>
    )
  }
}

export default App;
