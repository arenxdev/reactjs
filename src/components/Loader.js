import React, { Component } from 'react'
import gifLoader from '../images/loader.gif'
import './styles/Loader.css'

const containerStyle = {
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  backgroundColor: 'rgba(0, 0, 0, .1)',
  margin: '5px 0'
}

class Loader extends Component {
  render() {
    return (
      <div style={containerStyle}>
        <div className="Loader__div">
          <img className="Loader__img" src={gifLoader} alt="Loading ..."/>
        </div>
      </div>
    )
  }
}

export default Loader