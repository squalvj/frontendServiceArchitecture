import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import {
  getTheUser,
  getTheUserById,
  createUser,
  testCustomErrorHandling
} from './module/User'


export default class App extends Component {
  async componentDidMount() {
    getTheUser().then(e => console.log({wow: e}))
    getTheUserById(12).then(e => console.log({user: e}))
    testCustomErrorHandling({
      name: 'tampan',
      job: 'driver'
    }).then(e => {
      console.log({e})
    })
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
