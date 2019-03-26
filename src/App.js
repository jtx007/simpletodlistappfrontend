import React, { Component } from 'react';
import Navbar from './components/navbar'
import List from './components/list'
import Form from './components/form'
import Register from './components/register'
import Login from './components/login'
import ListForm from './components/createListForm'
import './App.css';

class App extends Component {

  state = {
    todoForm: false,
    registerForm: false,
    loginForm: false,
    listForm: false
  }

  todoForm = () => {
    this.setState((prevState) => ({
      todoForm: !prevState.todoForm,
      registerForm: false,
      loginForm: false,
      listForm: false
    }))
  }

  registerForm = () => {
    this.setState((prevState) => ({
      registerForm: !prevState.registerForm,
      loginForm: false,
      todoForm: false,
      listForm: false
    }))
  }

  loginForm = () => {
    this.setState((prevState) => ({
      loginForm: !prevState.loginForm,
      registerForm: false,
      todoForm: false,
      listForm: false
    }))
  }

  listForm = () => {
    this.setState((prevState) => ({
      listForm: !prevState.listForm,
      registerForm: false,
      loginForm: false,
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
    } else if (this.state.listForm) {
      return <ListForm />
    } else {
      return <List />
    }
  }



  render() {
    return (
      <div>
        <Navbar listForm={this.listForm} todoForm={this.todoForm} registerForm={this.registerForm} loginForm={this.loginForm} />
        {this.formRender()}
        
        
      </div>
    )
  }
}

export default App;
