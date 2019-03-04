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
import Fade from 'react-reveal/Fade';

class BmrCalorieResults extends React.Component {

  render(){
    return(
      <React.Fragment>
        <div id="congratulations-message">
          <h1 id="title-bcm">CONGRATS, {this.props.name.toUpperCase()}! <Icon style={{color: "#7CFC00"}} name='check' /></h1>
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
        <Divider style={{margin: "0 auto", fontSize: "30px", fontStyle: "italic", marginTop: "40px", width: "80%"}} horizontal>
          YOUR RESULTS
        </Divider>
        {this.props.motivationToGetFit === "Health Reasons" ?
        <div id="intro-results">
          <p>{this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1)}, that's awesome you want to {this.props.goal.toLowerCase()} and most importantly, that you want to improve your {this.props.motivationToGetFit.slice(0, 6).toLowerCase()}! It really isn't rocket science
           and you are closer to your goals than what you think. You have super powerful information available to you now, and it is up to you to take action to get the body and health you deserve. Read your results fully and let us know if you have any questions!</p>
        </div> :
        <div id="intro-results">
          <p>{this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1)}, that's awesome you have a {this.props.motivationToGetFit.toLowerCase()} coming up! It isn't rocket science to {this.props.goal.toLowerCase()}
            and get the body you want. You are closer to your goals than what you think. You have super powerful information available to you now, and it is up to you to take action to get the body you deserve. Read your results fully and let us know if you have any questions!</p>
        </div> }
        <Card id="calories-result" onClick={this.props.displayCaloriesInfo}>
          <h2 id="bmr-results-text">YOUR CALORIES</h2>
        </Card>
          <Fade top when={this.props.displayCalories}>
            <div style={{width: "80%", margin: "0 auto"}}>
              <p>You need {this.props.caloriesForGoal} daily calories in order to {this.props.goal.toLowerCase()}. {this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1)}, don't freak out...ok, maybe you already did and that is ok. About 80% of people think their numbers are too high, yet when they follow and trust the program,
              they get amazing results. Eating less won't help you {this.props.goal.toLowerCase()}. This is one of the biggest misconceptions when it comes to nutrition. Trust your results and you will get amazong results.</p>
            </div>
          </Fade>
        <Card id="calories-result" onClick={this.props.displayDietInfo}>
          <h2 id="bmr-results-text">YOUR DIET</h2>
        </Card>
        <Fade top when={this.props.displayDiet}>
          <div style={{width: "80%", margin: "0 auto"}}>
            <p>Having a {this.props.dietType.toLowerCase()} diet is great as long as you are getting a balanced amount of nutrients your body needs to perform at its best. Here is out advice... don't focuse too much on calories and instead make sure you are hitting your macros consistently. By hitting your macros we mean getting very close to the daily grams of protein, carbohydrates, and fats you need.</p>
          </div>
        </Fade>

      </React.Fragment>
    )
  }
}

export default BmrCalorieResults

// <h1>Maintenance Calories</h1>
// <Card.Description>Naturally muscular and athletic with a moderate metabolic rate.</Card.Description>
// <h1 style={{color: "green"}}>{this.props.caloriesToMaintain}</h1>
