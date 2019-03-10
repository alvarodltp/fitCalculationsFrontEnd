import React from 'react'
import { Modal, Icon, Button } from 'semantic-ui-react'
import ShareButtons from './ShareButtons'
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

class Footer extends React.Component {
  constructor(){
    super()
    this.state={
      modalOpenDisclaimer: false,
      modalOpenPrivacy: false
    }
  }

  handleOpenDisclaimer = () => this.setState({ modalOpenDisclaimer: true })

  handleCloseDisclaimer = () => this.setState({ modalOpenDisclaimer: false })

  handleOpenPrivacy = () => this.setState({ modalOpenPrivacy: true })

  handleClosePrivacy = () => this.setState({ modalOpenPrivacy: false })

  render(){
    return(
      <div id="footer" className="ui vertical footer segment form-page">
        <div id="footer-content">
          <Modal open={this.state.modalOpenPrivacy} id="footer-modal" trigger={<p style={{fontWeight: "bold"}} onClick={this.handleOpenPrivacy}>Privacy Policy</p>}>
            <Modal.Header>Privacy Policy</Modal.Header>
            <Modal.Content>
              <Modal.Description>
                <p>
                  We are glad of your interest in Fit Calculations. We have created this privacy statement in order to demonstrate our firm commitment to privacy.
                  For each visitor to our Web Page, our Web Server automatically logs statistical information such as the user's IP address, browser type, and the site where the user came from. None of this information can be used to personally identify an individual user. The information stored on our server may be used to provide statistics about the usage of this site, for the purpose of improving this site and to provide statistical information to advertisers. Only aggregated information is given, and the log file itself is not available to the public.
                  We use cookies to store information, such as your personal preferences when you visit our site. This could include only showing you a popup once in your visit, or retreiving your email in order to send detail reports or additional information regarding our products and services.
                  To try and bring you offers that are of interest to you, we have relationships with other companies that we allow to place ads on our Web pages. As a result of your visit to our site, ad server companies may collect information such as your domain type, your IP address and clickstream information. An advertiser may also display an advertisement that contains a cookie. These cookies are not sent from our site and we have no access to the information in these cookies.
                  Google's use of the DART cookie enables it and its partners to serve ads to you based on your visit to our website and other sites on the internet. This cookie is used to serve ads specific to you and your interests ("interest based targeting"). The ads served will be targeted based on your previous browsing history (For example, if you have been viewing sites about visiting Colorado, you may see Colorado hotel advertisements when viewing a non-related site, such as on a site about clothes). DART uses "non personally identifiable information". It does NOT track personal information about you, such as your name, email address, physical address, telephone number, social security numbers, bank account numbers or credit card numbers. You can opt-out of this ad serving on all sites using this advertising by visiting the advertising opt-out page.
                  This site contains links to other sites. Fit Calculations is not responsible for the privacy practices or the content of such Web Sites.
                  From time to time, we may use customer information for new, unanticipated uses not previously disclosed in our privacy notice. If our information practices change at some time in the future we will post the policy changes to our Web site to notify you of these changes and provide you with the ability to opt out of these new uses. If you are concerned about how your information is used, you should check back at our Web site periodically.
                  If you feel this site is not following its stated privacy policy or if you have any further questions, you may contact us at contact@fitcalculations.com.
                </p>
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              <Button color='green' onClick={this.handleClosePrivacy} inverted>
                <Icon name='checkmark' /> Got it
              </Button>
            </Modal.Actions>
          </Modal>
          <p style={{fontWeight: "bold"}}>2018 Fit Calculations</p>

          <Modal open={this.state.modalOpenDisclaimer} trigger={<p style={{fontWeight: "bold"}} onClick={this.handleOpenDisclaimer}>Disclaimer</p>}>
            <Modal.Header>Disclaimer</Modal.Header>
            <Modal.Content>
              <Modal.Description>
                <p>
                  This information is provided "as is" without warranty of any kind, either expressed or implied, including, but not limited to, the implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
                  In no event shall Fit Calculations be liable for any special, incidental, indirect or consequential damages of any kind, or any damages whatsoever resulting from loss of use, data or profits, whether or not advised of the possibility of damage under any theory of liability, arising out of or in connection with the use or performance of this information.
                  This information could include technical inaccuracies or typographical errors. Changes may be added periodically to the information contained in any of our web pages or sites.
                  Because this website deals with issues of a health related nature, we hereby state that Fit Calculations does not offer medical advice. Readers should seek medical advice from a licensed physician and not rely solely on information they may gather from secondary sources such as the Internet. Fit Calculations cannot be held responsible for the validity of the information contained in any reference noted herein, nor for the misuse of information or any adverse effects from use of any stated materials presented herein. Content at Fit Calculations is intended to offer factual, up to date information on the subjects discussed, but in no way should it be regarded as a complete analysis of these subjects. Physicians and other medical professionals should be consulted prior to implementing any items presented. No party associated in any way with this site or its content assumes liability for any loss or damage resulting from the use or misuse of any information contained herein or for any errors or omissions.
                  To try and bring you offers that are of interest to you, we have relationships with other companies that we allow to place ads on our Web pages. As a result of your visit to our site, ad server companies may collect information such as your domain type, your IP address and clickstream information. An advertiser may also display an advertisement that contains a cookie. These cookies are not sent from our site and we have no access to the information in these cookies.
                  If you have any further questions, please contact us at contact@fitcalculations.com.
                </p>
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              <Button color='green' onClick={this.handleCloseDisclaimer} inverted>
                <Icon name='checkmark' /> Got it
              </Button>
            </Modal.Actions>
          </Modal>
        </div>
       </div>
    )
  }
}

export default Footer
