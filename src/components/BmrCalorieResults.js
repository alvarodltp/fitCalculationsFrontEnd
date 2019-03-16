import React from 'react'
import { Card, Button, Icon, Divider, Reveal, Image } from 'semantic-ui-react'
import ShareButtons from './ShareButtons'
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";
import ShareButtonsMobile from './ShareButtons'
import Fade from 'react-reveal/Fade';
import CaloriesBarChart from './CaloriesBarChart'
import MacroPercentageChart from './MacroPercentageChart'
import MacrosPieChart from './MacrosPieChart'

class BmrCalorieResults extends React.Component {

  render(){
    return(
      <React.Fragment>
      <Divider style={{fontSize: "35px", fontStyle: "italic"}} horizontal>
          Your Results
      </Divider>
        {this.props.motivationToGetFit === "Health Reasons" ?
        <div id="intro-results">
          <p style={{fontSize: "15px"}}>{this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1)}, that's awesome you want to {this.props.goal.toLowerCase()} and most importantly, that you want to improve your {this.props.motivationToGetFit.slice(0, 6).toLowerCase()}! It really isn't rocket science
            and you are closer to your goals than what you think. You have super powerful information available to you now, and it is up to you to take action to get the body and health you deserve. Read your results fully and let us know if you have any questions!</p>
        </div> :
        <div id="intro-results">
          <p style={{textAlign: "left", fontSize: "18px"}}>{this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1)}, that's awesome you have a {this.props.motivationToGetFit.toLowerCase()} coming up! It isn't rocket science to {this.props.goal.toLowerCase()}
             and get the body you want. You are closer to your goals than what you think. You have super powerful information available to you now, and it is up to you to take action to get the body you deserve. Read your results fully and let us know if you have any questions!</p>
        </div> }

        {this.props.caloriesShown === true ?
        <div id="results-card-drop-active" onClick={this.props.showCalories} >
          <h1 style={{fontSize:"30px", fontStyle: "italic"}}>CALORIES<Icon style={{fontSize: "20px", float: "right", paddingTop:"10px", marginRight: "10px"}} name="plus"/></h1>
        </div> :
        <div id="results-card-drop" onClick={this.props.showCalories} >
          <h1 style={{fontSize:"30px", fontStyle: "italic"}}>CALORIES<Icon style={{fontSize: "20px", float: "right", paddingTop:"10px", marginRight: "10px"}} name="plus"/></h1>
        </div> }

          {this.props.caloriesShown === true ?
          <Fade top when={this.props.displayCalories}>
            <div style={{width: "80%", margin: "0 auto", marginTop:"10px"}}>
              <p style={{textAlign: "left", fontSize: "18px"}}>You need {this.props.caloriesForGoal} daily calories in order to {this.props.goal.toLowerCase()}. {this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1)}, this was calculated based on your personal needs. Remember, less calories doesn't mean better. This is the number you need to get to your goal.</p>
            </div>
            <div style={{width: "70%"}}>
              <CaloriesBarChart caloriesForGoal={this.props.caloriesForGoal} caloriesToMaintain={this.props.caloriesToMaintain} bmr={this.props.bmr}/>
            </div>
          </Fade> : null }

          {this.props.dietShown === true ?
          <div id="results-card-drop-active" onClick={this.props.showDiet}>
            <h2 style={{fontSize:"30px", fontStyle: "italic"}}>DIET<Icon style={{fontSize: "20px", float: "right", paddingTop:"10px", marginRight: "10px"}} name="plus" size="tiny"/></h2>
          </div> :
          <div id="results-card-drop" onClick={this.props.showDiet}>
            <h2 style={{fontSize:"30px", fontStyle: "italic"}}>DIET<Icon style={{fontSize: "20px", float: "right", paddingTop:"10px", marginRight: "10px"}} name="plus" size="tiny"/></h2>
          </div> }

        {this.props.dietShown === true ?
        <Fade top when={this.props.displayDiet}>
          <div style={{width: "80%", margin: "0 auto", marginTop:"10px"}}>
            <p style={{textAlign: "left", fontSize: "18px"}}>Having a {this.props.dietType.toLowerCase()} diet is great as long as you are getting a balanced amount of nutrients your body needs to perform at its best. Here is out advice... don't focus too much on calories and instead make sure you are hitting your macros consistently. By hitting your macros we mean getting very close to the daily grams of protein, carbohydrates, and fats you need.</p>
          </div>
          <div style={{width: "70%", margin: "0 auto"}}>
            <MacroPercentageChart proteinPercentage={this.props.proteinPercentage} carbPercentage={this.props.carbPercentage} fatPercentage={this.props.fatPercentage}/>
          </div>
        </Fade> : null }

        {this.props.macrosShown === true ?
        <div onClick={this.props.showMacros} id="results-card-drop-active">
          <h2 style={{fontSize:"30px", fontStyle: "italic"}}>MACROS<Icon style={{fontSize: "20px", float: "right", paddingTop:"10px", marginRight: "10px"}} name="plus" size="tiny"/></h2>
        </div> :
        <div onClick={this.props.showMacros} id="results-card-drop">
          <h2 style={{fontSize:"30px", fontStyle: "italic"}}>MACROS<Icon style={{fontSize: "20px", float: "right", paddingTop:"10px", marginRight: "10px"}} name="plus" size="tiny"/></h2>
        </div> }

        {this.props.macrosShown === true ?
        <Fade top when={this.props.displayMacros}>
          <div style={{width: "80%", margin: "0 auto", marginTop:"10px"}} >
            <p style={{textAlign: "left", fontSize: "18px"}}>Having a {this.props.dietType.toLowerCase()} diet is great as long as you are getting a balanced amount of nutrients your body needs to perform at its best. Here is out advice... don't focus too much on calories and instead make sure you are hitting your macros consistently. By hitting your macros we mean getting very close to the daily grams of protein, carbohydrates, and fats you need.</p>
          </div>
          <div style={{width: "70%", margin: "0 auto"}}>
            <MacrosPieChart protein={this.props.protein} carbs={this.props.carbs} fats={this.props.fats}/>
          </div>
        </Fade> : null }
      </React.Fragment>
    )
  }
}

export default BmrCalorieResults

// <Card id="landing-main-benefits">
//     <h1>Congrats {this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1)}, your results are ready! <Icon style={{color: "#7CFC00"}} name='check' /></h1>
//     <p style={{textAlign: "left", fontSize: "18px"}}>Before you dive in, you can help someone else achive their dream body. Please help spread the word by sharing the calculator with the buttons below. It really helps.</p>
//     <p style={{textAlign: "left", fontSize: "18px"}}>Enjoy.</p>
//   <MobileView id="thank-you-page-buttons">
//     <ShareButtonsMobile/>
//   </MobileView>
//   <BrowserView id="thank-you-page-buttons">
//     <ShareButtons/>
//   </BrowserView>
// </Card>

// <h1>Maintenance Calories</h1>
// <Card.Description>Naturally muscular and athletic with a moderate metabolic rate.</Card.Description>
// <h1 style={{color: "green"}}>{this.props.caloriesToMaintain}</h1>
