import React, { Component } from 'react'
import header from '../images/platziconf-logo.svg'
import './styles/Header.css'

class Header extends Component {
  render() {
    return (
      <div className="Header__hero">
        <div className="Header__divimg">
          <img className="img-fluid Header__img" src={header} alt="Logo" />
        </div>
        {this.props.name &&
          <div className="Header__title">
            <h1>{this.props.name}</h1>
          </div>
        }
      </div>
    )
  }
}
export default Header
