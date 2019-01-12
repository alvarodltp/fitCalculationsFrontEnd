import React from 'react'
import {Image, Icon, Card, Form, Radio, Button} from 'semantic-ui-react'

class MacrosBreakdownForm extends React.Component {
  constructor(){
    super()
    this.state={
      macrosBreakdownbuttonDisabled: true,
      mealsPerDay: "",
      macrosBreakdownEmailButtonDisabled: true,
      emailValid: false,
      email: "",
      userStats: null,
      calories: "",
      proteins: "",
      carbs: "",
      fats: ""
    }
  }

  enableCalculateMacrosBreakdownButton = (e) => {
    if(this.state.mealsPerDay != "" && this.state.calories != "" && this.state.carbs != "" && this.state.fats != "" && this.state.proteins != ""){
      this.setState({
        macrosBreakdownbuttonDisabled: false
      })
    }
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

  render(){
    const mealsPerDay = [{key: '1', text: '1', value: '1'}, {key: '2', text: '2', value: '2'}, {key: '3', text: '3', value: '3'}, {key: '4', text: '4', value: '4'}, {key: '5', text: '5', value: '5'}, {key: '6', text: '6', value: '6'}]
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

      {this.state.calories === "" ?
      <div>
      <Card id="macros-breakdown-form">
        <Card.Content>
          <Form>
            <Form.Input onChange={(e) => {this.handleChange(e); this.validateEmail(e)}} name='email' type='text' label="If you already calculated your BMR, Calories, and Macros enter your email address to automatically get your results." placeholder='Email...' />
            <Button onClick={this.fetchBmrCaloriesFatsFromUser} disabled={this.state.macrosBreakdownEmailButtonDisabled} id="button" style={{width: "100%"}} type="submit">
              Get My Macros <Icon name="right arrow" />
            </Button>
          </Form>
        </Card.Content>
      </Card>
      <Card id="macros-breakdown-form" style={{backgroundColor: "lightgray"}}>
        <Card.Content extra>
        <Form>
          <Form.Select onChange={(e) => {this.enableCalculateMacrosBreakdownButton(e); this.getMealsPerDay(e)}} name='mealsPerDay' label='How many meals per day will you be eating?' options={mealsPerDay} placeholder='Meals per day...' />
          <Form.Input onChange={(e) => {this.enableCalculateMacrosBreakdownButton(e); this.handleChange(e)}} name='calories' type='number' label="Calories Result" placeholder='Calories...' />
          <Form.Input onChange={(e) => {this.enableCalculateMacrosBreakdownButton(e); this.handleChange(e)}} name='proteins' type='number' label='Protein Result' placeholder='Proteins...' />
          <Form.Input onChange={(e) => {this.enableCalculateMacrosBreakdownButton(e); this.handleChange(e)}} name='carbs' type='number' label='Carbs Result' placeholder='Carbs...' />
          <Form.Input onChange={(e) => {this.enableCalculateMacrosBreakdownButton(e); this.handleChange(e)}} name='fats' type='number' label='Fats Result' placeholder='Fats...' />
          <Button disabled={this.state.macrosBreakdownbuttonDisabled} id="button" style={{width: "100%"}} type="submit">
            Calculate Macros Breakdown <Icon name="right arrow" />
          </Button>
        </Form>
        </Card.Content>
      </Card>
      </div>
      :
      <div>
      <Card id="macros-breakdown-form">
        <Card.Content>
          <Form>
            <Form.Input onChange={(e) => {this.handleChange(e); this.validateEmail(e)}} name='email' type='text' label="If you already calculated your BMR, Calories, and Macros enter your email address to automatically get your results." placeholder='Email...' />
            <Button onClick={this.fetchBmrCaloriesFatsFromUser} disabled={this.state.macrosBreakdownEmailButtonDisabled} id="button" style={{width: "100%"}} type="submit">
              Get My Macros <Icon name="right arrow" />
            </Button>
          </Form>
        </Card.Content>
      </Card>
      <Card id="macros-breakdown-form" style={{backgroundColor: "lightgray"}}>
        <Card.Content extra>
        <Form>
          <Form.Select onChange={(e) => {this.enableCalculateMacrosBreakdownButton(e); this.getMealsPerDay(e)}} name='mealsPerDay' label='How many meals per day will you be eating?' options={mealsPerDay} placeholder='Meals per day...' />
          <Form.Input onChange={(e) => {this.enableCalculateMacrosBreakdownButton(e); this.handleChange(e)}} value={this.state.calories} name='calories' type='number' label="Calories Result" placeholder='Calories...' />
          <Form.Input onChange={(e) => {this.enableCalculateMacrosBreakdownButton(e); this.handleChange(e)}} value={this.state.proteins} name='proteins' type='number' label='Protein Result' placeholder='Proteins...' />
          <Form.Input onChange={(e) => {this.enableCalculateMacrosBreakdownButton(e); this.handleChange(e)}} value={this.state.carbs} name='carbs' type='number' label='Carbs Result' placeholder='Carbs...' />
          <Form.Input onChange={(e) => {this.enableCalculateMacrosBreakdownButton(e); this.handleChange(e)}} value={this.state.fats} name='fats' type='number' label='Fats Result' placeholder='Fats...' />
          <Button disabled={this.state.macrosBreakdownbuttonDisabled} id="button" style={{width: "100%"}} type="submit">
            Calculate Macros Breakdown <Icon name="right arrow" />
          </Button>
        </Form>
        </Card.Content>
      </Card>
      </div> }
      </React.Fragment>
    )
  }
}

export default MacrosBreakdownForm
