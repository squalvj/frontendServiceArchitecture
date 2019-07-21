import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import {
  getTheUser
} from './module/User'


export default class App extends Component {
  async componentDidMount() {
    const theUser = await getTheUser()
    console.log({theUser})
  }
  render() {
    return (
      <div className="App">
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
      </div>
    )
  }
}
