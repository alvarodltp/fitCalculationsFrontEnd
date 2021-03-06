import React from 'react'
import { Button, Icon, Divider, Grid } from 'semantic-ui-react'
import ShareButtons from './ShareButtons'
import Fade from 'react-reveal/Fade';
import CaloriesBarChart from './CaloriesBarChart'
import MacroPercentageChart from './MacroPercentageChart'
import MacrosPieChart from './MacrosPieChart'
import ExerciseTable from './ExerciseTable'
import MacrosBreakdownForm from './MacrosBreakdownForm'
import { Link } from "react-router-dom"
import { Popup } from 'semantic-ui-react'

class BmrCalorieResults extends React.Component {

  render(){
    debugger
    return(
      <React.Fragment>
      <Divider style={{fontSize: "35px", fontStyle: "italic", marginTop: "40px"}} horizontal>
          Your Results
      </Divider>
        {this.props.motivationToGetFit === "Health Reasons" ?
        <div id="intro-results">
          <p style={{textAlign: "left", fontSize: "18px"}}>{this.props.user["name"].charAt(0).toUpperCase() + this.props.user["name"].slice(1)}, that's awesome you want to {this.props.goal.toLowerCase()} and most importantly, that you want to improve your {this.props.motivationToGetFit.slice(0, 6).toLowerCase()}! It really isn't rocket science and with these results, you are closer to your goals than ever before. You have super powerful information available to you now, and it is up to you to take action to get the body and health you deserve. Read your results fully and let us know if you have any questions!</p>
        </div> :
        <div id="intro-results">
          <p style={{textAlign: "left", fontSize: "18px"}}>{this.props.user["name"].charAt(0).toUpperCase() + this.props.user["name"].slice(1)}, that's awesome you have a {this.props.motivationToGetFit.toLowerCase()} coming up and that you want to look amazing for it. It really isn't rocket science to {this.props.goal.toLowerCase()} and get the body you want. With these results, you are closer to your goal than ever before. It's simple, follow them and you will be amazed at the progress you will make. Read your results fully and let us know if you have any questions!</p>
        </div> }

        {this.props.caloriesShown === true ?
        <div id="results-card-drop-active" onClick={this.props.showCalories} >
          <h1 style={{fontSize:"30px", fontStyle: "italic"}}>CALORIES<Icon style={{fontSize: "20px", float: "right", paddingTop:"10px", marginRight: "10px"}} name="plus"/></h1>
        </div> :
        <div id="results-card-drop" onClick={this.props.showCalories} >
          <h1 style={{fontSize:"30px", fontStyle: "italic"}}>CALORIES<Icon style={{fontSize: "20px", float: "right", paddingTop:"10px", marginRight: "10px"}} name="plus"/></h1>
        </div> }

          {this.props.caloriesShown === true ?
          <Fade top >
            <div style={{width: "80%", margin: "0 auto", marginTop:"10px"}}>
              <p style={{textAlign: "left", fontSize: "18px"}}>Based on the information you provided, we have determined you need {this.props.caloriesForGoal} daily calories in order to {this.props.goal.toLowerCase()}. {this.props.user["name"].charAt(0).toUpperCase() + this.props.user["name"].slice(1)}, most people assume their numbers are high but remember, less calories doesn't mean faster results. Stick to your numbers and you will reach your goal in a steady and healthy way.</p>

              <Grid style={{margin: "0 auto"}} stackable columns={3}>
                <Grid.Row>
                  <Grid.Column width={5}>
                    <p style={{textAlign: "center", fontSize: "18px"}}>BMR (Basal Metabolic Rate)<Popup trigger={<Button id="more-info-Button-calories" icon='info circle' />} content='Your Basal Metabolic Rate is the number of calories your body needs to perform basic life-sustaining functions such as breathing, processing nutrients, circulation, and cell production. This is the base number used to determine your maintnance calories and goal calories.'/></p>
                  </Grid.Column>
                  <Grid.Column width={6}>
                    <p style={{textAlign: "center", fontSize: "18px"}}>Maintenance Calories<Popup trigger={<Button id="more-info-Button-calories" icon='info circle' />} content='This is the number of calories you need in order to keep the same weight. If you consume this number of calories, your body will not change.'/></p>
                  </Grid.Column>
                  <Grid.Column width={5}>
                    <p style={{textAlign: "center", fontSize: "18px"}}>Goal Calories<Popup trigger={<Button id="more-info-Button-calories" icon='info circle' />} content='This is your goal calorie number. Based on the number of pounds you want to lose or gain, we use your maintenance calories to either substract or add a specific amount of calories based on your goal.' /></p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </div>



            <div style={{width: "80%", margin: "0 auto"}}>
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
        <Fade top >
          <div style={{width: "80%", margin: "0 auto", marginTop:"10px"}}>
            <p style={{textAlign: "left", fontSize: "18px"}}>Having a {this.props.dietType.toLowerCase()} diet is great as long as you are getting a balanced amount of nutrients your body needs to perform at its best.
            Based on your {this.props.bodyType} body type, we have split your macronutrients percentage as follows for optimal results.</p>
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
        <Fade top >
          <div style={{width: "80%", margin: "0 auto", marginTop:"10px"}} >
            <p style={{textAlign: "left", fontSize: "18px"}}>Macros are the basic building blocks of food - protein, carbs, and fats. These make up the calories we calculated based on your needs and goal.
             Here is our advice, don't focus too much on calories and instead make sure you are hitting your macros consistently. By hitting your macros we mean getting very close to the daily grams of protein, carbohydrates, and fats your body needs.</p>
          </div>
          <div style={{width: "70%", margin: "0 auto"}}>
            <MacrosPieChart protein={this.props.protein} carbs={this.props.carbs} fats={this.props.fats}/>
          </div>
        </Fade> : null }


        {this.props.exerciseShown === true ?
        <div onClick={this.props.showExercise} id="results-card-drop-active">
          <h2 style={{fontSize:"30px", fontStyle: "italic"}}>CARDIO<Icon style={{fontSize: "20px", float: "right", paddingTop:"10px", marginRight: "10px"}} name="plus" size="tiny"/></h2>
        </div> :
        <div onClick={this.props.showExercise} id="results-card-drop">
          <h2 style={{fontSize:"30px", fontStyle: "italic"}}>CARDIO<Icon style={{fontSize: "20px", float: "right", paddingTop:"10px", marginRight: "10px"}} name="plus" size="tiny"/></h2>
        </div> }

        {this.props.exerciseShown === true ?
        <Fade top>
          <div style={{width: "80%", margin: "0 auto", marginTop:"10px", marginBottom: "20px"}} >
            <p style={{textAlign: "left", fontSize: "18px"}}>These are your THR(Target Heart Rate) zones. Hover or click on the button on the right of each of them to learn and determine what zone is most appropiate based on your goal to {this.props.goal.toLowerCase()}.</p>
          </div>
          <div style={{width: "80%", margin: "0 auto"}}>
            <ExerciseTable age={this.props.age} maxHeartRate={this.props.maxHeartRate}/>
          </div>
        </Fade> : null }


        {this.props.macroCalculatorShown === true ?
        <div onClick={this.props.showMacroCalculator} id="results-card-drop-active">
          <h2 style={{fontSize:"30px", fontStyle: "italic"}}>DAILY SPLIT<Icon style={{fontSize: "20px", float: "right", paddingTop:"10px", marginRight: "10px"}} name="plus" size="tiny"/></h2>
        </div> :
        <div onClick={this.props.showMacroCalculator} id="results-card-drop">
          <h2 style={{fontSize:"30px", fontStyle: "italic"}}>DAILY SPLIT<Icon style={{fontSize: "20px", float: "right", paddingTop:"10px", marginRight: "10px"}} name="plus" size="tiny"/></h2>
        </div> }

        {this.props.macroCalculatorShown === true ?
        <Fade top>
          <div style={{width: "80%", margin: "0 auto", marginTop:"10px", marginBottom: "20px"}} >
            <p style={{textAlign: "left", fontSize: "18px"}}>The amount of macronutrients and calories you consume on each meal can vary drastically. However, if you follow your numbers, and by the end of the day you have successfully hit your numbers, you will see results. This calculator splits your calories and macros evenly just to give you an idea of the nutrition values each meal should have based on the selected number of meals you want to eat per day.</p>
          </div>
          <div style={{width: "80%", margin: "0 auto"}}>
            <MacrosBreakdownForm caloriesForGoal={this.props.caloriesForGoal} protein={this.props.protein} carbs={this.props.carbs} fats={this.props.fats}/>
          </div>
        </Fade> : null }

        <Link to="/no-diets" target="_blank">
          <div id="take-action-card" onClick={this.props.showLandingPage} style={{marginBottom: "80px"}}>
            <h2 style={{fontSize:"30px", fontStyle: "italic"}}>RECOMMENDATION<Icon style={{fontSize: "20px", float: "right", paddingTop:"10px", marginRight: "10px"}} name="arrow right" size="tiny"/></h2>
          </div>
        </Link><br/>


      </React.Fragment>
    )
  }
}

export default BmrCalorieResults
