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

  render(){
    return(
        <div id="navbar">
          <Link to="/bmr-calories-macros">
            <h1 id="logo">FIT CALCULATIONS</h1>
          </Link>
          <BrowserView style={{float:"right"}}>
            <ShareButtons/>
          </BrowserView>
        </div>
    )
  }
}

export default NavBar
