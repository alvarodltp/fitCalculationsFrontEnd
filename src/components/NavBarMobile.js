
import React from 'react'
import {Image, Icon} from 'semantic-ui-react'
import { Link } from "react-router-dom"

class NavBarMobile extends React.Component {

  render(){
    return(
      <div id="navbar">
        <Image src={'../fit-calculations-logo-2'} id="logo-mobile" />
        <Icon style={{float: "right", marginTop: "10px", marginRight: "15px"}} size="large" name="bars"/>
      </div>

    )
  }
}

export default NavBarMobile
