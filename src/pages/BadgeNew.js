import React, { Component, Fragment } from 'react'
import Header from '../components/Header'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'

class BadgeNews extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName="Aaron"
                lastName="Isaacs"
                jobTitle="Full Stack Developer"
                twitter="ing_isaacs"
                avatarUrl="https://es.gravatar.com/userimage/159727741/b202ede4610fa5c402ee58da070422e8.png?size=200"
              />
            </div>
            <div className="col">
              <BadgeForm />
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default BadgeNews
