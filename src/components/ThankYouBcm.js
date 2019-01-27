import React from 'react'
import {Image, Icon} from 'semantic-ui-react'
import ShareButtons from './ShareButtons'
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

class ThankYouBcm extends React.Component {

  refreshPage = () => {
    window.location.reload()
  }

  render(){
    return(
        <div id="header-thankyou-bcm">
          <h1>You're in!</h1>
        </div>
    )
  }
}

export default ThankYouBcm
