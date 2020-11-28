import React from 'react'
import PropTypes from 'prop-types'

import './AdditionalSkills.css'

const AdditionalSkills = ({ additionalSkills }) => {
  return (
    <div className="additional-skills">
      <label className="additional-skills__title">Additional Skills</label>
      <div className="additional-skills__content">
        {additionalSkills &&
          additionalSkills.map((skill) => {
            return (
              <div key={skill.type} className="additional-skills__item">
                <label htmlFor="" className="additional-skills__header">
                  {skill.type}
                </label>
                <label htmlFor="" className="additional-skills__description">
                  {skill.description.join(', ')}
                </label>
              </div>
            )
          })}
      </div>
    </div>
  )
}

AdditionalSkills.propTypes = {
  additionalSkills: PropTypes.arrayOf(PropTypes.object),
}

export default AdditionalSkills
