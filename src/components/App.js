import ReactGA from 'react-ga';
import React, { Component } from 'react';
import '../App.scss';
import NavBar from '../NavBar/NavBar'
import SlidingNavBar from '../NavBar/SlidingNavBar'
import {Segment, Menu} from 'semantic-ui-react'
import CalculationsContainer from './CalculationsContainer'
import Footer from './Footer'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Homepage from './Homepage'
import MacrosBreakdownForm from './MacrosBreakdownForm'
import ThankYouBcm from './ThankYouBcm'
import Invite from './Invite'
import LandingPage from './LandingPage'
import ThankYouAfterPurchase from './ThankYouAfterPurchase'
import ReactPixel from 'react-facebook-pixel';
import FoodListContainer from '../Foodlist/FoodListContainer'
import BmiCalculatorContainer from '../BmiCalculator/BmiCalculatorContainer'
import BlogContainer from '../Blog/BlogContainer'
import Calculators from './Calculators'
import TheNav from './TheNav'
import * as contentful from 'contentful'
import BlogPage from '../Blog/BlogPage'
import AllPrograms from '../Programs/AllPrograms'
import NotFound from './NotFound'


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
      emailValid: true,
      message: "",
      posts: null,
      allFields: null
    }
  }



componentDidMount() {
  this.initGA();
  this.logPageView();
  this.isMobileDevice();
  this.getAllStats();
  this.fetchPosts().then(this.setPosts)
  // this.initializeIntercom()
  ReactPixel.init('433459070732534');
}

client = contentful.createClient({
  space: '3pn0fc4ta32y',
  accessToken: 'O7n9vC7nnluKegqPfYuD78Cbt3a0sEHXznkuK_HRdl8'
})

fetchPosts = () => this.client.getEntries()

setPosts = response => {
  let postsObj = response.items.map(blog => blog.fields).map(post => post.content).map(item => item.content)
  this.setState({
    posts: response.items
  });
}

getAllStats = () => {
  fetch("https://fitcalculations-api.herokuapp.com/stats")
  .then(response => response.json())
  .then(json => {
    this.setState({
      allStats: json,
      loading: false
    });
  });
}

isMobileDevice = () => {
  this.setState({
    mobileDevice: (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1)
  });
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
  });
}

substractOneFromStep = () => {
  this.setState({
    stepNumber: this.state.stepNumber - 1
  });
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
  });
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
  });
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

// getAllFields = () => {
//   let allFields = this.props.posts.map(({fields}, i) => (fields))
//   this.setState({
//     allFields: allFields
//   });
// }

  render() {
    const ReactPixel =  require('react-facebook-pixel');
    return (
      <div className="App">
          <TheNav />
          <Switch>
            {this.state.posts != null ? <Route exact path="/" render={props => <Homepage  posts={this.state.posts} mobileDevice={this.state.mobileDevice} scrollToTop={this.scrollToTop} requiredEmailMessage={this.requiredEmailMessage} message={this.state.message} validateEmail={this.validateEmail} loading={this.state.loading} allStats={this.state.allStats}/> } /> : null }
            <Route path="/calories-and-macros" render={props => <CalculationsContainer {...props} validateEmail={this.validateEmail} emailValid={this.state.emailValid} auth={this.state.auth} loading={this.state.loading} showResultsPage={this.showResultsPage} showResults={this.state.showResults} mobileDevice={this.state.mobileDevice} substractOneFromStep={this.substractOneFromStep} scrollToTop={this.scrollToTop} stepNumber={this.state.stepNumber} addOneToStep={this.addOneToStep}/> } />
            <Route path="/macros-breakdown" render={props => <MacrosBreakdownForm /> } />
            <Route path="/thank-you" render={props => <ThankYouBcm /> } />
            <Route path="/invite" render={props => <Invite mobileDevice={this.state.mobileDevice} {...props} /> } />
            <Route path="/unleash-your-fitness-potential" render={props => <LandingPage /> } />
            <Route path="/thank-you-purchase-completed" render={props => <ThankYouAfterPurchase /> } />
            <Route path="/food-list" render={props => <FoodListContainer {...props}/> } />
            <Route path="/bmi-calculator" render={props => <BmiCalculatorContainer {...props}/> } />
            {this.state.posts != null ? <Route exact path="/blog" render={props => <BlogContainer {...props} posts={this.state.posts}/> } /> : null}
            {this.state.posts != null ? <Route path='/blog/:blogPage' render={props => <BlogPage {...props} posts={this.state.posts}/> } /> : null}
            <Route exact path="/tools" render={props => <Calculators {...props}/> } />
            <Route exact path="/programs" render={props => <AllPrograms {...props} /> } />
            <Route path="*" component={NotFound} />
            {this.state.stepNumber === 2 || this.state.stepNumber === 3 || this.state.stepNumber === 4 ? null  : <Footer /> }
          </Switch>
      </div>

    )
  }
}

// <NavBar /><br/><br/><br/><br/>
// {this.state.stepNumber === 0 || this.state.showResults === true ? <Footer /> : null }

export default App;

// {this.state.mobileDevice === false ? <SlidingNavBar scrollToTop={this.scrollToTop}/> : null }
