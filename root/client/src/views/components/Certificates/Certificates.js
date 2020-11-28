import React from 'react'
import PropTypes from 'prop-types'

import './Certificates.css'

const Certificates = ({ certifications }) => {
  return (
    <div className="certifications">
      <label className="certifications__title">Certifications</label>
      <div className="certifications__main">
        {certifications &&
          certifications.map((certificate) => {
            return (
              <div
                key={certificate.certification}
                className="certifications__item"
              >
                <div className="certifications__year">
                  {certificate.yearOfCompletion}
                </div>
                <div className="certifications__content">
                  <label className="certifications__name">
                    {certificate.certification}
                  </label>
                  <label className="certifications__provider">
                    {certificate.certifier}
                  </label>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

Certificates.propTypes = {
  certifications: PropTypes.arrayOf(PropTypes.object),
}

export default Certificates
