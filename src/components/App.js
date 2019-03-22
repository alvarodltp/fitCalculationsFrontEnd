import ReactGA from 'react-ga';
import React from 'react';
import '../App.css';
import NavBar from './NavBar'
import AppIntro from './AppIntro'
import CalculationsContainer from './CalculationsContainer'
import Footer from './Footer'
import { BrowserRouter, Route } from 'react-router-dom'
import NutritionPackageHeader from './NutritionPackageHeader'
import Homepage from './Homepage'
import ServicesContainer from './ServicesContainer'
import MacrosBreakdownForm from './MacrosBreakdownForm'
import Confetti from 'react-dom-confetti';
import ThankYouBcm from './ThankYouBcm'
import Invite from './Invite'

class App extends React.Component {
  constructor(){
    super()
    this.state={
      stepNumber: 0,
      mobileDevice: false
    }
  }


componentDidMount() {
  this.initGA()
  this.logPageView()
  this.isMobileDevice()
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
  this.scrollToBottom()
}

scrollToTop = () => {
 window.scrollTo(0, 0)
}

// scrollToBottom = () => {
//   window.scrollTo(0,9999);
// }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path="/" render={props => <Homepage /> } />
        <Route exact path="/services" render={props => <ServicesContainer /> } />
        <Route exact path="/testing-fit" render={props => <CalculationsContainer {...props} mobileDevice={this.state.mobileDevice} substractOneFromStep={this.substractOneFromStep} scrollToTop={this.scrollToTop} stepNumber={this.state.stepNumber} addOneToStep={this.addOneToStep}/> } />
        <Route exact path="/macros-breakdown" render={props => <MacrosBreakdownForm /> } />
        <Route exact path="/thank-you" render={props => <ThankYouBcm /> } />
        <Route exact path="/invite" render={props => <Invite mobileDevice={this.state.mobileDevice} {...props} /> } />
        {this.state.stepNumber === 0 || this.state.stepNumber === 5 ? <Footer /> : null }

      </div>
    )
  }
}

// <NavBar /><br/><br/><br/><br/>


export default App;
