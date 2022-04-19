import React from 'react';
import { app, header, link, logo } from './App.module.scss';
import reactLogo from './logo.svg';

const App: () => JSX.Element = () => (
  <div className={app}>
    <header className={header}>
      <img src={reactLogo} className={logo} alt="logo" />
      <p>
          Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className={link}
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
          Learn React
      </a>
    </header>
  </div>
);

export default App;
