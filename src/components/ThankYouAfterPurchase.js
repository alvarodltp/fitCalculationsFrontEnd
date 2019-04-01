import React from 'react'
import {Image, Icon, Button} from 'semantic-ui-react'
import ShareButtons from './ShareButtons'
import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";
import ShareButtonsMobile from './ShareButtons'
import Confetti from 'react-dom-confetti';
import Slide from 'react-reveal/Slide';

class ThankYouAfterPurchase extends React.Component {

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
          <Slide bottom>
            <div style={{height: "86.2vh"}}>
              <div id="thank-you-bcm-text">
                <p style={{fontSize: "14px", textAlign: "left"}}>Thank you for your purchase! You should be receiving a couple of emails shortly. A purchase receipt and a personal welcome with next steps while you wait for your perzonalized guide! If you don't receive an email within 10 minutes, feel free to chat with us.</p>
                <p style={{fontSize: "14px", textAlign: "left"}}>If you know anyone who could benefit from this calculator and guide, please feel free to share with the buttons below. This guide works 100% of the time for people who follow it.</p>
                <p style={{fontSize: "14px"}}>Welcome to the family!👋</p>
              </div>
              <MobileView id="thank-you-page-buttons">
                <ShareButtonsMobile/>
              </MobileView>
              <BrowserView id="thank-you-page-buttons">
                <ShareButtons/>
              </BrowserView>
            </div>
          </Slide>
        </React.Fragment>


    )
  }
}

export default ThankYouAfterPurchase
