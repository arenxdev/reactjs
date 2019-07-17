import React from 'react'
import './styles/PageError.css'

const PageError = props => {
  return (
    <div className="PageError">
      <span></span>❌{props.error.message}😱
    </div>
  )
}

export default PageError