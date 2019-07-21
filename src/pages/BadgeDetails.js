import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import DeleteBadgeModal from '../components/DeleteBadgeModal'
import Badge from '../components/Badge'
import './styles/BadgeDetails.css'

const useIncreaseCount = max => {
  const [count, setCount] = useState(0)
  if(count > max) {
    setCount(0)
  }
  return [count, setCount]
}

const BadgeDetails = props => {
  const [count, setCount] = useIncreaseCount(4)
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
              <button onClick={() => {setCount(count+1)}} className="btn btn-primary">
                Increase count {count}
              </button>
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