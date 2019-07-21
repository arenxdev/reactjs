import React, { Fragment, useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import BadgeListItem from './BadgeListItem'
import './styles/BadgesList.css'

const useSearchBadges = badges => {
  const [query, setQuery] = useState('')
  const [filteredBadges, setFilteredBadges] = useState(badges)
  useMemo(() => {
      const result = badges.filter(({ firstName, lastName }) => {
        return `${firstName} ${lastName}`.toLowerCase().includes(query.toLowerCase())
      })
      setFilteredBadges(result)
    }, [badges, query]
  )
  return {query, filteredBadges, setQuery}
}
const BadgesList = props => {
  const badges = props.badges
  const { query, filteredBadges, setQuery } = useSearchBadges(badges)
  if (!badges) {
    return <div></div>
  }
  if (filteredBadges && filteredBadges.length === 0) {
    return (
      <Fragment>
        <div className="form-group">
          <label >Filter Badges</label>
          <input type="text" className="form-control" value={query} onChange={event => setQuery(event.target.value)} />
        </div>
        <h3>No badges were found</h3>
      </Fragment>
    )
  }
  return (
    <Fragment>
      <div className="form-group">
        <label >Filter Badges</label>
        <input type="text" className="form-control" value={query} onChange={event => setQuery(event.target.value)} />
      </div>
      <ul className="list-unstyled">
        {filteredBadges.map(badge => {
          return (
            <li key={badge.id}>
              <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}/details`}>
                <BadgeListItem
                  email={badge.email}
                  firstName={badge.firstName}
                  lastName={badge.lastName}
                  twitter={badge.twitter}
                  jobTitle={badge.jobTitle}
                  avatarUrl={badge.avatarUrl}
                />
              </Link>
            </li>
          )
        })}
      </ul>
    </Fragment>
  )
}

export default BadgesList