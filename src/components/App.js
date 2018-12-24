import React from 'react';
import '../App.css';
import NavBar from './NavBar'
import AppIntro from './AppIntro'
import CalculationsContainer from './CalculationsContainer'
import Footer from './Footer'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter, Route } from 'react-router-dom'
library.add(faIgloo)
library.add(fas)

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
