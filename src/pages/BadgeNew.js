import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Badge from '../components/Badge'
import header from '../images/badge-header.svg'
import './styles/BadgeNew.css'

class BadgeNews extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>
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
          </div>
        </div>
      </div>
    )
  }
}

export default BadgeNews