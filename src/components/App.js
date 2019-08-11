import ReactGA from 'react-ga';
import React from 'react';
import '../App.scss';
import CalculationsContainer from './CalculationsContainer'
import { Route, Switch } from 'react-router-dom'
import Homepage from './Homepage'
import MacrosBreakdownForm from './MacrosBreakdownForm'
import ThankYouBcm from './ThankYouBcm'
import Invite from './Invite'
import LandingPage from './LandingPage'
import ThankYouAfterPurchase from './ThankYouAfterPurchase'
import ReactPixel from 'react-facebook-pixel';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import FoodListContainer from '../Foodlist/FoodListContainer'
import BmiCalculatorContainer from '../BmiCalculator/BmiCalculatorContainer'
import BlogContainer from '../Blog/BlogContainer'
import AllToolsContainer from '../Tools/AllToolsContainer'
import Nav from './Nav'
import * as contentful from 'contentful'
import BlogPage from '../Blog/BlogPage'
import AllProgramsContainer from '../Programs/AllProgramsContainer'
import NotFound from './NotFound'
import Contact from './Contact'
import SignUp from '../User/SignUp'
import Login from '../User/Login'
import UserDashboard from '../User/UserDashboard'

const requestHelper = url =>
  fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  }).then(res => {
    if(res.status === 401){
      alert("signup failed");
    } else {
      return res.json();
    }
  });


class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      user: null,
      currentUserStats: null,
      currentUserStatsNewCalc: null,
      stepNumber: 0,
      mobileDevice: null,
      showResults: false,
      loading: true,
      allStats: null,
      loading: true,
      emailValid: true,
      message: "",
      posts: null,
      allFields: null,
      programs: [
        {
          name: '8-Week Lean',
          description: 'Work your core and abs like never before in this 30 day abs program!',
          price: "$67.00",
          image: "abs1.jpg",
          link: "https://fit-calculations.thrivecart.com/30-days-abs/",
          tags: ["Cardio", "Abs"]
        },
        {
          name: '12-Week Lean',
          description: 'Get a complete report on your nutrition needs, and start seeing results with our easy to follow guide!',
          price: "$67.00",
          image: "diet-booklet.png",
          link: "no-diets",
          tags: ["General", "Nutrition"]
        },
        {
          name: '8-Week Mass',
          description: 'A professionally made plan based on your goals and preferences!',
          price: "$97.00",
          image: "fish-taco.jpg",
          link: "https://fit-calculations.thrivecart.com/personalized-nutrition-plan/",
          tags: ["Nutrition"]
        },
        {
          name: '12-Week Mass',
          description: 'Burn more fat than you ever thought possible in only 30 days!',
          price: "$97.00",
          image: "cardio.jpg",
          link: "https://fit-calculations.thrivecart.com/30-day-fat-blasting-cardio/",
          tags: ["Cardio", "Lose Fat"]
        },
      ]
    }
  }

  fetchUser = () => {
    requestHelper("https://fitcalculations-api.herokuapp.com/profile").then(json => this.updateUser(json.user));
  };

componentDidMount() {
  if(localStorage.getItem("token")) {
    this.fetchUser();
  };
  this.initGA();
  this.logPageView();
  this.isMobileDevice();
  this.getAllStats();
  this.fetchPosts().then(this.setPosts)
  // this.initializeIntercom()
  ReactPixel.init('433459070732534');
}

updateNewUser = (user) => {
  this.setState({
    user: user.user
  });
};

updateUser = (user) => {
  this.setState({
    user: user
  }, this.getUserStats(user))
}

getUserStats = (user) => {
  // debugger
  let userId;
  if(user === undefined){
     this.state.user != null ? userId = this.state.user.id : userId = ""
  } else {
    userId = user.id
  }
  debugger
  if(userId != ""){
    fetch("https://fitcalculations-api.herokuapp.com/stats")
    .then(response => response.json())
    .then(json => {
      let currentUserStats = json.filter(stat => stat.user_id === userId)
      let lastStat = currentUserStats[currentUserStats.length - 1]
      debugger
      this.setState({
        currentUserStats: currentUserStats,
        currentUserStatsNewCalc: lastStat
      }, () => this.props.history.push('/profile'))
    })
  }
}

logOut = () => {
  localStorage.clear()
  this.setState({
    user: null,
    currentUserStats: null,
    currentUserStatsNewCalc: null
  })
  this.props.history.push('/')
}

client = contentful.createClient({
  space: '3pn0fc4ta32y',
  accessToken: 'O7n9vC7nnluKegqPfYuD78Cbt3a0sEHXznkuK_HRdl8'
})

fetchPosts = () => this.client.getEntries()

setPosts = response => {
  this.setState({
    posts: response.items
  });
}

getAllStats = () => {
  fetch("http://localhost:3001/stats")
  .then(response => response.json())
  .then(json => {
    this.setState({
      allStats: json,
      loading: false
    })
  })
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

addOneToStep = (stats) => {
  if(stats === undefined) {
    this.setState({
      stepNumber: this.state.stepNumber + 1
    })
  } else {
    this.setState({
      stepNumber: this.state.stepNumber + 1,
      currentUserStats: stats
    }, () => this.getUserStats())
  }
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

handleChange = (e) => {
  let lastStat = this.state.currentUserStatsNewCalc
  lastStat[e.target.name] = e.target.value
  this.setState({
    currentUserStatsNewCalc: lastStat
  })
}

handleChangeDropdown = (value, fieldName) => {
  let lastStat = this.state.currentUserStatsNewCalc
  lastStat[fieldName] = value
  debugger
  this.setState({
    currentUserStatsNewCalc: lastStat
  })
}

  render() {
    debugger
    return (
      <React.Fragment>
      <div className="App">
          <Route render={props => <Nav {...props} currentUserStats={this.state.currentUserStats} user={this.state.user} logOut={this.logOut}/> } />
        <Switch>
          {this.state.posts != null ? <Route exact path="/" render={() => <Homepage programs={this.state.programs} posts={this.state.posts} mobileDevice={this.state.mobileDevice} scrollToTop={this.scrollToTop}
          requiredEmailMessage={this.requiredEmailMessage} message={this.state.message} validateEmail={this.validateEmail} loading={this.state.loading} allStats={this.state.allStats}/> } /> : null }
          <Route path="/calories-and-macros" render={props => <CalculationsContainer {...props} updateNewUser={this.updateNewUser} validateEmail={this.validateEmail} emailValid={this.state.emailValid} auth={this.state.auth} loading={this.state.loading} showResultsPage={this.showResultsPage}
          showResults={this.state.showResults} mobileDevice={this.state.mobileDevice} substractOneFromStep={this.substractOneFromStep} scrollToTop={this.scrollToTop} stepNumber={this.state.stepNumber} addOneToStep={this.addOneToStep}/> } />
          <Route path="/macros-breakdown" render={() => <MacrosBreakdownForm /> } />
          <Route path="/thank-you" render={() => <ThankYouBcm /> } />
          <Route path="/invite" render={props => <Invite mobileDevice={this.state.mobileDevice} {...props} /> } />
          <Route path="/no-diets" render={() => <LandingPage /> } />
          <Route path="/thank-you-purchase-completed" render={() => <ThankYouAfterPurchase /> } />
          <Route path="/food-list" render={props => <FoodListContainer {...props}/> } />
          <Route path="/bmi-calculator" render={props => <BmiCalculatorContainer {...props}/> } />
          {this.state.posts != null ? <Route exact path="/blog" render={props => <BlogContainer {...props} scrollToTop={this.scrollToTop} posts={this.state.posts }/> } /> : null}
          {this.state.posts != null ? <Route path='/blog/:blogPage' render={props => <BlogPage {...props} posts={this.state.posts} scrollToTop={this.scrollToTop}/> } /> : null}
          <Route exact path="/tools" render={props => <AllToolsContainer {...props}/> } />
          <Route exact path="/programs" render={props => <AllProgramsContainer {...props} programs={this.state.programs} scrollToTop={this.scrollToTop}/> } />
          <Route exact path="/contact" render={() => <Contact/> } />
          <Route exact path="/signup" render={props => <SignUp {...props} updateNewUser={this.updateNewUser}/> } />
          <Route exact path='/login' render={props=> <Login {...props} getUserStats={this.getUserStats} updateUser={this.updateUser} />} />
          {this.state.currentUserStats != null ? <Route exact path="/profile" render={props => <UserDashboard {...props} getUserStats={this.getUserStats} handleChange={this.handleChange} handleChangeDropdown={this.handleChangeDropdown} currentUserStatsNewCalc={this.state.currentUserStatsNewCalc} currentUserStats={this.state.currentUserStats} logOut={this.logOut}/> } /> : null }
          <MessengerCustomerChat pageId="404467583623796" appId="1076264422567096" />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
      </React.Fragment>
    )
  }
}


export default App;
