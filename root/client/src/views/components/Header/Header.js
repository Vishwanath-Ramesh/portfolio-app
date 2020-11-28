import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import 'moment-precise-range-plugin'

import './Header.css'

const Header = ({ data = {} }) => {
  const fromDate = moment({ year: 2017, month: 5 })
  const currentDate = moment()
  const experience = moment.preciseDiff(fromDate, currentDate, true)

  return (
    <div className="header">
      <span className="header__name">{data.name}</span>
      <span className="header__role">{data.role}</span>
      <span className="header__experience">
        <span className="header__experience_label">Experience: </span>
        <span className="header__experience_desc">{`${experience.years} years and ${experience.months} months`}</span>
      </span>
    </div>
  )
}

Header.propTypes = {
  data: PropTypes.object,
}

export default Header
