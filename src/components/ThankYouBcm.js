import React from 'react'
import {Image, Icon, Button} from 'semantic-ui-react'
import ShareButtons from './ShareButtons'
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";
import ShareButtonsMobile from './ShareButtons'
import Confetti from 'react-dom-confetti';

class ThankYouBcm extends React.Component {

constructor(){
  super()
  this.state={
    completed: false
  }
}

componentDidMount() {
  this.setState({
    completed: true
  })
}

  render(){
    const config = {
      angle: 20,
      spread: 360,
      startVelocity: 45,
      elementCount: 300,
      decay: 0.9
    };
    return(
        <React.Fragment>
        <div style={{height: "86vh"}}>
          <div id="header-thankyou-bcm">
            <h1>YOU'RE IN!</h1>
          </div>
          <Confetti id="confetti" active={ this.state.completed } config={ config } />
          <div id="thank-you-bcm-text">
            <h3>Your ebook has been sent to your email! Make sure to check the spam folder.</h3>
            <p>Before you dive in, you can help someone else achive their dream body. Please help spread the word by sharing the calculation with the buttons below. It really helps.</p>
            <p>Enjoy.</p>
          </div>
          <MobileView id="thank-you-page-buttons">
            <ShareButtonsMobile/>
          </MobileView>
          <BrowserView id="thank-you-page-buttons">
            <ShareButtons/>
          </BrowserView>
        </div>
        </React.Fragment>


    )
  }
}

export default ThankYouBcm
