import React from 'react';
import '../App.css';
import NavBar from './NavBar'
import AppIntro from './AppIntro'
import CalculationsContainer from './CalculationsContainer'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <AppIntro />
        <CalculationsContainer />
      </div>
    );
  }
}

export default App;
