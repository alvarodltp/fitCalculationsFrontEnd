import React from 'react'
import './UserDashboard.css'
import DashboardNav from './DashboardNav'
import DashboardMenu from './DashboardMenu'
import DashboardContent from './DashboardContent'
import NewCalculationForm from './NewCalculationForm'
import { ToastContainer, toast } from 'react-toastify';


class UserDashboard extends React.Component {
  constructor(){
    super()
    this.state={
      page: 'Profile',
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
      maxHeartRate: ""
    }
  }

  handleMenuClick = (e) => {
    this.setState({
      page: e.target.parentElement.innerText
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleChangeDropdown = (value, fieldName) => {
    this.setState({
      [`${fieldName}`]: value
    })
  }

  calculateBmr = () => {
    let formType = this.state.formType
    let weight;
    let height;
    let weightInKg = (this.state.weight_in_lb/2.2046).toFixed(2)
    let heightInFeet = this.state.height_in_feet * 30.48
    let heightInInches = this.state.height_in_inches * 2.54
    let heightInCm = heightInFeet + heightInInches
    let heightInm2 = heightInCm / 100
    let heightInm2FromState = this.state.heightCm / 100
    let bmi;
    formType === "Imperial" ? bmi = (weightInKg/(heightInm2 * heightInm2)).toFixed(2) : bmi = (this.state.weight_in_kg/(heightInm2FromState * heightInm2FromState)).toFixed(2)
    formType === "Metric" ? weight = this.state.weight_in_kg : weight = this.state.weight_in_lb
    formType === "Metric" ? height = this.state.heightCm : height = heightInCm/2.54
    let age = this.state.age
    let bmr;
    debugger
    if(this.props.currentUserStats.user.gender === "Male" && formType === 'Imperial') {
      // bmr = Math.round(66.5 + 13.75 * weight + 5.003 * height - 6.755 * age) #harris
      bmr = Math.round(10 * weightInKg + 6.25 * heightInCm - 5 * age + 5)
    } else if (this.props.currentUserStats.user.gender === "Female" && formType === 'Imperial') {
      // bmr = Math.round(655.1 + 9.563 * weight + 1.850 * height - 4.676 * age) #harris
      bmr = Math.round(10 * weightInKg + 6.25 * heightInCm - 5 * age - 161)
    } else if (this.props.currentUserStats.user.gender === "Male" && formType === 'Metric') {
      bmr = Math.round(10 * this.state.weight_in_kg + 6.25 * this.state.heightCm - 5 * age + 5)
    } else if (this.props.currentUserStats.user.gender === "Female" && formType === 'Metric'){
      bmr = Math.round(10 * this.state.weight_in_kg + 6.25 * this.state.heightCm - 5 * age - 161)
    }
    this.setState({
      bmr: bmr,
      bmi: bmi
    }, () => this.calculateCalories(bmr), this.calculateMaxHeartRate())
  }

  calculateCalories = (bmr) => {
  let activityLevel = this.state.activity_level
  let goal = this.state.goal
  let weightToManage = this.state.weight_to_manage.split(' ')[0]
  let caloriesToMaintain;
  bmr !== "" && activityLevel !== null ? caloriesToMaintain = Math.round(bmr * activityLevel["value"]) : caloriesToMaintain = null
  let caloriesForGoal;
  if(goal === "Lose Weight/Get Lean" && weightToManage === "Slow"){
    caloriesForGoal = caloriesToMaintain - 250
  } else if (goal === "Lose Weight/Get Lean" && weightToManage === "Steady"){
    caloriesForGoal = caloriesToMaintain - 500
  } else if (goal === "Lose Weight/Get Lean" && weightToManage === "Accelerated"){
    caloriesForGoal = caloriesToMaintain - 1000
  } else if (goal === "Gain Muscle" && weightToManage === "Slow"){
    caloriesForGoal = caloriesToMaintain + 250
  } else if (goal === "Gain Muscle" && weightToManage === "Steady"){
    caloriesForGoal = caloriesToMaintain + 500
  } else if (goal === "Gain Muscle" && weightToManage === "Accelerated"){
    caloriesForGoal = caloriesToMaintain + 1000
  } else {
    caloriesForGoal = caloriesToMaintain
  }
  if(this.props.currentUserStats.user.gender === "Male" && caloriesForGoal < 1500) {
    this.setState({
      safeCalories: false,
      caloriesToMaintain: caloriesToMaintain,
      caloriesForGoal: 1500
    }, () => this.getSafePoundsPerWeek(caloriesToMaintain))
  } else if (this.props.currentUserStats.user.gender === "Female" && caloriesForGoal < 1200) {
    this.setState({
      safeCalories: false,
      caloriesToMaintain: caloriesToMaintain,
      caloriesForGoal: 1200
    }, () => this.getSafePoundsPerWeek(caloriesToMaintain))
  } else {
    this.setState({
      caloriesToMaintain: caloriesToMaintain,
      caloriesForGoal: caloriesForGoal
    })
  }
}

calculateMacros = (e) => {
  let protein;
  let fats;
  let carbs;
  let bodyType = this.state.body_type
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
  })
}


getSafePoundsPerWeek = (caloriesToMaintain) => {
  let approxPoundsToLoseSafely;
  if(this.props.currentUserStats.user.gender === "Male"){
    approxPoundsToLoseSafely = ((caloriesToMaintain - 1500) / 500)
  } else if (this.props.currentUserStats.user.gender === "Female"){
    approxPoundsToLoseSafely = ((caloriesToMaintain - 1200) / 500)
  }
  this.setState({
    approxPoundsToLoseSafely: approxPoundsToLoseSafely
  })
}

notify = () => {
  let approxPoundsToLoseSafely = this.state.approxPoundsToLoseSafely
  if(this.props.currentUserStats.user.gender === "Male" && this.state.safeCalories === false){
    toast.warn(`Your goal has been modified to allow you to consume a minimum of 1500 calories a day. You will lose around ${approxPoundsToLoseSafely} lb. per week.`, {
      position: toast.POSITION.TOP_CENTER
    })
  }
  if(this.props.currentUserStats.user.gender === "Female" && this.state.safeCalories === false){
    toast.warn(`Your goal has been modified to allow you to consume a minimum of 1200 calories a day. You will lose around ${approxPoundsToLoseSafely} lb. per week.`, {
      position: toast.POSITION.TOP_CENTER
    })
  }
}

calculateMaxHeartRate = () => {
  let age = this.state.age
  let maxHeartRate = 220 - age
  this.setState({
    maxHeartRate: maxHeartRate
  })
}



  render(){
    return(
      <div id="user-dashboard">
        <DashboardNav currentUserStats={this.props.currentUserStats[this.props.currentUserStats.length - 1]} logOut={this.props.logOut}/>
        <DashboardMenu handleMenuClick={this.handleMenuClick} currentUserStats={this.props.currentUserStats[this.props.currentUserStats.length - 1]}/>
        <DashboardContent currentUserStatsNewCalc={this.props.currentUserStatsNewCalc} calculateBmr={this.calculateBmr} handleChange={this.handleChange} handleChangeDropdown={this.handleChangeDropdown} page={this.state.page} currentUserStats={this.props.currentUserStats}/>
      </div>
    )
  }
}

export default UserDashboard
