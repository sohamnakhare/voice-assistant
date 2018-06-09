import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import LandingPage from './Components/LandingPage.js';

class App extends Component {
  render() {
    return (
      <div style={{ height: '100vh', overflow: 'scroll', background: '#AFB42B' }}>
        <LandingPage />
      </div>
    );
  }
}

export default App;
