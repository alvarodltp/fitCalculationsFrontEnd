import React from 'react'
import './UserDashboard.css'
import DashboardNav from './DashboardNav'
import DashboardMenu from './DashboardMenu'
import DashboardContent from './DashboardContent'


class UserDashboard extends React.Component {
  constructor(){
    super()
    this.state={
      page: 'Profile'
    }
  }

  handleMenuClick = (e) => {
    this.setState({
      page: e.target.parentElement.innerText
    })
  }

  render(){
    return(
      <div id="user-dashboard">
        <DashboardNav currentUserStats={this.props.currentUserStats[this.props.currentUserStats.length - 1]} logOut={this.props.logOut}/>
        <DashboardMenu handleMenuClick={this.handleMenuClick} currentUserStats={this.props.currentUserStats[this.props.currentUserStats.length - 1]}/>
        <DashboardContent page={this.state.page} currentUserStats={this.props.currentUserStats}/>
      </div>
    )
  }
}

export default UserDashboard
