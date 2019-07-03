import React, { Component } from 'react'

class BadgeForm extends Component {

  handleChange = ({ target: { name, value} }) => {
    console.log(value)
    console.log(name)
  }

  handleClick = event => {
    event.preventDefault()
    console.log('Button was click')
  }

  render() {
    return (
      <div>
        <h1>New Attendant</h1>
        <form id="formbadge" className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input onChange={this.handleChange} className="form-control" type="text" name="firstName" />
        </form>
        <button form="formbadge" onClick={this.handleClick} className="btn btn-primary">Save</button>
      </div>
    )
  }
}

export default BadgeForm