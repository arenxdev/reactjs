import React, { Component } from 'react'
import './styles/Toogle.css'

class Toogle extends Component {
  render() {
    return(
      <div>
        {this.props.title &&
          <div className="Toogle__title">{this.props.title}</div>
        }
        <input onClick={this.props.onClick} id="check" className="Toogle__input" type="checkbox" name="check" />
        <label htmlFor="check" className="Toogle__label" data-on={this.props.dataon} data-off={this.props.dataoff} />
      </div>
    )
  }
}

export default Toogle