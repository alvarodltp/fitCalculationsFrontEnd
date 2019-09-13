import React from 'react'
import UserInfoForm from './UserInfoForm'
import BmrCalorieResults from './BmrCalorieResults'
import BodyType from '../CalcQuestions/BodyType'
import NutritionPackageDetails from './NutritionPackageDetails'
import SignUpForm from './SignUpForm'
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
      weightToManage: "",
      bmr: "",
      bmi: "",
      caloriesForGoal: "",
      safeCalories: true,
      caloriesToMaintain: "",
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
      maxHeartRate: 0,
      showForm: false,
      users: null,
      userExists: [],
      message: null,
      loading: "",
      showNutritionPackageDetails: true,
      password: "",
      passwordMessage: "",
      goal: "",
      formValues: {
        weightToManage: false,
        age: false,
        goal: false,
        feet: false,
        inches: false,
        activityLevel: false,
        weightLb: false
      }
    }
  }

  componentDidMount(){
    this.getAllUsers()
  }

  manageButton = (formType) => {
    let enabled = Object.values(formType).includes(false)
    this.setState({
      buttonDisabled: enabled
    });
  }

  getFormType = (e) => {
    this.setState({
      formType: e.target.innerText
    });
  }

  activateConfetti = () => {
    if(this.props.emailValid === true && this.state.checked === true && this.state.name !== "") {
      this.setState({
        confetti: true
      });
    }
  }

  showBcmForm = () => {
    this.setState({
      showBcmForm: !this.state.showBcmForm
    });
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  // enableButtonMetricForm = (e) => {
  //   if(this.state.weightToManage !== "" && this.state.gender !== "" && this.state.age !== "" && this.state.weightKg !== "" && this.state.heightCm !== "" && this.state.activityLevel !== null && this.state.goal !== "") {
  //   this.setState({
  //     buttonDisabled: false
  //     })
  //   }
  // }

  showMacrosChart = () => {
    this.setState({
      macrosChart: true
    })
  }

  handleChange = (e) => {
    let formValues = this.state.formValues;
    e.target.value != "" ? formValues[e.target.name] = true : formValues[e.target.name] = false
    this.setState({
      [e.target.name]: parseInt(e.target.value),
      formValues: formValues
    }, () => this.manageButton(formValues))
  }

  getEmail = (e) => {
    this.setState({
      email: e.target.value.replace(/\s*$/,'')
    });
  }

  getName = (e) => {
    this.setState({
      name: e.target.value.replace(/\s*$/,'')
    });
  }

  getGender = (e) => {
    let formValues = this.state.formValues
    formValues["gender"] = true
    this.setState({
      gender: e.target.parentElement.innerText,
      formValues: formValues
    }, () => this.manageButton(formValues))
  }

  getPassword = (e) => {
    this.setState({
      password: e.target.value
    });
  }

  handleFormDropdown = (data) => {
    let name = data.name;
    let formValues = this.state.formValues
    formValues[name] = true
    this.setState({
    [name]: data.value,
    formValues: formValues
    }, () => this.manageButton(formValues))
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

  getActivityLevel = (data) => {
    let name = data.name
    let activityLevel = data.value.split(",")[0]
    let activityLevelValue = data.value.split(",")[1]
    let formValues = this.state.formValues
    formValues[name] = true
    this.setState({
      activityLevel: {name: activityLevel, value: activityLevelValue},
      activityLevelText: activityLevel,
      formValues: formValues
    }, () => this.manageButton(formValues))
  }

  calculateBmr = () => {
    let formType = this.state.formType
    let weight;
    let height;
    let weightInKg = (this.state.weightLb/2.2046).toFixed(2)
    let heightInFeet = parseInt(this.state.feet) * 30.48
    let heightInInches = parseInt(this.state.inches) * 2.54
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
  let activityLevel = this.state.activityLevel;
  let goal = this.state.goal;
  let weightToManage = this.state.weightToManage;
  let caloriesToMaintain;
  bmr !== "" && activityLevel !== null ? caloriesToMaintain = Math.round(bmr * activityLevel["value"]) : caloriesToMaintain = null
  let caloriesForGoal;
  if(goal === "lose" && weightToManage === "Slow - 0.5 lb. Per Week,0.5"){
    caloriesForGoal = caloriesToMaintain - 250
  } else if (goal === "lose" && weightToManage === "Steady - 1 lb. To 1.5 lb. Per Week,1 to 1.5"){
    caloriesForGoal = caloriesToMaintain - 500
  } else if (goal === "lose" && weightToManage === "Accelerated - 2 lb. Per Week,2.0"){
    caloriesForGoal = caloriesToMaintain - 1000
  } else if (goal === "gain" && weightToManage === "Slow - 0.5 lb. Per Week,0.5"){
    caloriesForGoal = caloriesToMaintain + 250
  } else if (goal === "gain" && weightToManage === "Steady - 1 lb. To 1.5 lb. Per Week,1 to 1.5"){
    caloriesForGoal = caloriesToMaintain + 500
  } else if (goal === "gain" && weightToManage === "Accelerated - 2 lb. Per Week,2.0"){
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

calculateMacros = (body) => {
  let protein;
  let fats;
  let carbs;
  let bodyType = body
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
    this.setState({
      users: json,
      userExists: userExists
    }, this.saveOrUpdateUser(userExists))
  })
}

saveOrUpdateUser = (userExists) => {
  if(this.props.emailValid === true && this.state.name !== "" && this.state.checked === true && userExists.length !== 0){
    this.updateUser(userExists)
  } else if (this.props.emailValid === true && this.state.name !== "" && this.state.checked === true && userExists.length === 0){
    this.handleOnSubmit()
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
  // debugger
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
      // debugger
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
    // debugger
    this.setState({
      user: res.user
    }, this.props.updateNewUser(res), this.saveStats(res.user), this.notify())
  })
}

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

    const {
      confetti,
      showNutritionPackageDetails,
      showForm,
      formType,
      heightCm,
      age,
      weightLb,
      weightKg,
      feet,
      inches,
      goal,
      activityLevelText,
      weightToManage,
      gender,
      buttonDisabled,
      user,
      bmr,
      caloriesToMaintain,
      caloriesForGoal,
      proteinPercentage,
      carbPercentage,
      fatPercentage,
      protein,
      carbs,
      fats,
      macroCalculatorShown,
      motivationToGetFit,
      dietType,
      maxHeartRate,
      landingPageShown,
      exerciseShown,
      macrosShown,
      cardioShown,
      dietShown,
      caloriesShown,
      displayCalories,
      displayDiet,
      cardInfo,
      loading,
      passwordMessage,
      message,
      safeCalories,
      name,
      email,
      checked,
    } = this.state;

    return(
      <React.Fragment>
        <Confetti id="confetti" active={confetti} config={config}/>
        {this.props.stepNumber === 0 && showNutritionPackageDetails === true ? 
        <NutritionPackageDetails displayForm={this.displayForm} showForm={showForm} mobileDevice={this.props.mobileDevice} getGenderOnButton={this.getGenderOnButton} showBcmForm={this.showBcmForm}/> : null }
        <div className="stepper">{showForm === true || this.props.stepNumber === 1 || this.props.stepNumber === 2 || this.props.stepNumber === 3 || this.props.stepNumber === 4 ? 
        <Stepper completeColor={"#2761f1"} activeColor={"#F1B727"} steps={ [{title: 'Info'}, {title: 'Body'}, {title: 'Diet'}, {title: 'Motivation'}, {title: 'Results'}] } activeStep={ this.props.stepNumber } /> : null }</div>
        {showForm === true ? 
        <UserInfoForm enableButtonMetricForm={this.enableButtonMetricForm} getFormType={this.getFormType} formType={formType} getCm={this.getCm} heightCm={heightCm} age={age} weightLb={weightLb} weightKg={weightKg} feet={feet} inches={inches} goal={goal} activityLevelText={activityLevelText} weightToManage={weightToManage} hideForm={this.hideForm} mobileDevice={this.props.mobileDevice} getWeightToLose={this.getWeightToLose} gender={gender} getGenderOnButton={this.getGenderOnButton} scrollToTop={this.props.scrollToTop} buttonDisabled={buttonDisabled} resetForm={this.resetForm} addOneToStep={this.props.addOneToStep} hideForm={this.hideForm} resetFormInput={this.resetFormInput} resetForm={this.resetForm}
        handleChange={this.handleChange} handleFormDropdown={this.handleFormDropdown} goal={goal} getGender={this.getGender} getActivityLevel={this.getActivityLevel} calculateBmr={this.calculateBmr} calculateCalories={this.calculateCalories} /> : null }
        {this.props.stepNumber === 2 ? 
        <DietType substractOneFromStep={this.props.substractOneFromStep} getDietType={this.getDietType} addOneToStep={this.props.addOneToStep} scrollToTop={this.props.scrollToTop} stepNumber={this.props.stepNumber}/> : null}
        {this.props.stepNumber === 3 ? 
        <Motivation substractOneFromStep={this.props.substractOneFromStep} getMotivationToGetFit={this.getMotivationToGetFit} addOneToStep={this.props.addOneToStep} scrollToTop={this.props.scrollToTop} stepNumber={this.props.stepNumber}/> : null}
        <ToastContainer autoClose={false} draggable={true}/>
        {this.props.stepNumber === 5 && user != null ? 
        <BmrCalorieResults bmr={bmr} caloriesToMaintain={caloriesToMaintain} caloriesForGoal={caloriesForGoal} proteinPercentage={proteinPercentage} carbPercentage={carbPercentage} fatPercentage={fatPercentage} protein={protein} carbs={carbs} fats={fats} showMacroCalculator={this.showMacroCalculator} macroCalculatorShown={macroCalculatorShown} motivationToGetFit={motivationToGetFit} dietType={dietType} goal={goal} maxHeartRate={maxHeartRate} age={age} showLandingPage={this.showLandingPage} landingPageShown={landingPageShown} showExercise={this.showExercise} exerciseShown={exerciseShown} showMacros={this.showMacros} macrosShown={macrosShown} showCardio={this.showCardio} cardioShown={cardioShown} showDiet={this.showDiet} dietShown={dietShown} showCalories={this.showCalories} caloriesShown={caloriesShown} safeCalories={safeCalories} dietType={dietType} motivationToGetFit={motivationToGetFit} user={user} displayCalories={displayCalories} displayCaloriesInfo={this.displayCaloriesInfo} displayDiet={displayDiet} displayDietInfo={this.displayDietInfo} cardInfo={cardInfo} /> : null }
        {this.props.stepNumber === 4 && loading === "" ? 
        <SignUpForm handleOnSubmit={this.handleOnSubmit} passwordMessage={passwordMessage} confirmPassword={this.confirmPassword} handleOnSubmit={this.handleOnSubmit} getPassword={this.getPassword} setLoadingToTrue={this.setLoadingToTrue} requiredFieldsMessage={this.requiredFieldsMessage} message={message} getAllUsers={this.getAllUsers} safeCalories={safeCalories} notify={this.notify} getName={this.getName} getEmail={this.getEmail} validateEmail={this.props.validateEmail} checkCheckbox={this.checkCheckbox} saveEmailToUser={this.saveEmailToUser} activateConfetti={this.activateConfetti} scrollToTop={this.props.scrollToTop} name={name} email={email} checked={checked}/> : null }
        {this.props.stepNumber === 1 ? 
        <BodyType setFormToTrue={this.setFormToTrue} substractOneFromStep={this.props.substractOneFromStep} addOneToStep={this.props.addOneToStep} calculateMacros={this.calculateMacros} /> : null }
        {loading === true ? 
        <Loading loading={loading} name={name}/> : null }
      </React.Fragment>
    )
  }
}

export default CalculationsContainer
