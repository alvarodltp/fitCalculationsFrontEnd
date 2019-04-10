import React from 'react'
import {Image} from 'semantic-ui-react'
import ShareButtons from './ShareButtons'
import { BrowserView } from "react-device-detect";
import { Link } from "react-router-dom"

class NavBar extends React.Component {

  render(){
    return(
      <React.Fragment>
      {this.props.mobibeDevice === true ?
        <div id="navbar">
          <Image src={'../fit-calculations-logo-2'} id="logo-mobile" />
          <BrowserView style={{float:"right"}}>
            <ShareButtons/>
          </BrowserView>
        </div> :
        <div id="navbar">
          <Image src={'../fit-calculations-logo-2'} id="logo" />
          <BrowserView style={{float:"right"}}>
            <ShareButtons/>
          </BrowserView>
        </div> }
     </React.Fragment>

    )
  }
}

export default NavBar
