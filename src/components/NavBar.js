import React from 'react'
import {Image, Dropdown, Icon} from 'semantic-ui-react'
import ShareButtons from './ShareButtons'
import { BrowserView } from "react-device-detect";
import { Link } from "react-router-dom"

class NavBar extends React.Component {

  render(){
    return(
      <React.Fragment>
        <div id="navbar">
          <Image src={'../fit-calculations-logo-2'} id="logo" />
        </div>
     </React.Fragment>




    )
  }
}

export default NavBar
