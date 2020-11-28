import React from 'react'
import PropTypes from 'prop-types'

import './PersonalInfo.css'

const PersonalInfo = ({ personalInfo }) => {
  return (
    <div className="personal-info">
      <label className="personal-info__title">Personal Info</label>
      <div className="personal-info__content">
        {personalInfo &&
          personalInfo.map((info) => {
            return (
              <div key={info.label} className="personal-info__item">
                <label className="personal-info__label">{info.label}</label>
                <label className={`personal-info__description`}>
                  {info.isLink ? (
                    <a href={info.url} target="_blank" rel="noreferrer">
                      {info.description}
                    </a>
                  ) : (
                    info.description
                  )}
                </label>
              </div>
            )
          })}
      </div>
    </div>
  )
}

PersonalInfo.propTypes = {
  personalInfo: PropTypes.arrayOf(PropTypes.object),
}

export default PersonalInfo
