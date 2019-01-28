import React from 'react'
import Steps from './Steps'
import UserInfoForm from './UserInfoForm'
import BmrCalorieResults from './BmrCalorieResults'
import PersonalizedMacros from './PersonalizedMacros'
import MacrosPieChart from './MacrosPieChart'
import { Button } from 'semantic-ui-react'
import ProgressRatio from './Progress'
import NutritionPackageDetails from './NutritionPackageDetails'
import NutritionPackageHeader from './NutritionPackageHeader'
import {Icon, Image, Card} from 'semantic-ui-react'
import MacrosBreakdownForm from './MacrosBreakdownForm'
import SignUpForm from './SignUpForm'

class CalculationsContainer extends React.Component {
  constructor(){
    super()
    this.state={
      gender: "",
      weightKg: "",
      weightLb: "",
      heightCm: "",
      age: "",
      activityLevel: null,
      goal: "",
      bmr: "",
      caloriesForGoal: "",
      caloriesToMaintain: "",
      feet: "",
      inches: "",
      protein: "",
      carbs: "",
      fats: "",
      macrosChart: false,
      resetForm: false,
      activityLevelText: "",
      bodyType: "",
      user: null,
      stats: null,
      buttonDisabled: true,
      modalOpen: false,
      showBcmForm: true,
      proteinPercentage: "",
      carbPercentage: "",
      fatPercentage: "",
      completed: false
    }
  }

  showBcmForm = () => {
    this.setState({
      showBcmForm: !this.state.showBcmForm
    })
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  enableButton = (e) => {
    if(this.state.gender != "" && this.state.age != "" && this.state.weightLb != "" && this.state.feet != "" && this.state.inches != "" && this.state.activityLevel != null){
      this.setState({
        buttonDisabled: false
      })
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
      activityLevel: {name: activityLevel, value: activityLevelValue},
      activityLevelText: `${activityLevel} - ${activityLevelValue}`
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
    }, () => this.calculateCalories(bmr))
  }

  calculateCalories = (bmr) => {
  console.log(`Bmr = ${bmr}`)
  let activityLevel = this.state.activityLevel
  let goal = this.state.goal
  let caloriesToMaintain;
  bmr != "" && activityLevel != null ? caloriesToMaintain = Math.round(bmr * activityLevel["value"]) : caloriesToMaintain = null
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

calculateMacros = (e) => {
  let protein;
  let fats;
  let carbs;
  let bodyType = e.target.parentElement.getElementsByClassName("header")[0].innerText
  let proteinPercentage;
  let carbPercentage;
  let fatPercentage;
  if(bodyType === "Ectomorph"){
    protein = Math.round(this.state.caloriesForGoal * .25 / 4)
    carbs = Math.round(this.state.caloriesForGoal * .55 / 4)
    fats = Math.round(this.state.caloriesForGoal * .20 / 9)
    proteinPercentage = 25
    carbPercentage = 55
    fatPercentage = 20
  } else if (bodyType === "Mesomorph"){
    protein = Math.round(this.state.caloriesForGoal * .30 / 4)
    carbs = Math.round(this.state.caloriesForGoal * .40 / 4)
    fats = Math.round(this.state.caloriesForGoal * .30 / 9)
    proteinPercentage = 30
    carbPercentage = 40
    fatPercentage = 30
  } else if (bodyType === "Endomorph"){
    protein = Math.round(this.state.caloriesForGoal * .35 / 4)
    carbs = Math.round(this.state.caloriesForGoal * .25 / 4)
    fats = Math.round(this.state.caloriesForGoal * .40 / 9)
    proteinPercentage = 35
    carbPercentage = 25
    fatPercentage = 40
  }
  this.setState({
    bodyType: bodyType,
    protein: protein,
    fats: fats,
    carbs: carbs,
    proteinPercentage: proteinPercentage,
    carbPercentage: carbPercentage,
    fatPercentage: fatPercentage,
    completed: true
  }, () => this.showMacrosChart(), this.updateUser(bodyType, protein, carbs, fats))
}

saveUser = () => {
  fetch("https://fitcalculations-api.herokuapp.com/users", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      name: "",
      email: "",
      gender: this.state.gender,
      age: this.state.age,
      activity_level: this.state.activityLevelText,
      goal: this.state.goal,
      body_type: "",
      weight_in_kg: "",
      weight_in_lb: this.state.weightLb,
      height_in_cm: "",
      height_in_feet: this.state.feet,
      height_in_inches: this.state.inches,
      })
    }).then(response => response.json())
    .then(json => {
      this.setState({
        user: json
      }, this.saveStats(json))
    })
}

updateUser = (bodyType, protein, carbs, fats) => {
  let userId = this.state.user["id"]
  fetch(`https://fitcalculations-api.herokuapp.com/users/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        user: {
          gender: this.state.gender,
          age: this.state.age,
          activity_level: this.state.activityLevelText,
          goal: this.state.goal,
          body_type: bodyType,
          weight_in_lb: this.state.weightLb,
          height_in_feet: this.state.feet,
          height_in_inches: this.state.inches
        }
      })
    }).then(response =>response.json())
    .then(response => {
    }, this.updateStats(bodyType, protein, carbs, fats))
}

saveStats = (user) => {
  let today = new Date()
  // let formatedDate = ((today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear())
  fetch("https://fitcalculations-api.herokuapp.com/stats", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      user_id: user.id,
      date: new Date(),
      calories_to_maintain: this.state.caloriesToMaintain,
      calories_for_goal: this.state.caloriesForGoal,
      bmr: this.state.bmr
      })
    }).then(response => response.json())
    .then(json => {
      this.setState({
        stats: json
      })
    })
}

updateStats = (bodyType, protein, carbs, fats) => {
  let statsId = this.state.stats["id"]
  fetch(`https://fitcalculations-api.herokuapp.com/stats/${statsId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json'
      },
      body: JSON.stringify({
          protein_grams: protein,
          carb_grams: carbs,
          fat_grams: fats
      })
    }).then(response => response.json())
    .then(response => {
    })
}

  render(){
    return(
      <React.Fragment>
        {this.props.stepNumber === 1 ? <NutritionPackageDetails showBcmForm={this.showBcmForm}/> : null }
          {this.props.stepNumber === 1 || this.props.stepNumber === 2 ? <ProgressRatio stepNumber={this.props.stepNumber}/> : null }
          {this.props.stepNumber === 1 && this.state.showBcmForm === true ? <UserInfoForm scrollToTop={this.props.scrollToTop} enableButton={this.enableButton} buttonDisabled={this.state.buttonDisabled} saveUser={this.saveUser} resetForm={this.resetForm} addOneToStep={this.props.addOneToStep} hideForm={this.hideForm} resetFormInput={this.resetFormInput} resetForm={this.resetForm} handleChange={this.handleChange} getFeet={this.getFeet} getInches={this.getInches} getGoal={this.getGoal} getGender={this.getGender} getActivityLevel={this.getActivityLevel} calculateBmr={this.calculateBmr} calculateCalories={this.calculateCalories}/> : null }
            {this.props.stepNumber === 3 ?
            <div id="congratulations-bcm-header">
              <h1>YOUR RESULTS</h1>
            </div> : null }
          {this.props.stepNumber === 3 ?
            <div id="congratulations-message">
              <h2 id="title-bcm">CONGRATULATIONS, HERE ARE YOUR RESULTS! <Icon style={{color: "#7CFC00"}} name='check' /></h2>
              <p>Your personalized information and ebook are ready for you. Make sure to enter your name and email in the form below so we can send you a free ebook with a detailed report.</p>
            </div> : null }
          {this.props.stepNumber === 3 ? <BmrCalorieResults goal= {this.state.goal} height={this.state.height} bmr={this.state.bmr} caloriesForGoal={this.state.caloriesForGoal} caloriesToMaintain={this.state.caloriesToMaintain} /> : null }
          {this.props.stepNumber === 2 ?
            <div>
              <h2 id="title-body-type"><Icon onClick={this.displayBmrInfo} name="angle right" size="mini"/>YOUR BODY TYPE</h2>
              <div id="body-type-points">
                  <h4><Icon style={{color: "#5400FC"}} name='hand point right outline' size="medium" />Knowing your body type will personalize your results further.</h4>
                  <h4><Icon style={{color: "#5400FC"}} name='hand point right outline' size="medium" />It will help us understand the type of exercises and nutrition you’ll need.</h4>
                  <h4><Icon style={{color: "#5400FC", marginBottom: "20px"}} name='hand point right outline' size="medium" />If you think you are in between 2 body types, select the broader one.</h4>
              </div>
            </div>
             : null }
          {this.props.stepNumber === 2 ? <PersonalizedMacros scrollToTop={this.props.scrollToTop} updateUser={this.updateUser} addOneToStep={this.props.addOneToStep} calculateMacros={this.calculateMacros} /> : null }
          { this.state.macrosChart === true && this.state.protein != "" ? <MacrosPieChart email={this.state.email} calories={this.state.caloriesForGoal} bmr={this.state.bmr} bodyType={this.state.bodyType} goal={this.state.goal} name={this.state.name} user={this.state.user} submitButtonDisabled={this.state.submitButtonDisabled} validateEmail={this.validateEmail} modalOpen={this.state.modalOpen} handleOpen={this.handleOpen} handleClose={this.handleClose}
           saveEmailToUser={this.saveEmailToUser} protein={this.state.protein} carbs={this.state.carbs} fats={this.state.fats}/> : null}
           {this.props.stepNumber === 3 ? <SignUpForm user={this.state.user} calories={this.state.caloriesForGoal} bodyType={this.state.bodyType} goal={this.state.goal} bmr={this.state.bmr} protein={this.state.protein} carbs={this.state.carbs} fats={this.state.fats}/> : null}
           { this.props.stepNumber === 10 ? <MacrosBreakdownForm /> : null }

      </React.Fragment>
    )
  }
}

export default CalculationsContainer
