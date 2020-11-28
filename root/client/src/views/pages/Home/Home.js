import React from 'react'

import getAPIData from '../../../models/api/api'
import apiEndPoints from '../../../models/api/apiEndPoints'
import { Header, Content, Actions } from '../../components'

const Home = () => {
  const [data, setData] = React.useState()

  React.useEffect(() => {
    async function fetchData() {
      const response = await getAPIData(
        apiEndPoints.getData.method,
        apiEndPoints.getData.url
      )

      setData(response.data)
    }
    fetchData()
  }, [])

  return (
    <>
      <Header data={data?.header} />
      <Content data={data?.content} />
      <Actions />
    </>
  )
}

export default Home
