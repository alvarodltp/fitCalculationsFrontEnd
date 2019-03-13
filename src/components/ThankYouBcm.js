import React from 'react'
import {Image, Icon, Button} from 'semantic-ui-react'
import ShareButtons from './ShareButtons'
import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";
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
          <div id="thank-you-bcm-text">
            <h3>Thanks for requesting an invite. This calculator is a game changer and we can't wait for you to use it!</h3>
            <p>Please share the page with the buttons below and get a 50% OFF coupon for our signature Unleash Your Fitness Potential program. A personalized fitness guide that will take you to the next level.</p>
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

  // <Confetti id="confetti" active={ this.state.completed } config={ config } />
