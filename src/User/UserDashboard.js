import React from 'react'
import './UserDashboard.css'
import DashboardMenu from './DashboardMenu'
import DashboardContent from './DashboardContent'
import { ToastContainer, toast } from 'react-toastify';
import { MenuItem } from 'semantic-ui-react';


class UserDashboard extends React.Component {
  constructor(){
    super()
    this.state={
      page: "Profile",
      formType: 'Imperial',
      maxHeartRate: "",
      safeCalories: "",
      caloriesToMaintain: "",
      caloriesForGoal: "",
      protein: "",
      fats: "",
      carbs: "",
      proteinPercentage: "",
      carbPercentage: "",
      fatsercentage: "",
      completed: "",
      caloriesBreakdown: "",
      proteinBreakdown: "",
      carbsBreakdown: "",
      fatsBreakdown: "",
      approxPoundsToLoseSafely: "",
      maxHeartRate: "",
      programSelected: "",
      activeMenu: "Profile",
      menuStyle: null
    }
  }

  handleMenuClick = (e, menuName) => {
    console.log(menuName)
    this.setState({
      page: e.target.parentElement.innerText,
      activeMenu: menuName,
      menuStyle: {background: "#F1B727", color: "white"}
    })
  }

  calculateBmr = () => {
    let formType = this.state.formType
    let weight;
    let height;
    let weightInKg = (this.props.currentUserStatsNewCalc.weight_in_lb/2.2046).toFixed(2)
    let heightInFeet = this.props.currentUserStatsNewCalc.height_in_feet * 30.48
    let heightInInches = this.props.currentUserStatsNewCalc.height_in_inches * 2.54
    let heightInCm = heightInFeet + heightInInches
    let heightInm2 = heightInCm / 100
    let heightInm2FromState = this.state.heightCm / 100
    let bmi;
    formType === "Imperial" ? bmi = (weightInKg/(heightInm2 * heightInm2)).toFixed(2) : bmi = (this.state.weight_in_kg/(heightInm2FromState * heightInm2FromState)).toFixed(2)
    formType === "Metric" ? weight = this.state.weight_in_kg : weight = this.state.weight_in_lb
    formType === "Metric" ? height = this.state.heightCm : height = heightInCm/2.54
    let age = this.props.currentUserStatsNewCalc.age
    let bmr;
    if(this.props.currentUserStatsNewCalc.user.gender === "Male" && formType === 'Imperial') {
      // bmr = Math.round(66.5 + 13.75 * weight + 5.003 * height - 6.755 * age) #harris
      bmr = Math.round(10 * weightInKg + 6.25 * heightInCm - 5 * age + 5)
    } else if (this.props.currentUserStatsNewCalc.user.gender === "Female" && formType === 'Imperial') {
      // bmr = Math.round(655.1 + 9.563 * weight + 1.850 * height - 4.676 * age) #harris
      bmr = Math.round(10 * weightInKg + 6.25 * heightInCm - 5 * age - 161)
    } else if (this.props.currentUserStatsNewCalc.user.gender === "Male" && formType === 'Metric') {
      bmr = Math.round(10 * this.state.weight_in_kg + 6.25 * this.state.heightCm - 5 * age + 5)
    } else if (this.props.currentUserStatsNewCalc.user.gender === "Female" && formType === 'Metric'){
      bmr = Math.round(10 * this.state.weight_in_kg + 6.25 * this.state.heightCm - 5 * age - 161)
    }
    this.setState({
      bmr: bmr,
      bmi: bmi
    }, () => this.calculateCalories(bmr), this.calculateMaxHeartRate())
  }

  calculateCalories = (bmr) => {
    let activityLevel = this.props.currentUserStatsNewCalc.activity_level
    let activityLevelValue;
    if(activityLevel.split(' ')[0] === "Sedentary"){ activityLevelValue = 1.2 }
    if(activityLevel.split(' ')[0] === "Lightly"){ activityLevelValue = 1.375 }
    if(activityLevel.split(' ')[0] === "Moderately"){ activityLevelValue = 1.55 }
    if(activityLevel.split(' ')[0] === "Very"){ activityLevelValue = 1.725 }
    if(activityLevel.split(' ')[0] === "Extra") { activityLevelValue = 1.9 }
    let goal = this.props.currentUserStatsNewCalc.goal
    let weightToManage = this.props.currentUserStatsNewCalc.weight_to_manage.split(' ')[0]
    let caloriesToMaintain;
    bmr !== "" && activityLevel !== null ? caloriesToMaintain = Math.round(bmr * activityLevelValue) : caloriesToMaintain = null
    let caloriesForGoal;
    if(goal === "lose" && weightToManage === "Slow"){
      caloriesForGoal = caloriesToMaintain - 250
    } else if (goal === "lose" && weightToManage === "Steady"){
      caloriesForGoal = caloriesToMaintain - 500
    } else if (goal === "lose" && weightToManage === "Accelerated"){
      caloriesForGoal = caloriesToMaintain - 1000
    } else if (goal === "gain" && weightToManage === "Slow"){
      caloriesForGoal = caloriesToMaintain + 250
    } else if (goal === "gain" && weightToManage === "Steady"){
      caloriesForGoal = caloriesToMaintain + 500
    } else if (goal === "gain" && weightToManage === "Accelerated"){
      caloriesForGoal = caloriesToMaintain + 1000
    } else {
      caloriesForGoal = caloriesToMaintain
    }
    if(this.props.currentUserStatsNewCalc.user.gender === "Male" && caloriesForGoal < 1500) {
      this.setState({
        safeCalories: false,
        caloriesToMaintain: caloriesToMaintain,
        caloriesForGoal: 1500
      }, () => this.getSafePoundsPerWeek(caloriesToMaintain))
    } else if (this.props.currentUserStatsNewCalc.user.gender === "Female" && caloriesForGoal < 1200) {
    this.setState({
      safeCalories: false,
      caloriesToMaintain: caloriesToMaintain,
      caloriesForGoal: 1200
    }, () => this.getSafePoundsPerWeek(caloriesToMaintain))
    } else {
    this.setState({
      caloriesToMaintain: caloriesToMaintain,
      caloriesForGoal: caloriesForGoal
    }, () => this.calculateMacros())
  }
}

calculateMacros = (e) => {
  let protein;
  let fats;
  let carbs;
  let bodyType = this.props.currentUserStatsNewCalc.body_type
  let proteinPercentage;
  let carbPercentage;
  let fatPercentage;
  if(bodyType === "Ectomorph"){
    protein = Math.round(this.state.caloriesForGoal * .25 / 4)
    carbs = Math.round(this.state.caloriesForGoal * .55 / 4)
    fats = Math.round(this.state.caloriesForGoal * .20 / 9)
    console.log(protein)
    proteinPercentage = 25
    carbPercentage = 55
    fatPercentage = 20
  } else if (bodyType === "Mesomorph"){
    protein = Math.round(this.state.caloriesForGoal * .30 / 4)
    carbs = Math.round(this.state.caloriesForGoal * .40 / 4)
    fats = Math.round(this.state.caloriesForGoal * .30 / 9)
    console.log(protein)
    proteinPercentage = 30
    carbPercentage = 40
    fatPercentage = 30
  } else if (bodyType === "Endomorph"){
    protein = Math.round(this.state.caloriesForGoal * .35 / 4)
    carbs = Math.round(this.state.caloriesForGoal * .25 / 4)
    fats = Math.round(this.state.caloriesForGoal * .40 / 9)
    // console.log(protein)
    proteinPercentage = 35
    carbPercentage = 25
    fatPercentage = 40
  }
  this.setState({
    protein: protein,
    fats: fats,
    carbs: carbs,
    proteinPercentage: proteinPercentage,
    carbPercentage: carbPercentage,
    fatPercentage: fatPercentage,
    completed: true
  }, () => this.getSafePoundsPerWeek())
}


getSafePoundsPerWeek = (caloriesToMaintain) => {
  let approxPoundsToLoseSafely;
  if(this.props.currentUserStatsNewCalc.user.gender === "Male"){
    approxPoundsToLoseSafely = ((caloriesToMaintain - 1500) / 500)
  } else if (this.props.currentUserStatsNewCalc.user.gender === "Female"){
    approxPoundsToLoseSafely = ((caloriesToMaintain - 1200) / 500)
  }
  this.setState({
    approxPoundsToLoseSafely: approxPoundsToLoseSafely
  }, () => this.notify(), this.saveStats())
}

notify = () => {
  let approxPoundsToLoseSafely = this.state.approxPoundsToLoseSafely
  if(this.props.currentUserStatsNewCalc.user.gender === "Male" && this.state.safeCalories === false){
    toast.warn(`Your goal has been modified to allow you to consume a minimum of 1500 calories a day. You will lose around ${approxPoundsToLoseSafely} lb. per week.`, {
      position: toast.POSITION.TOP_CENTER
    })
  }
  if(this.props.currentUserStatsNewCalc.user.gender === "Female" && this.state.safeCalories === false){
    toast.warn(`Your goal has been modified to allow you to consume a minimum of 1200 calories a day. You will lose around ${approxPoundsToLoseSafely} lb. per week.`, {
      position: toast.POSITION.TOP_CENTER
    })
  }
}

calculateMaxHeartRate = () => {
  let age = this.props.currentUserStatsNewCalc.age
  let maxHeartRate = 220 - age
  this.setState({
    maxHeartRate: maxHeartRate
  })
}

saveStats = () => {
  let stat = this.props.currentUserStatsNewCalc
  let weightToManage = this.state.weightToManage
  let today = new Date()
  debugger
  // let formatedDate = ((today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear())
  fetch("https://fitcalculations-api.herokuapp.com/stats", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      user_id: stat.user.id,
      date: new Date(),
      calories_to_maintain: this.state.caloriesToMaintain,
      calories_for_goal: this.state.caloriesForGoal,
      bmr: this.state.bmr,
      bmi: this.state.bmi,
      protein_grams: this.state.protein,
      carb_grams: this.state.carbs,
      fat_grams: this.state.fats,
      protein_percentage: this.state.proteinPercentage,
      carb_percentage: this.state.carbPercentage,
      fat_percentage: this.state.fatPercentage,
      age: stat.age,
      activity_level: stat.activity_level,
      goal: stat.goal,
      body_type: stat.body_type,
      weight_in_lb: stat.weight_in_lb,
      height_in_feet: stat.height_in_feet,
      height_in_inches: stat.height_in_inches,
      weight_in_kg: this.state.weightKg,
      height_in_cm: this.state.heightCm,
      diet_type: stat.diet_type,
      reason_to_get_fit: stat.reason_to_get_fit,
      measurement_system: this.state.formType,
      weight_to_manage: stat.weight_to_manage
      })
    }).then(response => response.json())
    .then(json => {
      this.setState({
        stats: json,
        activeMenu: "Profile"
      }, this.props.getUserStats(stat.user))
  })
}

getProgram = (e) => {
  this.setState({
    page: "Program Display",
    programSelected: e.target.parentElement.querySelector('h2').innerText
  })
}

  render(){
    const { activeMenu, menuStyle, programSelected, page} = this.state;
    return(
      <div id="user-dashboard">
        <DashboardMenu activeMenu={activeMenu} menuStyle={menuStyle} handleMenuClick={this.handleMenuClick} currentUserStats={this.props.currentUserStats[this.props.currentUserStats.length - 1]}/>
        <DashboardContent userFoodLists={this.props.userFoodLists} programSelected={programSelected} getProgram={this.getProgram} currentUserStatsNewCalc={this.props.currentUserStatsNewCalc} calculateBmr={this.calculateBmr} handleChange={this.props.handleChange} handleChangeDropdown={this.props.handleChangeDropdown} activeMenu={this.state.activeMenu} page={page} currentUserStats={this.props.currentUserStats}/>
      </div>
    )
  }
}

export default UserDashboard

