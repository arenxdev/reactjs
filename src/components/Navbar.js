import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.svg'

import './styles/Navbar.css'

export default class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <Link className="Navbar__brand" to="/">
            <img className="Navbar__brand-logo" src={logo} alt="Platzi"/>
            <span className="font-weight-light">Platzi</span>
            <span className="font-weight-bold">Conf</span>
          </Link>
        </div>
      </div>
    )
  }
}
