import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './Components/list'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <List />
        </header>
      </div>
    );
  }
}

export default App;
