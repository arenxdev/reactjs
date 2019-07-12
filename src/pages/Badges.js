import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import BadgesList from '../components/BadgesList'
import confLogo from '../images/badge-header.svg'
import './styles/Badges.css'

const API = 'https://us-central1-api-cv-3b8cb.cloudfunctions.net/react'
class Badges extends Component {
  constructor(props) {
    super(props)
    console.log('1ro. Constructor')
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.controller = new AbortController()
    this.mounted = true
    fetch(API).then(response => response.json())
    .then(data => {
      if(this.mounted) {
        this.setState(data)
      }
    })
    console.log('3ro. Component Did Mount')
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('5to. Component Did Update')
    console.log({ prevProps, prevState })
    console.log({ props: this.props, state: this.state })
  }

  componentWillUnmount() {
    console.log('6to. Component Will Unmount')
    this.mounted = false
  }

  render() {
    console.log('2do. y 4to. Render')
    return (
      <Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img src={confLogo} alt="" className="Badges_conf-logo" />
            </div>
          </div>
        </div>
        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">New Badge</Link>
          </div>
          <div className="Badges__list">
            <BadgesList badges={this.state.data} />
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Badges