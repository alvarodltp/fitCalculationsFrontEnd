import React from 'react'
import {Image, Icon} from 'semantic-ui-react'
import ShareButtons from './ShareButtons'
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";
import { Link } from "react-router-dom"

class NavBar extends React.Component {

  refreshPage = () => {
    window.location.reload()
  }

  render(){
    return(
        <div id="navbar">
          <h1 onClick={this.refreshPage} id="logo">FIT CALCULATIONS</h1>
          <BrowserView style={{float:"right"}}>
            <ShareButtons/>
          </BrowserView>
        </div>
    )
  }
}

export default NavBar
