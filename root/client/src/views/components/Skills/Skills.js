import React from 'react'
import PropTypes from 'prop-types'

import Skillbar from '../Skillbar/Skillbar'
import './Skills.css'

const Skills = ({ skills }) => {
  return (
    <div className="skills">
      <label className="personal-info__title">Skills</label>
      <div className="skills__container">
        <Skillbar skills={skills} />
      </div>
    </div>
  )
}

Skills.propTypes = {
  skills: PropTypes.object,
}

export default Skills
