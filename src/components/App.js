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

class App extends React.Component {
  constructor(){
    super()
    this.state={
      stepNumber: 1
    }
  }


componentDidMount() {
  this.initGA()
  this.logPageView()
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

scrollToTop = () => {
 window.scrollTo(0, 0)
}


  render() {
    return (
      <div className="App">
        <NavBar /><br/><br/><br/><br/>
        <Route exact path="/" render={props => <Homepage /> } />
        <Route exact path="/services" render={props => <ServicesContainer /> } />
        <Route exact path="/bmr-calories-macros" render={props => <CalculationsContainer {...props} scrollToTop={this.scrollToTop} stepNumber={this.state.stepNumber} addOneToStep={this.addOneToStep}/> } />
        <Route exact path="/macros-breakdown" render={props => <MacrosBreakdownForm /> } />
        <Route exact path="/thank-you-bcm" render={props => <ThankYouBcm /> } />
        <Footer />
      </div>
    );
  }
}

export default App;
