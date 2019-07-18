import React from 'react'
import Gravatar from './Gravatar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import './styles/BadgeListItem.css'

library.add(fab)

const BadgeListItem = props => {
  return (
    <div className="Badge__min">
      <div className="Badge__min-img">
        {props.email && <Gravatar email={props.email} />}
        {!props.email && <img src={props.avatarUrl} alt="Avatar"/>}
      </div>
      <div className="Badge__min-content">
        <div className="Badge__min-name">{props.firstName} {props.lastName}</div>
        <div className="Badge__min-twitter">
          <span className="Badge__min-icon">
            <FontAwesomeIcon icon={['fab', 'twitter']} />
          </span>
          @{props.twitter}
        </div>
        <div className="Badge__min-jobtitle">{props.jobTitle}</div>
      </div>
    </div>
  )
}

export default BadgeListItem
