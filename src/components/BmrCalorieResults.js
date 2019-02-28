import React from 'react'
import { Card, Button, Icon, Divider } from 'semantic-ui-react'
import ShareButtons from './ShareButtons'
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";
import ShareButtonsMobile from './ShareButtons'

class BmrCalorieResults extends React.Component {

  render(){
    return(
      <React.Fragment>
        <div id="congratulations-message">
          <h2 id="title-bcm">CONGRATULATIONS, {this.props.name.toUpperCase()}! <Icon style={{color: "#7CFC00"}} name='check' /></h2>
            <h3>Your ebook has been sent to your email!</h3>
            <p>Before you dive in, you can help someone else achive their dream body. Please help spread the word by sharing the calculator with the buttons below. It really helps.</p>
            <p>Enjoy.</p>
          <MobileView id="thank-you-page-buttons">
            <ShareButtonsMobile/>
          </MobileView>
          <BrowserView id="thank-you-page-buttons">
            <ShareButtons/>
          </BrowserView>
        </div>
        <Divider style={{marginTop: "40px", fontSize: "20px"}} horizontal>
          YOUR RESULTS
        </Divider>
        {this.props.motivationToGetFit === "Health Reasons" ?
        <div id="intro-results">
          <p>{this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1)}, that's awesome you want to {this.props.goal.toLowerCase()} and most importantly, that you want to improve your {this.props.motivationToGetFit.slice(0, 6).toLowerCase()}! It really isn't rocket science
          and you are closer to your goals than what you think. You already have super powerful personalized information available to you, and now it is up to you to take this information and apply it to your life to get the body and health you deserve. Read your results fully and let us know if you have any questions!</p>
        </div> :
        <div id="intro-results">
          <p>{this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1)}, that's awesome you have a {this.props.motivationToGetFit.toLowerCase()} coming up! It isn't rocket science to {this.props.goal.toLowerCase()}
           and get the body you want. You are closer to your goals than what you think. This super powerful personalized information available to you is all you need, and now it is up to you to take this information and apply it to your life to get the body you deserve. Read your results fully and let us know if you have any questions!</p>
        </div> }
        <Card id="calories-result">
          <Card.Content id="calories-card">
            <h2 id="bmr-results-text">YOUR CALORIES</h2>
            <p>You need {this.props.caloriesForGoal} daily calories in order to {this.props.goal.toLowerCase()}. {this.props.name.charAt(0).toUpperCase()}, don't freak out...ok, maybe you already did and that is ok. About 80% of clients though their numbers were too high, yet when they follow the program,
            they see results. Eating less won't help you {this.props.goal.toLowerCase()}. This is one of the biggest misconceptions when it comes to nutrition but YOU WILL accomplish your goals as long as you follow your results.</p>
          </Card.Content>
        </Card>
        <Card id="diet-type-result">
          <Card.Content id="calories-card">
            <h2 id="bmr-results-text">YOUR DIET</h2>
            <p>Having a {this.props.dietType.toLowerCase()} is great as long as you are getting a balanced amount of nutrients your body needs to perform at its best. Our advise to you is not to focuse too much on calories but instead on hitting your macros consistently.
            As long as you get the right amount of macros that we have calculated for you, the calories will add up to your goal number automatically. And guess what...you can always hit your macros eating the foods you love!</p>
          </Card.Content>
        </Card>
      </React.Fragment>
    )
  }
}

export default BmrCalorieResults

// <h1>Maintenance Calories</h1>
// <Card.Description>Naturally muscular and athletic with a moderate metabolic rate.</Card.Description>
// <h1 style={{color: "green"}}>{this.props.caloriesToMaintain}</h1>
