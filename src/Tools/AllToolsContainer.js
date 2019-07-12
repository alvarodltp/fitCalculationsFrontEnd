import React from 'react'
import { Card, Button } from 'semantic-ui-react'
import AllTools from './AllTools'
import Header from '../components/Header'

const AllToolsContainer = (props) => {
  return(
    <React.Fragment>
      <Header title={"Tools"} background={"heart-rate.png"}/>
      <AllTools />
    </React.Fragment>
  )
}

export default AllToolsContainer
