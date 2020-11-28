import React from 'react'

import PersonalInfo from '../PersonalInfo/PersonalInfo'
import Experience from '../Experience/Experience'
import Skills from '../Skills/Skills'
import AdditionalSkills from '../AdditionalSkills/AdditionalSkills'
import Responsibilities from '../Responsibilities/Responsibilities'
import Certificates from '../Certificates/Certificates'
import Recognitions from '../Recognitions/Recognitions'
import PersonalProjects from '../PersonalProjects/PersonalProjects'
import Education from '../Education/Education'
import Extras from '../Extras/Extras'
import Languages from '../Languages/Languages'

import './Content.css'

const Content = ({ data = {} }) => {
  return (
    <div className="content">
      <div className="content__column-left">
        <Experience experience={data.experience} />
        <Responsibilities responsibilities={data.responsibilities} />
        <Certificates certifications={data.certifications} />
        <Recognitions recognitions={data.recognitions} />
        <PersonalProjects personalProjects={data.personalProjects} />
        <Education education={data.education} />
        <Extras extras={data.extras} />
      </div>
      <div className="content__column-right">
        <PersonalInfo personalInfo={data.personalInfo} />
        <Skills skills={data.skills} />
        <AdditionalSkills additionalSkills={data.additionalSkills} />
        <Languages languages={data.languages} />
      </div>
    </div>
  )
}

export default Content
