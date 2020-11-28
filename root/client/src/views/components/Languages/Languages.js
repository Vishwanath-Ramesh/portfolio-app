import React from 'react'
import PropTypes from 'prop-types'

import Skillbar from '../Skillbar/Skillbar'
import './Languages.css'

const Languages = ({ languages }) => {
  return (
    <div className="languages">
      <label className="languages__title">Languages</label>
      <div className="languages__content">
        <Skillbar skills={languages} />
      </div>
    </div>
  )
}

Languages.propTypes = {
  languages: PropTypes.object,
}

export default Languages
