import React from 'react'
import PropTypes from 'prop-types'

import './Responsibilities.css'

const Responsibilities = ({ responsibilities }) => {
  return (
    <div className="responsibilities">
      <label className="responsibilities__title">Responsibilities</label>
      <div className="responsibilities__item">
        <ul>
          {responsibilities &&
            responsibilities.map((responsibility) => {
              return <li key={responsibility}>{responsibility}.</li>
            })}
        </ul>
      </div>
    </div>
  )
}

Responsibilities.propTypes = {
  responsibilities: PropTypes.arrayOf(PropTypes.object),
}

export default Responsibilities
