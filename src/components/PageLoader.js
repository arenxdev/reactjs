import React from 'react'
import Lds from './Lds'
import './styles/PageLoader.css'

const PageLoader = () => {
  return (
    <div className="PageLoading">
      <Lds />
    </div>
  )
}

export default PageLoader