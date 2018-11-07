import React from 'react'
import Steps from './Steps'
import UserInfoForm from './UserInfoForm'

class CalculationsContainer extends React.Component {
  constructor(){
    super()
    this.state={
      name: "",
      gender: "",
      weightKg: "",
      weightLb: "",
      heightCm: "",
      heightFeet: "",
      age: "",
      activityLevel: "",
      goal: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  getGender = (e) => {
    this.setState({
      gender: e.target.innerText
    })
  }

  getGoal = (e) => {
    this.setState({
    goal: e.target.innerText
    })
  }

  getActivityLevel = (e) => {
    this.setState({
    activityLevel: e.target.innerText
    })
  }

  render(){
    return(
      <React.Fragment>
        <Steps />
        <UserInfoForm handleChange={this.handleChange} getGoal={this.getGoal} getGender={this.getGender} getActivityLevel={this.getActivityLevel}/>
      </React.Fragment>
    )
  }
}

export default CalculationsContainer
