import React, { Component, Fragment } from 'react'
import Gravatar from './Gravatar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import './styles/BadgesList.css'

library.add(fab)

class BadgesList extends Component {
  render() {
    if (!this.props.badges) {
      return <div></div>
    }
    if (this.props.badges && this.props.badges.length === 0) {
      return (
        <div>
          <h3>No badges were found</h3>
        </div>
      )
    }
    return (
      <Fragment>
        <ul className="list-unstyled">
          {this.props.badges.map(badge => {
            return (
              <li key={badge.id}>
                <div className="Badge__min">
                  <div className="Badge__min-img">
                    <Gravatar email={badge.email} />
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
      </Fragment>
    )
  }
}

export default BadgesList