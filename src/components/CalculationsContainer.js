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
      email: "",
      modalOpen: false,
      emailValid: ""
    }
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

  getEmail = (e) => {
    console.log(e.target.value)
    this.setState({
      email: e.target.value
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
    activityLevel: "",
    goal: "",
    bmr: "",
    caloriesForGoal: "",
    caloriesToMaintain: "",
    feet: "",
    inches: "",
    bodyType: "",
    resetForm: !this.state.resetForm,
    modalOpen: false
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
  }, () => this.showMacrosChart(), this.updateUser(bodyType, protein, carbs, fats))
}

saveUser = () => {
  // debugger
  fetch("http://localhost:3001/users", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
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
      console.log(json)
      this.setState({
        user: json
      }, this.saveStats(json))
    })
}

updateUser = (bodyType, protein, carbs, fats) => {
  console.log(bodyType)
  let userId = this.state.user["id"]
  fetch(`http://localhost:3001/users/${userId}`, {
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
    }, () => this.updateStats(bodyType, protein, carbs, fats))
}

saveStats = (user) => {
  let today = new Date()
  let formatedDate = ((today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear())
  fetch("http://localhost:3001/stats", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      user_id: user.id,
      date: formatedDate,
      calories_to_maintain: this.state.caloriesToMaintain,
      calories_for_goal: this.state.caloriesForGoal,
      bmr: this.state.bmr
      })
    }).then(response => response.json())
    .then(json => {
      console.log(json)
      this.setState({
        stats: json
      })
    })
}

updateStats = (bodyType, protein, carbs, fats) => {
  let today = new Date()
  let formatedDate = ((today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear())
  let userId = this.state.user["id"]
  let statsId = this.state.stats["id"]
  fetch(`http://localhost:3001/stats/${statsId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json'
      },
      body: JSON.stringify({
          user_id: userId,
          calories_to_maintain: this.state.caloriesToMaintain,
          calories_for_goal: this.state.caloriesForGoal,
          bmr: this.state.bmr,
          protein_grams: protein,
          carb_grams: carbs,
          fat_grams: fats,
          date: formatedDate
      })
    }).then(response =>response.json())
    .then(response => {
      console.log(response)
    })
}

validateEmail = (email) => {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  this.setState({
    emailValid: re.test(email)
  })
}

saveEmailToUser = () => {
  let userId = this.state.user["id"]
  fetch(`http://localhost:3001/users/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        email: this.state.email
      })
    }).then(response =>response.json())
    .then(response => {
      console.log(response)
    })
}


  render(){
    return(
      <React.Fragment>
        <NutritionPackageDetails />
        <ProgressExampleProgressRatio stepNumber={this.props.stepNumber}/>
        {this.props.stepNumber === 1 ? <UserInfoForm enableButton={this.enableButton} buttonDisabled={this.state.buttonDisabled} saveUser={this.saveUser} resetForm={this.resetForm} addOneToStep={this.props.addOneToStep} hideForm={this.hideForm} resetFormInput={this.resetFormInput} resetForm={this.resetForm} handleChange={this.handleChange} getFeet={this.getFeet} getInches={this.getInches} getGoal={this.getGoal} getGender={this.getGender} getActivityLevel={this.getActivityLevel} calculateBmr={this.calculateBmr} calculateCalories={this.calculateCalories}/> : null }
        {this.props.stepNumber === 3 ? <BmrCalorieResults height={this.state.height} bmr={this.state.bmr} caloriesForGoal={this.state.caloriesForGoal} caloriesToMaintain={this.state.caloriesToMaintain} /> : null }
        {this.props.stepNumber === 2 ? <PersonalizedMacros updateUser={this.updateUser} addOneToStep={this.props.addOneToStep} calculateMacros={this.calculateMacros} /> : null }
        { this.state.macrosChart === true && this.state.protein != "" ? <MacrosPieChart modalOpen={this.state.modalOpen} handleOpen={this.handleOpen} handleClose={this.handleClose} saveEmailToUser={this.saveEmailToUser} getEmail={this.getEmail} protein={this.state.protein} carbs={this.state.carbs} fats={this.state.fats}/> : null}
      </React.Fragment>
    )
  }
}

export default CalculationsContainer
