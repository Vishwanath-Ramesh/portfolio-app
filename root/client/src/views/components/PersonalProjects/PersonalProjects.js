import React from 'react'
import PropTypes from 'prop-types'

import './PersonalProjects.css'

const PersonalProjects = ({ personalProjects }) => {
  return (
    <div className="personal-projects">
      <label className="personal-projects__title">Personal Projects</label>
      <div className="personal-projects__content">
        {personalProjects &&
          personalProjects.map((project) => {
            return (
              <div
                key={project.projectName}
                className="personal-projects__item"
              >
                <div className="personal-projects__header">
                  <label className="personal-projects__name">
                    {project.projectName}
                  </label>
                  <label className="personal-projects__skills">
                    {project.technology}
                  </label>
                </div>
                <label className="personal-projects__summary">
                  {project.summary}
                </label>
                <ul className="personal-projects__features">
                  {project &&
                    project.features.map((feature) => {
                      return (
                        <li
                          key={feature}
                          className="personal-projects__feature"
                        >
                          {feature}
                        </li>
                      )
                    })}
                </ul>
              </div>
            )
          })}
      </div>
    </div>
  )
}

PersonalProjects.propTypes = {
  personalProjects: PropTypes.arrayOf(PropTypes.object),
}

export default PersonalProjects
