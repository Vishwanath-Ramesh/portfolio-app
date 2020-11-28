import React from 'react'
import PropTypes from 'prop-types'

import './Education.css'

const Education = ({ education }) => {
  return (
    <div className="education">
      <label className="education__title">Education</label>
      <div className="education__content">
        {education &&
          education.map((item) => {
            return (
              <div key={item.study} className="education__item">
                <div className="education__left">
                  <label className="education__period">{`${item.from} - ${item.to}`}</label>
                  <label className="education__study">{item.study}</label>
                </div>
                <div className="education__right">
                  <label className="education__university">
                    {item.university}
                  </label>
                  {item.degree && (
                    <label className="education__degree">{item.degree}</label>
                  )}
                  <label className="education__percentage">
                    {item.percentage}
                  </label>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

Education.propTypes = {
  education: PropTypes.arrayOf(PropTypes.object),
}

export default Education
