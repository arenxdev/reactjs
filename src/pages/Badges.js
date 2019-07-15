import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import BadgesList from '../components/BadgesList'
import Loader from '../components/Loader'
import confLogo from '../images/badge-header.svg'
import './styles/Badges.css'

const API = 'https://us-central1-api-cv-3b8cb.cloudfunctions.net/react'
const API_RICK = 'https://rickandmortyapi.com/api/character/'
class Badges extends Component {
  constructor(props) {
    super(props)
    console.log('1ro. Constructor')
    this.state = {
      loading: true,
      error: null,
      nextPage: 1,
      data: []
    }
  }

  fetchReactApi = async (rick) => {
    this.setState({loading:true, error: null})
    const rest = rick?API_RICK:API
    try {
      const res = await fetch(`${rest}?page=${this.state.nextPage}`)
      let data = await res.json()
      if(this.mounted) {
        if(rick) {
          const dataRick = data.results.map(result => {
            let nombres = result.name.split(' ')
            return (
            {
              id: result.id,
              avatarUrl: result.image,
              firstName: nombres[0], 
              lastName: nombres[1], 
              twitter: nombres[0],
              jobTitle: result.species
            })
          })
          data = {data: [].concat(this.state.data, dataRick)}
        }
        data = {...data, loading: false, nextPage: this.state.nextPage+1}
        this.setState(data)
      }
    } catch (error) {
      this.setState({loading: false, error})
    }
  }

  componentDidMount() {
    this.controller = new AbortController()
    this.mounted = true
    this.fetchReactApi(true)
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
            {this.state.error &&
                `Error: ${this.props.error.message}`
            }
            <BadgesList badges={this.state.data} />

            {this.state.loading &&
              <Loader />
            }

            {!this.state.loading &&
              <div className="Badge__more">
                <button onClick={() => this.fetchReactApi(true)} className="btn btn-primary">Load more</button>
              </div>
            }
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Badges