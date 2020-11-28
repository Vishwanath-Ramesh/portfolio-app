import React from 'react'
import PropTypes from 'prop-types'

import './Extras.css'

const Extras = ({ extras }) => {
  return (
    <div className="extras">
      <label className="education__title">Extra-Curricular Activities</label>
      <ul className="extras__content">
        {extras &&
          extras.map((extra, index) => {
            return (
              <li key={index} className="extras__item">
                {extra}
              </li>
            )
          })}
      </ul>
    </div>
  )
}

Extras.propTypes = {
  extras: PropTypes.arrayOf(PropTypes.string),
}

export default Extras
