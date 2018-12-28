import React from 'react';
import '../App.css';
import NavBar from './NavBar'
import AppIntro from './AppIntro'
import CalculationsContainer from './CalculationsContainer'
import Footer from './Footer'
import { BrowserRouter, Route } from 'react-router-dom'
import NutritionPackageHeader from './NutritionPackageHeader'

class App extends React.Component {
  constructor(){
    super()
    this.state={
      stepNumber: 1
    }
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
        <Route exact path="/nutrition-package-calculation" render={props => <CalculationsContainer {...props} scrollToTop={this.scrollToTop} stepNumber={this.state.stepNumber} addOneToStep={this.addOneToStep}/> } />
        <Footer />
      </div>
    );
  }
}

export default App;
