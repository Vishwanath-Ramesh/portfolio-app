import React from 'react'
import PropTypes from 'prop-types'

import './Experience.css'

const Experience = ({ experience }) => {
  return (
    <div className="experience">
      <label className="experience__title">Experience</label>
      <div className="experience__content">
        {experience &&
          experience.map((item) => {
            return (
              <div key={item.from} className="experience__item">
                <div className="experience__header">
                  <label
                    htmlFor=""
                    className="experience__period"
                  >{`${item.from} to ${item.to}`}</label>
                  <label htmlFor="" className="experience__technology">
                    {item.technology}
                  </label>
                </div>
                <div className="experiene__company">{item.company}</div>
                <div className="experience__summary">{item.summary}</div>
                {item.clients && item.clients.length > 0 && (
                  <div className="experience__clients">
                    <span>
                      <strong>Clients: </strong>
                    </span>
                    {item.clients.join(', ')}
                  </div>
                )}
              </div>
            )
          })}
      </div>
    </div>
  )
}

Experience.propTypes = {
  experience: PropTypes.arrayOf(PropTypes.object),
}

export default Experience
