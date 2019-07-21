import React, {Component} from 'react'
import BadgeDetails from './BadgeDetails'
import PageError from '../components/PageError'
import Lds from '../components/Lds'
import api from '../api'

class BadgeDetailsContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {loading: true, error: null, data: undefined, modalIsOpen: false}
    this.id = this.props.match.params.badgeId
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    this.setState({loading:true, error: null})
    try {
      const data = await api.badges.read(this.id)
      this.setState({loading: false, error: null, data})
    } catch (error) {
      this.setState({loading: false, error})
    }
  }

  handleDeleteBadge = async event => {
    event.preventDefault()
    this.setState({loading: true, error: null})
    try {
      await api.badges.remove(this.id)
      this.props.history.push('/badges')
    } catch (error) {
      this.setState({loading: false, error: true})
    }
  }

  handleOpenModal = () => {
    this.setState({modalIsOpen: true})
  }

  handleCloseModal = () => {
    this.setState({modalIsOpen: false})
  }

  render() {
    if (this.state.loading) {
      return <Lds />
    }
    if (this.state.error) {
      return <PageError />
    }
    return <BadgeDetails 
        badge={{...this.state.data, id:this.id}} 
        onDelete={this.handleDelete}
        onOpenModal={this.handleOpenModal}
        onCloseModal={this.handleCloseModal}
        modalIsOpen={this.state.modalIsOpen}
        onDeleteBadge={this.handleDeleteBadge}
      />
  }
}

export default BadgeDetailsContainer