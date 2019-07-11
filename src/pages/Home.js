import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Home.css'
import confLogo from '../images/platziconf-logo.svg'
import astronauts from '../images/astronauts.svg'

const Home = () => {
  return (
    <div className="Home__hero">
      <div className="Home__container">
        <div className="Home__logo">
          <img src={confLogo} alt="Platzi Conf Logo"/>
        </div>
        <div>
          <div className="Home__title">
            PRINT YOUR BADGES
          </div>
          <div className="Home__content">
            The easiest way to manage your conference
          </div>
        </div>
        <div >
          <Link to="/badges" className="btn btn-primary">Start</Link>
        </div>
      </div>
      <div className="Home__container">
        <img className="Home__image" src={astronauts} alt="Astronauts"/>
      </div>
    </div>
  )
}

export default Home