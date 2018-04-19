import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import store from './store'
import HomePage from './components/pages/HomePage'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Robo Test</h1>
          </header>
            <HomePage/>
        </div>
      </Provider>
    );
  }
}

export default App;
