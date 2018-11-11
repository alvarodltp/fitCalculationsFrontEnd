import React from 'react';
import '../App.css';
import NavBar from './NavBar'
import AppIntro from './AppIntro'
import CalculationsContainer from './CalculationsContainer'
import Footer from './Footer'


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <AppIntro />
        <CalculationsContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
