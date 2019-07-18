import React, { Component, Fragment } from 'react'
import BadgeListItem from './BadgeListItem'
import './styles/BadgesList.css'

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
                <BadgeListItem
                  email={badge.email}
                  firstName={badge.firstName}
                  lastName={badge.lastName}
                  twitter={badge.twitter}
                  jobTitle={badge.jobTitle}
                  avatarUrl={badge.avatarUrl}
                />
              </li>
            )
          })}
        </ul>
      </Fragment>
    )
  }
}

export default BadgesList