import React from 'react'
import Steps from './Steps'
import UserInfoForm from './UserInfoForm'
import BmrCalorieResults from './BmrCalorieResults'
import PersonalizedMacros from './PersonalizedMacros'
import MacrosPieChart from './MacrosPieChart'
import { Button } from 'semantic-ui-react'
import ProgressExampleProgressRatio from './Progress'
import NutritionPackageDetails from './NutritionPackageDetails'

class CalculationsContainer extends React.Component {
  constructor(){
    super()
    this.state={
      gender: "",
      weightKg: "",
      weightLb: "",
      heightCm: "",
      heightFeet: "",
      age: "",
      activityLevel: "",
      goal: "",
      bmr: "",
      caloriesForGoal: "",
      caloriesToMaintain: "",
      feet: "",
      inches: "",
      protein: "",
      carbs: "",
      fats: "",
      macrosChart: false
    }
  }

  showMacrosChart = () => {
    this.setState({
      macrosChart: true
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  getGender = (e) => {
    this.setState({
      gender: e.target.innerText
    })
  }

  getGoal = (e) => {
    this.setState({
    goal: e.target.innerText
    })
  }

  getFeet = (e) => {
    this.setState({
      feet: e.target.innerText
    })
  }

  getInches = (e) => {
    this.setState({
      inches: e.target.innerText
    })
  }

  getActivityLevel = (e) => {
    let activityLevel = e.target.innerText
    let activityLevelValue;
    if(activityLevel === "Sedentary (little or no exercise)") {
      activityLevelValue = 1.2
    } else if (activityLevel === "Lightly active (light exercise/sports 1-3 days/week)") {
      activityLevelValue = 1.375
    } else if (activityLevel === "Moderately active (moderate exercise/sports 3-5 days/week)") {
      activityLevelValue = 1.55
    } else if (activityLevel === "Very active (hard exercise/sports 6-7 days a week)") {
      activityLevelValue = 1.725
    } else {
      activityLevelValue = 1.9
    }
    this.setState({
      activityLevel: {name: activityLevel, value: activityLevelValue}
    })
  }

  calculateBmr = (formType) => {
    let weight;
    let height;
    formType === "metric" ? weight = this.state.weightKg : weight = this.state.weightLb
    formType === "metric" ? height = this.state.heightCm : height = (`${this.state.feet}.${this.state.inches}` * 12).toFixed(2)
    let age = this.state.age
    let bmr;
    if(this.state.gender === "Male" && formType === "metric") {
      bmr = Math.round(66.5 + 13.75 * weight + 5.003 * height - 6.755 * age)
    } else if (this.state.gender === "Male" && formType === "imperial") {
      bmr = Math.round(66 + 6.23 * weight + 12.7 * height - 6.8 * age)
    } else if (this.state.gender === "Female" && formType === "metric") {
      bmr = Math.round(655.1 + 9.563 * weight + 1.850 * height - 4.676 * age)
    } else if (this.state.gender === "Female" && formType === "imperial") {
      bmr = Math.round(655 + 4.35 * weight + 4.7 * height - 4.7 * age)
    }
    this.setState({
      bmr: bmr
    }, () => this.calculateCalories())
  }

  calculateCalories = () => {
  let activityLevel = this.state.activityLevel
  let currentBmr = this.state.bmr
  let goal = this.state.goal
  let caloriesToMaintain;
  currentBmr != "" && activityLevel != null ? caloriesToMaintain = Math.round(currentBmr * activityLevel["value"]) : caloriesToMaintain = null
  let caloriesForGoal;
  if(goal === "Lose Weight") {
    caloriesForGoal = caloriesToMaintain - 300
  } else if (goal === "Gain Muscle"){
    caloriesForGoal = caloriesToMaintain + 300
  } else {
    caloriesForGoal = caloriesToMaintain
  }
  this.setState({
    caloriesToMaintain: caloriesToMaintain,
    caloriesForGoal: caloriesForGoal,
  })
}

resetForm = () => {
  this.setState({
    name: "",
    gender: "",
    weightKg: "",
    weightLb: "",
    heightCm: "",
    heightFeet: "",
    age: "",
    activityLevel: null,
    goal: "",
    bmr: "",
    caloriesForGoal: "",
    caloriesToMaintain: "",
    feet: "",
    inches: "",
    bodyType: ""
  })
}

calculateMacros = (e) => {
  let protein;
  let fats;
  let carbs;
  let bodyType = e.target.parentElement.getElementsByClassName("header")[0].innerText
  if(bodyType === "Ectomorph"){
    protein = Math.round(this.state.caloriesForGoal * .25 / 4)
    carbs = Math.round(this.state.caloriesForGoal * .55 / 4)
    fats = Math.round(this.state.caloriesForGoal * .20 / 9)
  } else if (bodyType === "Mesomorph"){
    protein = Math.round(this.state.caloriesForGoal * .30 / 4)
    carbs = Math.round(this.state.caloriesForGoal * .40 / 4)
    fats = Math.round(this.state.caloriesForGoal * .30 / 9)
  } else if (bodyType === "Endomorph"){
    protein = Math.round(this.state.caloriesForGoal * .35 / 4)
    carbs = Math.round(this.state.caloriesForGoal * .25 / 4)
    fats = Math.round(this.state.caloriesForGoal * .40 / 9)
  }
  this.setState({
    bodyType: bodyType,
    protein: protein,
    fats: fats,
    carbs: carbs
  }, () => this.showMacrosChart())
}

  render(){
    return(
      <React.Fragment>
        <NutritionPackageDetails />
        <ProgressExampleProgressRatio stepNumber={this.props.stepNumber}/>
        {this.props.stepNumber === 1 ? <UserInfoForm addOneToStep={this.props.addOneToStep} hideForm={this.hideForm} resetFormInput={this.resetFormInput} resetForm={this.resetForm} handleChange={this.handleChange} getFeet={this.getFeet} getInches={this.getInches} getGoal={this.getGoal} getGender={this.getGender} getActivityLevel={this.getActivityLevel} calculateBmr={this.calculateBmr} calculateCalories={this.calculateCalories}/> : null }
        {this.props.stepNumber === 3 ? <BmrCalorieResults height={this.state.height} bmr={this.state.bmr} caloriesForGoal={this.state.caloriesForGoal} caloriesToMaintain={this.state.caloriesToMaintain} /> : null }
        {this.props.stepNumber === 2 ? <PersonalizedMacros addOneToStep={this.props.addOneToStep} calculateMacros={this.calculateMacros} /> : null }
        { this.state.macrosChart === true && this.state.protein != "" ? <MacrosPieChart protein={this.state.protein} carbs={this.state.carbs} fats={this.state.fats}/> : null}
      </React.Fragment>
    )
  }
}

export default CalculationsContainer
