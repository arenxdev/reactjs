import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import './styles/BadgesList.css'

library.add(fab)

class BadgesList extends Component {
  render() {
    return (
      <ul className="list-unstyled">
        {this.props.badges.map(badge => {
          console.log(badge)
          return (
            <li key={badge.id}>
              <div className="Badge__min">
                <div className="Badge__min-img">
                  <img src={badge.avatarUrl} alt="Avatar"/>
                </div>
                <div className="Badge__min-content">
                  <div className="Badge__min-name">{badge.firstName} {badge.lastName}</div>
                  <div className="Badge__min-twitter">
                    <span className="Badge__min-icon">
                      <FontAwesomeIcon icon={['fab', 'twitter']} />
                    </span>
                    @{badge.twitter}
                  </div>
                  <div className="Badge__min-jobtitle">{badge.jobTitle}</div>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default BadgesList