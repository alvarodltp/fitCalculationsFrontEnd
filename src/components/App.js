import ReactGA from 'react-ga';
import React, { Component } from 'react';
import '../App.scss';
import NavBar from './NavBar'
import NavBarMobile from './NavBarMobile'
import {Sidebar, Segment, Menu} from 'semantic-ui-react'
import CalculationsContainer from './CalculationsContainer'
import Footer from './Footer'
import { Route } from 'react-router-dom'
import Homepage from './Homepage'
import MacrosBreakdownForm from './MacrosBreakdownForm'
import ThankYouBcm from './ThankYouBcm'
import Invite from './Invite'
import LandingPage from './LandingPage'
import ThankYouAfterPurchase from './ThankYouAfterPurchase'
import ReactPixel from 'react-facebook-pixel';
import FoodListContainer from '../Foodlist/FoodListContainer'
import BmiCalculatorContainer from '../BmiCalculator/BmiCalculatorContainer'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      stepNumber: 0,
      mobileDevice: null,
      showResults: false,
      loading: true,
      allStats: null,
      loading: true,
      emailValid: "",
      message: ""

    }
  }



componentDidMount() {
  this.initGA()
  this.logPageView()
  this.isMobileDevice()
  this.getAllStats()
  // this.initializeIntercom()
  ReactPixel.init('433459070732534')
}

getAllStats = () => {
  fetch("https://fitcalculations-api.herokuapp.com/stats")
  .then(response => response.json())
  .then(json => {
    this.setState({
      allStats: json,
      loading: false
    })
  })
}

setFoodListStepNumber = () => {
  this.setState({
    stepNumber: 10
  })
}


isMobileDevice = () => {
  this.setState({
    mobileDevice: (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1)
  })
}


initGA = () => {
  ReactGA.initialize('UA-131459392-1');
}

logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname);
}

addOneToStep = () => {
  this.setState({
    stepNumber: this.state.stepNumber + 1
  })
}

substractOneFromStep = () => {
  this.setState({
    stepNumber: this.state.stepNumber - 1
  })
}

scrollToTop = () => {
 window.scrollTo(0, 0)
}

// scrollToBottom = () => {
//   window.scrollTo(0,9999);
// }

showResultsPage = () => {
  this.setState({
    showResults: true,
    loading: false
  })
}

// initializeIntercom = () => {
//     window.Intercom("boot", {
//     app_id: "miq7epik"
//   })
// }

validateEmail = (e) => {
  let email = e.target.value.replace(/\s*$/,'')
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  this.setState({
    emailValid: re.test(email)
  })
}

requiredEmailMessage = () => {
  if(this.state.emailValid === "" || this.state.emailValid === false) {
    this.setState({
      message: "Please enter a valid email address."
    })
  } else {
    window.location.href = "https://drive.google.com/file/d/1-lq43IW3cTCafFvhTm6RrutJvju0J4k6/view?usp=sharing";
    this.setState({
      message: ""
    })
  }
}

  render() {

    const ReactPixel =  require('react-facebook-pixel');

    return (
      <div className="App">
        <NavBarMobile /> 
        <Route exact path="/" render={props => <Homepage scrollToTop={this.scrollToTop} requiredEmailMessage={this.requiredEmailMessage} message={this.state.message} validateEmail={this.validateEmail} loading={this.state.loading} allStats={this.state.allStats}/> } />
        <Route exact path="/calories-and-macros" render={props => <CalculationsContainer {...props} validateEmail={this.validateEmail} emailValid={this.state.emailValid} auth={this.state.auth} loading={this.state.loading} showResultsPage={this.showResultsPage} showResults={this.state.showResults} mobileDevice={this.state.mobileDevice} substractOneFromStep={this.substractOneFromStep} scrollToTop={this.scrollToTop} stepNumber={this.state.stepNumber} addOneToStep={this.addOneToStep}/> } />
        <Route exact path="/macros-breakdown" render={props => <MacrosBreakdownForm /> } />
        <Route exact path="/thank-you" render={props => <ThankYouBcm /> } />
        <Route exact path="/invite" render={props => <Invite mobileDevice={this.state.mobileDevice} {...props} /> } />
        <Route exact path="/unleash-your-fitness-potential" render={props => <LandingPage /> } />
        <Route exact path="/thank-you-purchase-completed" render={props => <ThankYouAfterPurchase /> } />
        <Route exact path="/food-list" render={props => <FoodListContainer setFoodListStepNumber={this.setFoodListStepNumber} {...props}/> } />
        <Route exact path="/bmi-calculator" render={props => <BmiCalculatorContainer {...props}/> } />
        {this.state.stepNumber === 0 || this.state.showResults === true ? <Footer /> : null }
      </div>
    )
  }
}

// <NavBar /><br/><br/><br/><br/>


export default App;
