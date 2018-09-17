
import React, { Component } from "react";
import './App.css';
import { hot } from "react-hot-loader";
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    );
  }
}

export default hot(module)(App);