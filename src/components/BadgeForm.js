import React, { Component } from 'react'

class BadgeForm extends Component {

  handleChange = ({ target: { name, value} }) => {
    this.setState({[name]: value})
  }

  handleClick = event => {
    console.log('Button was clicked')
  }
  
  handleSubmit = event => {
    event.preventDefault()
    console.log('Form was submitted')
    console.log(this.state)
  }

  state = {firstName: '', lastName: '', email: '', jobTitle: '', twitter: ''}
  render() {
    return (
      <div>
        <h1>New Attendant</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input onChange={this.handleChange} className="form-control" type="text" name="firstName" value={this.state.firstName} />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input onChange={this.handleChange} className="form-control" type="text" name="lastName" value={this.state.lastName} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input onChange={this.handleChange} className="form-control" type="text" name="email" value={this.state.email} />
          </div>
          <div className="form-group">
            <label htmlFor="jobTitle">Job Title</label>
            <input onChange={this.handleChange} className="form-control" type="text" name="jobTitle" value={this.state.jobTitle} />
          </div>
          <div className="form-group">
            <label htmlFor="twitter">Twitter</label>
            <input onChange={this.handleChange} className="form-control" type="text" name="twitter" value={this.state.twitter} />
          </div>
          <button type="submit" onClick={this.handleClick} className="btn btn-primary">Save</button>
        </form>
      </div>
    )
  }
}

export default BadgeForm