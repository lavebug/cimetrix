import React from 'react';
import logo from './Browserstack-logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <a href="https://www.browserstack.com" target="_blank"><img src={logo} className="App-logo" alt="logo" /></a>
        {/* <img src={logo} className="App-logo" alt="BrowserStack" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
