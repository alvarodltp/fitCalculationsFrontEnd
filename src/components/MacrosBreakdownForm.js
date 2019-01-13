import React from 'react'
import {Image, Icon, Card, Form, Radio, Button} from 'semantic-ui-react'
import MacrosBreakdownResults from './MacrosBreakdownResults'

class MacrosBreakdownForm extends React.Component {
  constructor(){
    super()
    this.state={
      macrosBreakdownbuttonDisabled: false,
      mealsPerDay: "",
      macrosBreakdownEmailButtonDisabled: true,
      emailValid: false,
      email: "",
      userStats: null,
      calories: "",
      proteins: "",
      carbs: "",
      fats: "",
      emailNotFound: false,
      showMacrosBreakdownResults: false,
      errorMessage: ""
    }
  }

  checkEmail = () => {
    this.state.email === "" ?
    this.setState({
      emailNotFound: true
    }) :
    this.setState({
    emailNotFound: false
  })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  getMealsPerDay = (e) => {
    this.setState({
      mealsPerDay: e.target.innerText
    })
  }

  validateEmail = (e) => {
    let email = e.target.value
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.setState({
      emailValid: re.test(email),
      macrosBreakdownEmailButtonDisabled: !re.test(email)
    })
  }

  fetchBmrCaloriesFatsFromUser = () => {
  let userEmail = this.state.email
  fetch("https://fitcalculations-api.herokuapp.com/users")
  .then(response => response.json())
  .then(json => {
    this.setState({
      user: json.filter(user => user.email === userEmail).pop(),
      userStats: json.filter(user => user.email === userEmail).pop().stats
    })
  }).then(() => this.getUserMacros())
}

  getUserMacros = () => {
  let userStats = this.state.userStats.pop()
    this.setState({
      calories: userStats.calories_for_goal,
      proteins: userStats.protein_grams,
      carbs: userStats.carb_grams,
      fats: userStats.fat_grams
    })
  }

  calculateMacrosBreakdown = () => {
    if(this.state.calories && this.state.proteins && this.state.carbs && this.state.fats && this.state.mealsPerDay){
    let caloriesInMeal = Math.round(this.state.calories / this.state.mealsPerDay)
    let proteinInMeal = Math.round(this.state.proteins / this.state.mealsPerDay)
    let carbsInMeal = Math.round(this.state.carbs / this.state.mealsPerDay)
    let fatsInMeal = Math.round(this.state.fats / this.state.mealsPerDay)
    this.setState({
      caloriesInMeal: caloriesInMeal,
      proteinInMeal: proteinInMeal,
      carbsInMeal: carbsInMeal,
      fatsInMeal: fatsInMeal,
      errorMessage: ""
    }, this.showMacrosBreakdownResults())
  } else {
    this.setState({
      errorMessage: "All fields are required"
    })
  }
  }

  showMacrosBreakdownResults = () => {
    this.setState({
      showMacrosBreakdownResults: true
    })
  }

  render(){
    const mealsPerDay = [{key: '2', text: '2', value: '2'}, {key: '3', text: '3', value: '3'}, {key: '4', text: '4', value: '4'}, {key: '5', text: '5', value: '5'}, {key: '6', text: '6', value: '6'}]
    return(
      <React.Fragment>
      <div id="nutrition-package-intro">
        <h1 id="section-title">Macronutrients Breakdown Calculator</h1>
      </div>
      <div id="nutrition-package-intro">
      <h3 id="section-title"><Icon name="angle right" size="mini"/> Who is this calculation for? </h3>
        <p>This calculation is great for anyone who already calculated their BRM, Calories, and Macros and is interested in dividing the amount of calories, proteins, carbs, and fats into the number of meals you would be eating every day.
        This will help you have a better understanding of the macros each meal needs to have.</p>
      </div>
      <div>
      <Card id="macros-breakdown-form">
        <Card.Content>
          <Form>
          <p style={{color: "red", fontWeight: "bold"}}>If you already calculated your BMR, Calories, and Macros  before, enter your email address to automatically get your numbers.</p>
            <Form.Input onChange={(e) => {this.handleChange(e); this.validateEmail(e)}} name='email' type='text' placeholder='Email...' />
            <Button onClick={() => {this.fetchBmrCaloriesFatsFromUser(); this.checkEmail()}} disabled={this.state.macrosBreakdownEmailButtonDisabled} id="button" style={{width: "100%"}} type="submit">
              Get My Macros <Icon name="right arrow" />
            </Button>
          </Form>
        </Card.Content>
      </Card>

      {this.state.calories ? <h3><Icon style={{color: "#7CFC00"}} name='check' /> Congrats, We found you numbers! Please make sure to select the number of meals you will be eating daily.</h3> : null }

      <Card id="macros-breakdown-form" style={{backgroundColor: "lightgray"}}>
        <Card.Content extra>
        <Form>
          <Form.Select onChange={this.getMealsPerDay} required={true} name='mealsPerDay' label='How many meals per day will you be eating?' options={mealsPerDay} placeholder='Meals per day...' />
          <Form.Input onChange={this.handleChange} required={true} value={this.state.calories} name='calories' type='number' label="Calories Result" placeholder='Calories...' />
          <Form.Input onChange={this.handleChange} required={true} value={this.state.proteins} name='proteins' type='number' label='Protein Result' placeholder='Proteins...' />
          <Form.Input onChange={this.handleChange} required={true} value={this.state.carbs} name='carbs' type='number' label='Carbs Result' placeholder='Carbs...' />
          <Form.Input onChange={this.handleChange} required={true} value={this.state.fats} name='fats' type='number' label='Fats Result' placeholder='Fats...' />
          {this.state.errorMessage ? <p style={{color: "red"}}>{this.state.errorMessage}</p> : null}
          <Button onClick={this.calculateMacrosBreakdown} disabled={this.state.macrosBreakdownbuttonDisabled} id="button" style={{width: "100%"}} type="submit">
            Calculate Macros Breakdown <Icon name="right arrow" />
          </Button>
        </Form>
        </Card.Content>
      </Card>
      </div>
      {this.state.showMacrosBreakdownResults === true ? <MacrosBreakdownResults mealsPerDay={this.state.mealsPerDay} caloriesInMeal={this.state.caloriesInMeal} proteinInMeal={this.state.proteinInMeal} carbsInMeal={this.state.carbsInMeal} fatsInMeal={this.state.fatsInMeal}/> : null }
      </React.Fragment>
    )
  }
}

export default MacrosBreakdownForm
