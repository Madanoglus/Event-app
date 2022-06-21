import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

class Hedaer extends Component {
  render() {
    return (
      <div className="main">
        <h1>
          <Link className="logo" to="/">
            EVENTAPP
          </Link>
        </h1>
        <ul className="main-list">
          <li>
            <Link className="Link" to="/Events">
              ETKİNLİKLER
            </Link>
          </li>

          <li>
            <Link className="Link" to="/">
              ANA SAYFA
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Hedaer
