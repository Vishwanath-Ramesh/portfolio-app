import React from 'react'
import PropTypes from 'prop-types'

import './Recognitions.css'

const Recognitions = ({ recognitions }) => {
  return (
    <div className="recognitions">
      <label className="recognitions__title">Recognitions</label>
      <div className="recognitions__content">
        {recognitions &&
          recognitions.map((recognition) => {
            return (
              <div key={recognition.title} className="recognitions__item">
                <label htmlFor="" className="recognitions__year">
                  {recognition.year}
                </label>
                <label htmlFor="" className="recognitions__name">
                  {recognition.title}
                </label>
              </div>
            )
          })}
      </div>
    </div>
  )
}

Recognitions.propTypes = {
  recognitions: PropTypes.arrayOf(PropTypes.object),
}

export default Recognitions
