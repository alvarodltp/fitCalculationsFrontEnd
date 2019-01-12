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
        <h1 id="logo">Fit Calculations</h1>
          <BrowserView style={{float:"right"}}>
            <ShareButtons/>
          </BrowserView>
          <Link to="/services">
          </Link>

      </div>
    )
  }
}

export default NavBar
