import React, { Component, Fragment } from 'react'
import Header from '../components/Header'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import PageLoader from '../components/PageLoader'
import md5 from 'md5'
import api from '../api'

class BadgeEdit extends Component {
  constructor(props) {
    super(props)
    this.state = {loading: false, error: null, form: {firstName: '', lastName: '', email: '', jobTitle: '', twitter: ''}}
  }

  componentDidMount() {
    this.fetchData()
  }

  handleChange = ({ target: { name, value } }) => {
    let obj = {form:{...this.state.form, [name]: value}}
    if(name === 'email') {
      obj = {form: {...obj.form, avatarUrl: `https://www.gravatar.com/avatar/${md5(value)}?d=identicon`}}
    }
    this.setState(obj)
  }

  fetchData = async () => {
    this.setState({loading: true, error: null })
    try {
      const data = await api.badges.read(this.props.match.params.badgeId)
      this.setState({loading: false, form: data})
    } catch (error) {
      this.setState({loading: false, error})
    }
  }
  
  handleSubmit = async event => {
    event.preventDefault()
    this.setState({loading: true, error: null})
    try {
      await api.badges.update(this.props.match.params.badgeId, this.state.form)
      this.setState({loading: false})
      this.props.history.push('/badges')
    } catch (error) {
      this.setState({loading: false, error: error})
    }
  }

  render() {
    if(this.state.loading) {
      return <PageLoader />
    }
    return (
      <Fragment>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName={this.state.form.firstName || 'FIRST_NAME'}
                lastName={this.state.form.lastName || 'LAST_NAME'}
                jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                twitter={this.state.form.twitter || 'twitter'}
                email={this.state.form.email || 'EMAIL'}
                avatarUrl="https://es.gravatar.com/userimage/159727741/b202ede4610fa5c402ee58da070422e8.png?size=200"
              />
            </div>
            <div className="col">
              <BadgeForm
                formtitle="Edit Attendant"
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default BadgeEdit
