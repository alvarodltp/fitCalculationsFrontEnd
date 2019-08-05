import React from 'react'
import UserInfoForm from './UserInfoForm'
import BmrCalorieResults from './BmrCalorieResults'
import PersonalizedMacros from './PersonalizedMacros'
import NutritionPackageDetails from './NutritionPackageDetails'
import MacrosBreakdownForm from './MacrosBreakdownForm'
import SignUpForm from './SignUpForm'
import MacrosBreakdownCard from './MacrosBreakdownCard'
import DietType from './DietType'
import Motivation from './Motivation'
import Confetti from 'react-dom-confetti';
import swal from 'sweetalert'
import Stepper from 'react-stepper-horizontal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from './Loading'

class CalculationsContainer extends React.Component {
  constructor(){
    super()
    this.state={
      formType: "Imperial",
      name: "",
      email: "",
      gender: "",
      weightKg: "",
      weightLb: "",
      heightCm: "",
      age: "",
      activityLevel: null,
      goal: "",
      weightToManage: "",
      bmr: "",
      bmi: "",
      caloriesForGoal: "",
      safeCalories: true,
      caloriesToMaintain: "",
      feet: null,
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
      caloriesInfo: false,
      macrosInfo: false,
      dietInfo: false,
      confetti: false,
      checked: true,
      approxPoundsToLoseSafely: "",
      caloriesShown: false,
      dietShown: false,
      macrosShown: false,
      cardioShown: false,
      exerciseShown: false,
      macroCalculatorShown: false,
      landingPageShown: false,
      maxHeartRate: 0,
      showForm: false,
      users: null,
      userExists: [],
      message: null,
      loading: "",
      showNutritionPackageDetails: true,
      password: "",
      passwordMessage: ""
    }
  }

  componentDidMount(){
    this.getAllUsers()
  }

  getFormType = (e) => {
    this.setState({
      formType: e.target.innerText
    })
  }

  showCalories = () => {
    this.setState({
      caloriesShown: !this.state.caloriesShown,
      dietShown: false,
      macrosShown: false,
      cardioShown: false,
      exerciseShown: false,
      macroCalculatorShown: false
    })
  }

  showExercise = () => {
    this.setState({
      exerciseShown: !this.state.exerciseShown,
      caloriesShown: false,
      dietShown: false,
      macrosShown: false,
      cardioShown: false,
      macroCalculatorShown: false
    })
  }

  showMacros = () => {
    this.setState({
      macrosShown: !this.state.macrosShown,
      caloriesShown: false,
      dietShown: false,
      cardioShown: false,
      exerciseShown: false,
      macroCalculatorShown: false
    })
  }

  showDiet = () => {
    this.setState({
      dietShown: !this.state.dietShown,
      caloriesShown: false,
      macrosShown: false,
      cardioShown: false,
      exerciseShown: false,
      macroCalculatorShown: false
    })
  }

  showCardio = () => {
    this.setState({
      cardioShown: !this.state.cardioShown,
      caloriesShown: false,
      macrosShown: false,
      dietShown: false,
      exerciseShown: false,
      macroCalculatorShown: false
    })
  }

  showMacroCalculator = () => {
    this.setState({
      macroCalculatorShown: !this.state.macroCalculatorShown,
      cardioShown: false,
      caloriesShown: false,
      macrosShown: false,
      dietShown: false,
      exerciseShown: false
    })
  }

  showLandingPage = () => {
    this.setState({
      landingPageShown: !this.state.landingPageShown,
      cardioShown: false,
      caloriesShown: false,
      macrosShown: false,
      dietShown: false,
      exerciseShown: false
    }, this.updateIntercom())
  }

  activateConfetti = () => {
    if(this.props.emailValid === true && this.state.checked === true && this.state.name !== "") {
      this.setState({
        confetti: true
      })
    } else {

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
    if(this.state.weightToManage !== "" && this.state.gender !== "" && this.state.age !== "" && this.state.weightLb !== "" && this.state.feet !== "" && this.state.inches !== "" && this.state.activityLevel !== null && this.state.goal !== ""){
      this.setState({
        buttonDisabled: false
      })
    }
  }

  enableButtonMetricForm = (e) => {
    if(this.state.weightToManage !== "" && this.state.gender !== "" && this.state.age !== "" && this.state.weightKg !== "" && this.state.heightCm !== "" && this.state.activityLevel !== null && this.state.goal !== "") {
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
      [e.target.name]: parseInt(e.target.value)
    })
  }

  getEmail = (e) => {
    this.setState({
      email: e.target.value.replace(/\s*$/,'')
    })
  }

  getName = (e) => {
    this.setState({
      name: e.target.value.replace(/\s*$/,'')
    })
  }

  getGender = (e) => {
    this.setState({
      gender: e.target.parentElement.innerText
    })
  }

  getPassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  getGoal = (e) => {
    this.setState({
    goal: e.target.innerText
    })
  }

  getWeightToLose = (e) => {
    debugger
    this.setState({
      weightToManage: e.target.innerText
    })
  }

  getFeet = (e) => {
    this.setState({
      feet: parseInt(e.target.innerText)
    })
  }

  getInches = (e) => {
    this.setState({
      inches: parseInt(e.target.innerText)
    })
  }

  getDietType = (e) => {
    let dietType = e.target.parentElement.getElementsByClassName("header")[0].innerText
    this.setState({
      dietType: dietType
    })
  }

  getMotivationToGetFit = (e) => {
    let motivationToGetFit = e.target.parentElement.getElementsByClassName("header")[0].innerText
    this.setState({
      motivationToGetFit: motivationToGetFit
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
      activityLevelText: activityLevel
    })
  }

  calculateBmr = () => {
    let formType = this.state.formType
    let weight;
    let height;
    let weightInKg = (this.state.weightLb/2.2046).toFixed(2)
    let heightInFeet = this.state.feet * 30.48
    let heightInInches = this.state.inches * 2.54
    let heightInCm = heightInFeet + heightInInches
    let heightInm2 = heightInCm / 100
    let heightInm2FromState = this.state.heightCm / 100
    let bmi;
    formType === "Imperial" ? bmi = (weightInKg/(heightInm2 * heightInm2)).toFixed(2) : bmi = (this.state.weightKg/(heightInm2FromState * heightInm2FromState)).toFixed(2)
    formType === "Metric" ? weight = this.state.weightKg : weight = this.state.weightLb
    formType === "Metric" ? height = this.state.heightCm : height = heightInCm/2.54
    let age = this.state.age
    let bmr;
    if(this.state.gender === "Male" && formType === 'Imperial') {
      // bmr = Math.round(66.5 + 13.75 * weight + 5.003 * height - 6.755 * age) #harris
      bmr = Math.round(10 * weightInKg + 6.25 * heightInCm - 5 * age + 5)
    } else if (this.state.gender === "Female" && formType === 'Imperial') {
      // bmr = Math.round(655.1 + 9.563 * weight + 1.850 * height - 4.676 * age) #harris
      bmr = Math.round(10 * weightInKg + 6.25 * heightInCm - 5 * age - 161)
    } else if (this.state.gender === "Male" && formType === 'Metric') {
      bmr = Math.round(10 * this.state.weightKg + 6.25 * this.state.heightCm - 5 * age + 5)
    } else if (this.state.gender === "Female" && formType === 'Metric'){
      bmr = Math.round(10 * this.state.weightKg + 6.25 * this.state.heightCm - 5 * age - 161)
    }
    this.setState({
      bmr: bmr,
      bmi: bmi
    }, () => this.calculateCalories(bmr), this.calculateMaxHeartRate())
  }

  calculateCalories = (bmr) => {
  let activityLevel = this.state.activityLevel
  let goal = this.state.goal
  let weightToManage = this.state.weightToManage.split(' ')[0]
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
  if(this.state.gender === "Male" && caloriesForGoal < 1500) {
    this.setState({
      safeCalories: false,
      caloriesToMaintain: caloriesToMaintain,
      caloriesForGoal: 1500
    }, () => this.getSafePoundsPerWeek(caloriesToMaintain))
  } else if (this.state.gender === "Female" && caloriesForGoal < 1200) {
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
  let bodyType = e.target.parentElement.getElementsByClassName("header")[0].innerText
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
    console.log(protein)
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
  }, () => this.props.scrollToTop(), this.showMacrosChart())
}

getAllUsers = () => {
  fetch("https://fitcalculations-api.herokuapp.com/users")
  .then(response => response.json())
  .then(json => {
    let email = this.state.email
    let userExists = json.filter(user => user.email === email.toLowerCase())
    // console.log(userExists)
    this.setState({
      users: json,
      userExists: userExists
    }, this.saveOrUpdateUser(userExists))
  })
}

saveOrUpdateUser = (userExists) => {
  // debugger
  if(this.props.emailValid === true && this.state.name !== "" && this.state.checked === true && userExists.length !== 0){
    this.updateUser(userExists)
  } else if (this.props.emailValid === true && this.state.name !== "" && this.state.checked === true && userExists.length === 0){
    this.handleOnSubmit()
    //before it was saveOrUpdateUser()
  } else {

  }
}

requiredFieldsMessage = () => {
  if(this.props.emailValid === "" || this.props.emailValid === false || this.state.name === "" || this.state.checked === false) {
    this.setState({
      message: "Please enter your name, email, and check the box to proceed."
    })
  } else {
    this.setLoadingToTrue()
  }
}

setLoadingToTrue = () => {
  this.setState({
    loading: true
  }, this.getAllUsers())
}

saveUser = () => {
  fetch("https://fitcalculations-api.herokuapp.com/users", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      name: this.state.name.replace(/^\w/, c => c.toUpperCase()),
      email: this.state.email.toLowerCase(),
      gender: this.state.gender,
      password: this.state.password
      })
    }).then(response => response.json())
    .then(user => {
      this.setState({
        user: user
      }, this.saveStats(user), this.notify(), swal("Success!", "Your results are ready!", "success"))
    })
}

updateUser = (userExists) => {
  let userId = userExists[0].id
  fetch(`https://fitcalculations-api.herokuapp.com/users/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        user: {
          name: this.state.name.replace(/^\w/, c => c.toUpperCase()),
          email: this.state.email.toLowerCase(),
          gender: this.state.gender
        }
      })
    }).then(response =>response.json())
    .then(user => {
      this.setState({
        user: user
      }, this.saveStats(user), this.notify(), swal("Success!", "Your results are ready!", "success"))
    })
  }

saveStats = (user) => {
  let weightToManage = this.state.weightToManage
  let today = new Date()
  debugger
  // let formatedDate = ((today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear())
  fetch("http://fitcalculations-api.herokuapp.com/stats", {
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
      bmr: this.state.bmr,
      bmi: this.state.bmi,
      protein_grams: this.state.protein,
      carb_grams: this.state.carbs,
      fat_grams: this.state.fats,
      protein_percentage: this.state.proteinPercentage,
      carb_percentage: this.state.carbPercentage,
      fat_percentage: this.state.fatPercentage,
      age: this.state.age,
      activity_level: this.state.activityLevelText,
      goal: this.state.goal,
      body_type: this.state.bodyType,
      weight_in_lb: this.state.weightLb,
      height_in_feet: this.state.feet,
      height_in_inches: this.state.inches,
      weight_in_kg: this.state.weightKg,
      height_in_cm: this.state.heightCm,
      diet_type: this.state.dietType,
      reason_to_get_fit: this.state.motivationToGetFit,
      measurement_system: this.state.formType,
      weight_to_manage: this.state.weightToManage
      })
    }).then(response => response.json())
    .then(json => {
      debugger
      this.setState({
        stats: json,
        loading: false
      }, this.props.addOneToStep(json))
  })
}

getNumber = (e) => {
  this.setState({
    numberOfMeals: e.target.innerText[0]
  })
}

calculateBreakdown = () => {
  if(this.state.numberOfMeals !== "") {
    this.setState({
      caloriesBreakdown: Math.round(this.state.caloriesForGoal/this.state.numberOfMeals),
      proteinBreakdown: Math.round(this.state.protein/this.state.numberOfMeals),
      carbsBreakdown: Math.round(this.state.carbs/this.state.numberOfMeals),
      fatsBreakdown: Math.round(this.state.fats/this.state.numberOfMeals)
    })
  }
}

checkCheckbox = (e) => {
  this.setState({
    checked: !this.state.checked
  })
}

scrollToForm = () => {
 window.scrollTo(0, 2800)
}

getGenderOnButton = (e) => {
  let gender = e.target.value
  this.setState({
    gender: gender
  }, () => this.scrollToForm())
}

getSafePoundsPerWeek = (caloriesToMaintain) => {
  let approxPoundsToLoseSafely;
  if(this.state.gender === "Male"){
    approxPoundsToLoseSafely = ((caloriesToMaintain - 1500) / 500)
  } else if (this.state.gender === "Female"){
    approxPoundsToLoseSafely = ((caloriesToMaintain - 1200) / 500)
  }
  this.setState({
    approxPoundsToLoseSafely: approxPoundsToLoseSafely
  })
}


notify = () => {
  let approxPoundsToLoseSafely = this.state.approxPoundsToLoseSafely
  if(this.state.gender === "Male" && this.state.safeCalories === false){
    toast.warn(`Your goal has been modified to allow you to consume a minimum of 1500 calories a day. You will lose around ${approxPoundsToLoseSafely} lb. per week.`, {
      position: toast.POSITION.TOP_CENTER
    })
  }
  if(this.state.gender === "Female" && this.state.safeCalories === false){
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

displayForm = () => {
  this.setState({
    showForm: true
  })
}

hideForm = () => {
  this.setState({
    showForm: false
  }, this.props.scrollToTop())
}

updateIntercom = () => {
  window.Intercom("update");
}

setFormToTrue = () => {
  this.setState({
    showForm: true,
    showNutritionPackageDetails: false
  })
}

//save_user
handleOnSubmit = () => {
  let userData = {user: {
    name: this.state.name.replace(/^\w/, c => c.toUpperCase()),
    email: this.state.email,
    password: this.state.password,
    gender: this.state.gender
  }}
  fetch("https://fitcalculations-api.herokuapp.com/users", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(userData)
  })
  .then(res => res.json())
  .then(res => {
    debugger
    this.setState({
      user: res.user
    }, this.props.updateNewUser(res), this.saveStats(res.user), this.notify())
  })
}

// swal("Success!", "Your results are ready!", "success")


confirmPassword = (e) => {
  if(e.target.value === this.state.password){
    this.setState({
      passwordMessage: true
    });
  } else {
    this.setState({
      passwordMessage: false
    });
  }
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
        {this.props.stepNumber === 0 && this.state.showNutritionPackageDetails === true ? <NutritionPackageDetails displayForm={this.displayForm} showForm={this.state.showForm} mobileDevice={this.props.mobileDevice} getGenderOnButton={this.getGenderOnButton} showBcmForm={this.showBcmForm}/> : null }
        <div className="stepper">{this.state.showForm === true || this.props.stepNumber === 1 || this.props.stepNumber === 2 || this.props.stepNumber === 3 || this.props.stepNumber === 4 ? <Stepper completeColor={"#2761f1"} activeColor={"#e80aaa"} steps={ [{title: 'Info'}, {title: 'Body'}, {title: 'Diet'}, {title: 'Motivation'}, {title: 'Results'}] } activeStep={ this.props.stepNumber } /> : null }</div>
        {this.state.showForm === true ? <UserInfoForm enableButtonMetricForm={this.enableButtonMetricForm} getFormType={this.getFormType} formType={this.state.formType} getCm={this.getCm} heightCm={this.state.heightCm} age={this.state.age} weightLb={this.state.weightLb} weightKg={this.state.weightKg} feet={this.state.feet} inches={this.state.inches} goal={this.state.goal} activityLevelText={this.state.activityLevelText} weightToManage={this.state.weightToManage} hideForm={this.hideForm} mobileDevice={this.props.mobileDevice} getWeightToLose={this.getWeightToLose} gender={this.state.gender} getGenderOnButton={this.getGenderOnButton} scrollToTop={this.props.scrollToTop} enableButton={this.enableButton} buttonDisabled={this.state.buttonDisabled} resetForm={this.resetForm} addOneToStep={this.props.addOneToStep} hideForm={this.hideForm} resetFormInput={this.resetFormInput} resetForm={this.resetForm}
        handleChange={this.handleChange} getFeet={this.getFeet} getInches={this.getInches} getGoal={this.getGoal} goal={this.state.goal} getGender={this.getGender} getActivityLevel={this.getActivityLevel} calculateBmr={this.calculateBmr} calculateCalories={this.calculateCalories} /> : null }
        {this.props.stepNumber === 2 ? <DietType substractOneFromStep={this.props.substractOneFromStep} getDietType={this.getDietType} addOneToStep={this.props.addOneToStep} scrollToTop={this.props.scrollToTop} stepNumber={this.props.stepNumber}/> : null}
        {this.props.stepNumber === 3 ? <Motivation substractOneFromStep={this.props.substractOneFromStep} getMotivationToGetFit={this.getMotivationToGetFit} addOneToStep={this.props.addOneToStep} scrollToTop={this.props.scrollToTop} stepNumber={this.props.stepNumber}/> : null}
        <ToastContainer autoClose={false} draggable={true}/>
        {this.props.stepNumber === 5 ? <BmrCalorieResults bmr={this.state.bmr} caloriesToMaintain={this.state.caloriesToMaintain} caloriesForGoal={this.state.caloriesForGoal} proteinPercentage={this.state.proteinPercentage} carbPercentage={this.state.carbPercentage} fatPercentage={this.state.fatPercentage} protein={this.state.protein} carbs={this.state.carbs} fats={this.state.fats} showMacroCalculator={this.showMacroCalculator} macroCalculatorShown={this.state.macroCalculatorShown} motivationToGetFit={this.state.motivationToGetFit} dietType={this.state.dietType} goal={this.state.goal} maxHeartRate={this.state.maxHeartRate} age={this.state.age} showLandingPage={this.showLandingPage} landingPageShown={this.state.landingPageShown} showExercise={this.showExercise} exerciseShown={this.state.exerciseShown} showMacros={this.showMacros} macrosShown={this.state.macrosShown} showCardio={this.showCardio} cardioShown={this.state.cardioShown} showDiet={this.showDiet} dietShown={this.state.dietShown} showCalories={this.showCalories} caloriesShown={this.state.caloriesShown} safeCalories={this.state.safeCalories} dietType={this.state.dietType} motivationToGetFit={this.state.motivationToGetFit} user={this.state.user} displayCalories={this.state.displayCalories} displayCaloriesInfo={this.displayCaloriesInfo} displayDiet={this.state.displayDiet} displayDietInfo={this.displayDietInfo} cardInfo={this.state.cardInfo} /> : null }
        {this.props.stepNumber === 4 && this.state.loading === "" ? <SignUpForm handleOnSubmit={this.handleOnSubmit} passwordMessage={this.state.passwordMessage} confirmPassword={this.confirmPassword} handleOnSubmit={this.handleOnSubmit} getPassword={this.getPassword} setLoadingToTrue={this.setLoadingToTrue} requiredFieldsMessage={this.requiredFieldsMessage} message={this.state.message} getAllUsers={this.getAllUsers} safeCalories={this.state.safeCalories} notify={this.notify} getName={this.getName} getEmail={this.getEmail} validateEmail={this.props.validateEmail} checkCheckbox={this.checkCheckbox} saveEmailToUser={this.saveEmailToUser} activateConfetti={this.activateConfetti} scrollToTop={this.props.scrollToTop} name={this.state.name} email={this.state.email} checked={this.state.checked}/> : null }
        {this.props.stepNumber === 1 ? <PersonalizedMacros setFormToTrue={this.setFormToTrue} substractOneFromStep={this.props.substractOneFromStep} user={this.state.user} scrollToTop={this.props.scrollToTop} updateUser={this.updateUser} addOneToStep={this.props.addOneToStep} calculateMacros={this.calculateMacros} /> : null }
        {this.state.loading === true ? <Loading loading={this.state.loading} name={this.state.name}/> : null }
      </React.Fragment>
    )
  }
}

export default CalculationsContainer
