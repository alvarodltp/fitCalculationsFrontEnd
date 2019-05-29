import ReactGA from 'react-ga';
import React, { Component } from 'react';
import '../App.css';
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
import FoodListContainer from './FoodListContainer'
import Profile from './Profile'
import Auth from "../Auth/Auth"
import OTraining from './OTraining'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      stepNumber: 0,
      mobileDevice: null,
      showResults: false,
      loading: true,
      auth: new Auth(this.props.history),
      allStats: null,
      loading: true
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


  render() {

    const ReactPixel =  require('react-facebook-pixel');

    return (
      <div className="App">
        {this.state.mobileDevice === true ? <NavBarMobile /> : <NavBar/> }
        <Route exact path="/training" render={props => <OTraining {...props}/> } />
        <Route exact path="/asdad" render={props => <Auth {...props}/> } />
        <Route exact path="/testeando" render={props => <Homepage loading={this.state.loading} allStats={this.state.allStats}/> } />
        <Route exact path="/" render={props => <CalculationsContainer {...props} auth={this.state.auth} loading={this.state.loading} showResultsPage={this.showResultsPage} showResults={this.state.showResults} mobileDevice={this.state.mobileDevice} substractOneFromStep={this.substractOneFromStep} scrollToTop={this.scrollToTop} stepNumber={this.state.stepNumber} addOneToStep={this.addOneToStep}/> } />
        <Route exact path="/macros-breakdown" render={props => <MacrosBreakdownForm /> } />
        <Route exact path="/thank-you" render={props => <ThankYouBcm /> } />
        <Route exact path="/invite" render={props => <Invite mobileDevice={this.state.mobileDevice} {...props} /> } />
        <Route exact path="/unleash-your-fitness-potential" render={props => <LandingPage /> } />
        <Route exact path="/thank-you-purchase-completed" render={props => <ThankYouAfterPurchase /> } />
        <Route exact path="/food-list" render={props => <FoodListContainer setFoodListStepNumber={this.setFoodListStepNumber} {...props}/> } />
        <Route path="/profile" render={props => <Profile {...props} auth={this.state.auth} /> } />

      </div>
    )
  }
}

// <NavBar /><br/><br/><br/><br/>
//   {this.state.stepNumber === 0 || this.state.showResults === true ? <Footer /> : null }

export default App;
