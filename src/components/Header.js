import React, { Component } from 'react'
import header from '../images/badge-header.svg'
import './styles/Header.css'

class Header extends Component {
  render() {
    return (
      <div className="Header__hero">
        <img className="img-fluid" src={header} alt="Logo" />
      </div>
    )
  }
}
export default Header
