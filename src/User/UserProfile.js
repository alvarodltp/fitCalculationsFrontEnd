import React from 'react'
import {Image} from 'semantic-ui-react'
import Calories from './Calories'

class UserProfile extends React.Component {
  constructor(){
    super()
    this.state={

    }
  }

  render() {
  debugger
    return (
      <React.Fragment>
        <div id="card-dashboard">
          <p style={{position: "relative", width: "0", height: "0", textAlign: "left", color: "white", fontSize: "10px", marginBottom: "0px"}}>Goal</p>
          <h1 style={{fontSize: "35px", marginTop: "0px", alignItems: "center"}}>{`${this.props.currentUserStats.goal} For ${this.props.currentUserStats.reason_to_get_fit}`}</h1>
        </div>

        <div className="user-profile-dash-calories">
          <div id="card-dashboard">
            <p style={{position: "relative", width: "0", height: "0", textAlign: "left", color: "white", fontSize: "10px", marginBottom: "0px"}}>Weight</p>
            <h1 style={{fontSize: "35px", marginTop: "0px"}}>{this.props.currentUserStats.weight_in_lb} lb.</h1>
          </div>

          <div id="card-dashboard">
            <p style={{position: "relative", width: "0", height: "0", textAlign: "left", color: "white", fontSize: "10px", marginBottom: "0px"}}>Age</p>
            <h1 style={{fontSize: "35px", marginTop: "0px", alignItems: "center"}}>{this.props.currentUserStats.age}</h1>
          </div>

          <div id="card-dashboard">
            <p style={{position: "relative", width: "0", height: "0", textAlign: "left", color: "white", fontSize: "10px", marginBottom: "0px"}}>Bmi</p>
            <h1 style={{fontSize: "35px", marginTop: "0px", alignItems: "center"}}>{this.props.currentUserStats.bmi}</h1>
          </div>

          <div id="card-dashboard">
            <p style={{position: "relative", width: "0", height: "0", textAlign: "left", color: "white", fontSize: "10px", marginBottom: "0px"}}>Height</p>
            <h1 style={{fontSize: "35px", marginTop: "0px", alignItems: "center"}}>{this.props.currentUserStats.height_in_feet}'{this.props.currentUserStats.height_in_inches}</h1>
          </div>

          <div id="card-dashboard" className="body-type-dashboard">
            <p style={{textAlign: "left", color: "white", fontSize: "10px", marginBottom: "0px"}}>{`Body Type - ${this.props.currentUserStats.body_type}`}</p>
            <Image style={{margin: "0 auto"}} src={`/${this.props.currentUserStats.body_type}.jpg`} />
          </div>

          <div id="card-dashboard" className="bmr-dashboard">
            <p style={{position: "relative", width: "0", height: "0", textAlign: "left", color: "white", fontSize: "10px", marginBottom: "0px"}}>Bmr</p>
            <h1 style={{fontSize: "35px", marginTop: "0px"}}>{this.props.currentUserStats.bmr}</h1>
          </div>

          <div id="card-dashboard" className="maintcal-dashboard">
            <p style={{position: "relative", width: "0", height: "0", textAlign: "left", color: "white", fontSize: "10px", marginBottom: "0px"}}>Maintainance Calories</p>
            <h1 style={{fontSize: "35px", marginTop: "0px"}}>{this.props.currentUserStats.calories_to_maintain}</h1>
          </div>
          <div id="card-dashboard" className="goalcal-dashboard">
            <p style={{position: "relative", width: "0", height: "0", textAlign: "left", color: "white", fontSize: "10px", marginBottom: "0px"}}>Goal Calories</p>
            <h1 style={{fontSize: "35px", marginTop: "0px"}}>{this.props.currentUserStats.calories_for_goal}</h1>
          </div>

          <div id="card-dashboard" className="calories-container">
            <Calories currentUserStats={this.props.currentUserStats}/>
          </div>

        </div>



      </React.Fragment>
    )
  }
}

export default UserProfile
