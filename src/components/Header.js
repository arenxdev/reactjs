import React, { memo } from 'react'
import header from '../images/badge-header.svg'
import './styles/Header.css'

export default memo(function Header() {
  return (
    <div className="Header__hero">
      <img className="img-fluid" src={header} alt="Logo" />
    </div>
  )
})
