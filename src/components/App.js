import React from 'react';
import '../App.css';
import NavBar from './NavBar'
import AppIntro from './AppIntro'
import CalculationsContainer from './CalculationsContainer'
import Footer from './Footer'



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

  render() {
    return (
      <div className="App">
        <NavBar /><br/><br/><br/><br/>
        <CalculationsContainer stepNumber={this.state.stepNumber} addOneToStep={this.addOneToStep}/>
        <Footer />
      </div>
    );
  }
}

export default App;
