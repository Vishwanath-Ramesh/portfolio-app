import React from 'react'
import PropTypes from 'prop-types'

import './Skillbar.css'

const Skillbar = ({ skills }) => {
  return (
    <div className="skillbar">
      <div className="skillbar__container">
        {skills &&
          skills.map((skill) => {
            return (
              <div key={skill.type} className="skillbar__item">
                <div className="skillbar__type">{skill.type}</div>
                <div className="skillbar__level">
                  <div
                    style={{
                      width: `${skill.level}%`,
                      backgroundColor: 'black',
                    }}
                  ></div>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

Skillbar.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.object),
}

export default Skillbar
