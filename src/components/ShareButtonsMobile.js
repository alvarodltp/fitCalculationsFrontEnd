import React from 'react'
import { FacebookShareCount, LinkedinShareCount, PinterestShareCount } from 'react-share';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  EmailShareButton,
} from 'react-share';
import {
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  LinkedinIcon,
  PinterestIcon,
  EmailIcon,
} from 'react-share';

class ShareButtonsMobile extends React.Component {
  render(){
    let shareUrl = "https://www.fitcalculations.com/"
    return(
      <div id="share-buttons-mobile">
        <FacebookShareButton
         url={shareUrl} >
        <FacebookIcon
        size={32}
        round={true}/>
        </FacebookShareButton><br/>

        <TwitterShareButton
         url={shareUrl} >
        <TwitterIcon
        size={32}
        round={true}/>
        </TwitterShareButton>

        <WhatsappShareButton
         url={shareUrl} >
        <WhatsappIcon
        size={32}
        round={true}/>
        </WhatsappShareButton>

        <LinkedinShareButton
         url={shareUrl} >
        <LinkedinIcon
        size={32}
        round={true}/>
        </LinkedinShareButton>

        <EmailShareButton
         url={shareUrl} >
        <EmailIcon
        size={32}
        round={true}/>
        </EmailShareButton>

      </div>
    )
  }
}

export default ShareButtonsMobile
