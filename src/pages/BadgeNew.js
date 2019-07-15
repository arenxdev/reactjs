import React, { Component, Fragment } from 'react'
import Header from '../components/Header'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'

class BadgeNews extends Component {
  state = {form : {firstName: '', lastName: '', email: '', jobTitle: '', twitter: ''}}

  handleChange = ({ target: { name, value } }) => {
    this.setState({ 
      form: {
        ...this.state.form, 
        [name]: value
      }
    })
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                jobTitle={this.state.form.jobTitle}
                twitter={this.state.form.twitter}
                email={this.state.form.email}
                avatarUrl="https://es.gravatar.com/userimage/159727741/b202ede4610fa5c402ee58da070422e8.png?size=200"
              />
            </div>
            <div className="col">
              <BadgeForm 
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default BadgeNews
