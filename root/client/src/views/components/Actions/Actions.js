import React from 'react'
import { Fab } from '@material-ui/core'
import { GetApp as GetAppIcon } from '@material-ui/icons'

import getAPIData from '../../../models/api/api'
import apiEndPoints from '../../../models/api/apiEndPoints'
import './Actions.css'

const Actions = () => {
  const downloadURL =
    'https://storage.googleapis.com/resume-portfolio-app.appspot.com/Vishwanath.pdf'

  const onDownloadClick = () => {
    async function fetchData() {
      await getAPIData(
        apiEndPoints.postDownload.method,
        apiEndPoints.postDownload.url
      )
    }
    fetchData()

    document.getElementById('download-link').click()
  }

  return (
    <div className="actions">
      <Fab
        className="actions__item"
        color="primary"
        aria-label="add"
        onClick={onDownloadClick}
        disableRipple
      >
        <GetAppIcon />
      </Fab>
      <a id="download-link" href={downloadURL}>
        {' '}
      </a>
    </div>
  )
}

export default Actions
