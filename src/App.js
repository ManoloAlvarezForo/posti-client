
import React from "react";
import './App.css';
import './App.scss';
import { hot } from "react-hot-loader";
import Routes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
      <Router>
        <Routes />
      </Router>
  )
}

export default hot(module)(App);