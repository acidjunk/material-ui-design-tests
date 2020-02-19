import React from 'react';
import logo from './logo.svg';
import JssProvider from "react-jss/lib/JssProvider";
import { createGenerateClassName } from "@material-ui/core/styles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import BaseTabs from "./BaseTabs";
import './App.css';

const muiBaseTheme = createMuiTheme();

const generateClassName = createGenerateClassName({
  dangerouslyUseGlobalCSS: true
});

function App() {
  return (
    <div className="App">
      <JssProvider generateClassName={generateClassName}>
          <MuiThemeProvider
              theme={createMuiTheme({
                  typography: {
                      useNextVariants: true
                  },
                  // overrides: BaseTabs.getTheme(muiBaseTheme)
              })}
          >

        <BaseTabs/>
              <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
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
                  </a>
              </header>
          </MuiThemeProvider>

      </JssProvider>
    </div>
  );
}

export default App;
