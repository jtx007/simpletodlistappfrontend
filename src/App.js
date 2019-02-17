import React, { Component } from 'react';
import Navbar from './components/navbar'
import List from './components/list'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <List />
      </div>
    );
  }
}

export default App;
