import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import DeleteBadgeModal from '../components/DeleteBadgeModal'
import Badge from '../components/Badge'
import './styles/BadgeDetails.css'

const BadgeDetails = props => {
  return (
    <Fragment>
      <Header name={`${props.badge.firstName} ${props.badge.lastName}`} />
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <Badge
              firstName={props.badge.firstName}
              lastName={props.badge.lastName}
              jobTitle={props.badge.jobTitle}
              twitter={props.badge.twitter}
              email={props.badge.email}
              avatarUrl={props.badge.avatarUrl}
            />
          </div>
          <div className="col Badgedetail__space">
            <div className="Badgedetail__actions">
              <h2>Actions:</h2>
              <Link to={`/badges/${props.badge.id}/edit`} className="btn btn-primary">Edit</Link>
              <button onClick={props.onOpenModal} className="btn btn-danger">Delete</button>
              <DeleteBadgeModal
                isOpen={props.modalIsOpen}
                onClose={props.onCloseModal}
                onDeleteBadge={props.onDeleteBadge}
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default BadgeDetails