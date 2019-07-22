import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import {
  getTheUser,
  getTheUserById,
  createUser
} from './module/User'


export default class App extends Component {
  async componentDidMount() {
    // getTheUser().then(e => console.log({wow: e}))
    getTheUserById(12).then(e => console.log({user: e}))
    const theId = await createUser({
      name: 'tampan',
      job: 'monyet'
    })
    console.log({theId})
    getTheUserById(1).then(c => console.log({wowww: c}))
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
