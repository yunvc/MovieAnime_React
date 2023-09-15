import React from 'react'
import Main from '../components/Main'
import requests from '../Requests'
import Row from '../components/Row'
import Types from '../components/Types'


const Home = () => {
  return (
    <>
        <Main/>
        <Types/>
        <Row title='Up coming' fetchURL={requests.requestUpcoming}/>
    </>
  )
}

export default Home