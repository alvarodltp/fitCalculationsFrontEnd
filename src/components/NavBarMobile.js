
import React from 'react'
import {Image} from 'semantic-ui-react'
import { Link } from "react-router-dom"

class NavBarMobile extends React.Component {

  render(){
    return(
      <div id="navbar">
        <Image src={'../fit-calculations-logo-2'} id="logo-mobile" />
      </div>

    )
  }
}

export default NavBarMobile
