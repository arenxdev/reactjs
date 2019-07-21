import React from "react"
import Modal from './Modal'

const DeleteBadgeModal = props => {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose} >
      <div className="DeleteBadgeModal">
        <h1>Are you sure?</h1>
        <p>You are about to delete this badge.</p>
        <button onClick={props.onDeleteBadge} className="btn btn-danger mr-4">Delete</button>
        <button onClick={props.onClose} className="btn btn-primary">Cancel</button>
      </div>
    </Modal>
  )
}

export default DeleteBadgeModal