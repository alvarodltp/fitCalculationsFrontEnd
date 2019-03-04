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
import MacrosBreakdownCard from './MacrosBreakdownCard'
import DietType from './DietType'
import Motivation from './Motivation'
import Confetti from 'react-dom-confetti';
import swal from 'sweetalert'
import LandingPage from './LandingPage'
import Stepper from 'react-stepper-horizontal';


class CalculationsContainer extends React.Component {
  constructor(){
    super()
    this.state={
      name: "",
      email: "",
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
      completed: false,
      numberOfMeals: "",
      proteinBreakdown: "",
      caloriesBreakdown: "",
      carbsBreakdown: "",
      fatsBreakdown: "",
      dietType: "",
      motivationToGetFit: "",
      loading: true,
      loadingResults: false,
      caloriesInfo: false,
      macrosInfo: false,
      dietInfo: false,
      confetti: false,
      checked: false,
      emailValid: ""
    }
  }

  activateConfetti = () => {
    this.setState({
      confetti: true
    })
  }

  displayCaloriesInfo = () => {
    this.setState({
      caloriesInfo: !this.state.caloriesInfo
    })
  }

  displayMacrosInfo = () => {
    this.setState({
      macrosInfo: !this.state.macrosInfo
    })
  }

  displayDietInfo = () => {
    this.setState({
      dietInfo: !this.state.dietInfo
    })
  }

  showBcmForm = () => {
    this.setState({
      showBcmForm: !this.state.showBcmForm
    })
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  enableButton = (e) => {
    if(this.state.gender != "" && this.state.age != "" && this.state.weightLb != "" && this.state.feet != "" && this.state.inches != "" && this.state.activityLevel != null && this.state.goal != ""){
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

  getEmail = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  getName = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  getGender = (e) => {
    this.setState({
      gender: e.target.parentElement.innerText
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

  getDietType = (e) => {
    let dietType = e.target.parentElement.getElementsByClassName("header")[0].innerText
    console.log(dietType)
    this.setState({
      dietType: dietType
    })
  }

  getMotivationToGetFit = (e) => {
    let motivationToGetFit = e.target.parentElement.getElementsByClassName("header")[0].innerText
    this.setState({
      motivationToGetFit: motivationToGetFit
    }, () => this.addDietTypeAndMotivationToUser())
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
  }, () => this.showMacrosChart(), this.updateUser(bodyType, protein, carbs, fats, proteinPercentage, carbPercentage, fatPercentage))
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

updateUser = (bodyType, protein, carbs, fats, proteinPercentage, carbPercentage, fatPercentage) => {
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
    }, this.updateStats(bodyType, protein, carbs, fats, proteinPercentage, carbPercentage, fatPercentage))
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
        stats: json,
        loading: false
      })
    })
}

updateStats = (bodyType, protein, carbs, fats, proteinPercentage, carbPercentage, fatPercentage) => {
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
          fat_grams: fats,
          protein_percentage: proteinPercentage,
          carb_percentage: carbPercentage,
          fat_percentage: fatPercentage
      })
    }).then(response => response.json())
    .then(response => {
    })
}

getNumber = (e) => {
  this.setState({
    numberOfMeals: e.target.innerText[0]
  })
}

calculateBreakdown = () => {
  if(this.state.numberOfMeals != "") {
    this.setState({
      caloriesBreakdown: Math.round(this.state.caloriesForGoal/this.state.numberOfMeals),
      proteinBreakdown: Math.round(this.state.protein/this.state.numberOfMeals),
      carbsBreakdown: Math.round(this.state.carbs/this.state.numberOfMeals),
      fatsBreakdown: Math.round(this.state.fats/this.state.numberOfMeals)
    })
  } else {

  }
}

addDietTypeAndMotivationToUser = () => {
  let userId = this.state.user["id"]
  fetch(`https://fitcalculations-api.herokuapp.com/users/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        user: {
          diet_type: this.state.dietType,
          reason_to_get_fit: this.state.motivationToGetFit
        }
      })
    }).then(response =>response.json())
    .then(response => {
      console.log(response)
    })
}

saveEmailToUser = () => {
  let userId = this.state.user["id"]
  if(this.state.emailValid === true && this.state.checked === true) {
  fetch(`https://fitcalculations-api.herokuapp.com/users/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name.replace(/^\w/, c => c.toUpperCase()),
        email: this.state.email.toLowerCase()
      })
    }).then(response => response.json())
    .then(this.props.addOneToStep())
      swal("Success!", "Your results have been sent!", "success")
      this.setState({
        loadingResults: false
      })
  } else {
  }
}

checkCheckbox = (e) => {
  this.setState({
    checked: !this.state.checked
  })
}

validateEmail = (e) => {
  let email = e.target.value
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  this.setState({
    emailValid: re.test(email),
    submitButtonDisabled: !re.test(email)
  })
}

scrollToForm = () => {
 window.scrollTo(0, 2133)
}

getGenderOnButton = (e) => {
  let gender = e.target.value
  this.setState({
    gender: gender
  }, () => this.scrollToForm())
}

  render(){
    const config = {
      angle: 90,
      spread: 45,
      startVelocity: 45,
      elementCount: 50,
      dragFriction: 0.1,
      duration: 3000,
      delay: 0,
      width: "10px",
      height: "10px",
      colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
    };
    return(
      <React.Fragment>
        <Confetti id="confetti" active={this.state.confetti} config={config}/>
        {this.props.stepNumber === 0 ? <NutritionPackageDetails getGenderOnButton={this.getGenderOnButton} showBcmForm={this.showBcmForm}/> : null }
        {this.props.stepNumber === 0 || this.props.stepNumber === 1 || this.props.stepNumber === 2 || this.props.stepNumber === 3 || this.props.stepNumber === 4 ? <Stepper completeColor={"#2761f1"} activeColor={"#e80aaa"} steps={ [{title: 'Info'}, {title: 'Body'}, {title: 'Diet'}, {title: 'Motivation'}, {title: 'Results'}] } activeStep={ this.props.stepNumber } /> : null }
        {this.props.stepNumber === 0 && this.state.showBcmForm === true ? <UserInfoForm gender={this.state.gender} getGenderOnButton={this.getGenderOnButton} scrollToTop={this.props.scrollToTop} enableButton={this.enableButton} buttonDisabled={this.state.buttonDisabled} saveUser={this.saveUser} resetForm={this.resetForm} addOneToStep={this.props.addOneToStep} hideForm={this.hideForm} resetFormInput={this.resetFormInput} resetForm={this.resetForm} handleChange={this.handleChange} getFeet={this.getFeet} getInches={this.getInches} getGoal={this.getGoal} getGender={this.getGender} getActivityLevel={this.getActivityLevel} calculateBmr={this.calculateBmr} calculateCalories={this.calculateCalories} /> : null }
        {this.props.stepNumber === 2 ? <DietType getDietType={this.getDietType} addOneToStep={this.props.addOneToStep} scrollToTop={this.props.scrollToTop} stepNumber={this.props.stepNumber}/> : null}
        {this.props.stepNumber === 3 ? <Motivation getMotivationToGetFit={this.getMotivationToGetFit} addOneToStep={this.props.addOneToStep} scrollToTop={this.props.scrollToTop} stepNumber={this.props.stepNumber}/> : null}
        {this.props.stepNumber === 5 ? <BmrCalorieResults dietType={this.state.dietType} motivationToGetFit={this.state.motivationToGetFit} name={this.state.name} displayCalories={this.state.displayCalories} displayCaloriesInfo={this.displayCaloriesInfo} displayDiet={this.state.displayDiet} displayDietInfo={this.displayDietInfo} cardInfo={this.state.cardInfo} goal= {this.state.goal} height={this.state.height} bmr={this.state.bmr} caloriesForGoal={this.state.caloriesForGoal} caloriesToMaintain={this.state.caloriesToMaintain} /> : null }
        {this.props.stepNumber === 1 ? <PersonalizedMacros loading={this.state.loading} user={this.state.user} substractOneFromStep={this.props.substractOneFromStep} scrollToTop={this.props.scrollToTop} updateUser={this.updateUser} addOneToStep={this.props.addOneToStep} calculateMacros={this.calculateMacros} /> : null }
        {this.props.stepNumber === 5 && this.state.macrosChart === true && this.state.protein != "" ? <MacrosPieChart displayMacros={this.state.displayMacros} displayMacrosInfo={this.displayMacrosInfo} cardInfo={this.state.cardInfo} email={this.state.email} calories={this.state.caloriesForGoal} bmr={this.state.bmr} bodyType={this.state.bodyType} goal={this.state.goal} name={this.state.name} user={this.state.user} submitButtonDisabled={this.state.submitButtonDisabled} validateEmail={this.validateEmail} modalOpen={this.state.modalOpen} handleOpen={this.handleOpen} handleClose={this.handleClose}
        protein={this.state.protein} carbs={this.state.carbs} fats={this.state.fats}/> : null}
        {this.props.stepNumber === 10 ? <MacrosBreakdownCard cardInfo={this.state.cardInfo} displayCardInfo={this.displayCardInfo} getNumber={this.getNumber} calculateBreakdown={this.calculateBreakdown} caloriesBreakdown={this.state.caloriesBreakdown} proteinBreakdown={this.state.proteinBreakdown} carbsBreakdown={this.state.carbsBreakdown} fatsBreakdown={this.state.fatsBreakdown} /> : null }
        {this.props.stepNumber === 4 ? <SignUpForm getName={this.getName} getEmail={this.getEmail} validateEmail={this.validateEmail} checkCheckbox={this.checkCheckbox} saveEmailToUser={this.saveEmailToUser} activateConfetti={this.activateConfetti} addOneToStep={this.props.addOneToStep} scrollToTop={this.props.scrollToTop} /> : null}
        {this.props.stepNumber === 10 ? <MacrosBreakdownForm /> : null }
        {this.props.stepNumber === 5 ? <LandingPage goal={this.state.goal}/> : null }
      </React.Fragment>
    )
  }
}

export default CalculationsContainer

// {this.props.stepNumber === 0 || this.props.stepNumber === 1 || this.props.stepNumber === 2 || this.props.stepNumber === 3 || this.props.stepNumber === 4 ? <ProgressRatio stepNumber={this.props.stepNumber}/> : null }

// {this.props.stepNumber === 5 ?
// <div id="congratulations-bcm-header">
//   <h1>YOUR RESULTS</h1>
// </div> : null }
