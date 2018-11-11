import React from 'react'
import { Image, Card } from 'semantic-ui-react'
import {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  RedditShareButton,
  TumblrShareButton,
  EmailShareButton,
} from 'react-share';
import {
  FacebookShareCount,
  LinkedinShareCount,
  PinterestShareCount,
  RedditShareCount,
  TumblrShareCount,
} from 'react-share';
import {
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  LinkedinIcon,
  PinterestIcon,
  RedditIcon,
  TumblrIcon,
  EmailIcon,
} from 'react-share';

class AppIntro extends React.Component {
  render(){
    return(
      <Card id="info-card">
        <Image id="image" size="small" src='https://www.dropbox.com/s/8g5a8puh85x4gc4/Alvaro.jpg?raw=1' circular/>
        <p id="text">Welcome to fitcalculations.com! I was a personal trainer business owner who became a software developer in order to bring all my ideas to life. As a fitness enthusiast, my goal is to provide you with the tools necessary to make informed health choices based on reliable calculations.
        I got inspired to build this site when I realized many of my friends and family didn't know basic information that could help them accomplish their fitness goals. Weather you want to lose weight, gain muscle, or maintain your current weight, this calculator helps you understand your needs based on your current infomation.
        I hope this is useful to you and I really would love for you to share this site so more people can have this valuable information available for free! Don't hesitate to reach out if you have any suggestions or questions about your results.</p>
        <p>In Health,</p>
        <h3>Alvaro</h3>
        <div id="share-icons">
          <FacebookIcon size={32} round={true} />
          <TwitterIcon size={32} round={true} />
          <WhatsappIcon size={32} round={true} />
          <LinkedinIcon size={32} round={true} />
          <PinterestIcon size={32} round={true} />
          <RedditIcon size={32} round={true} />
          <TumblrIcon size={32} round={true} />
          <EmailIcon size={32} round={true} />
        </div>
      </Card>
    )
  }
}

export default AppIntro
