import React from 'react'
import Macros from './Macros'
import MacroPercentage from './MacroPercentage'

class UserProfile extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="user-profile-dash-calories">
          <div id="card-dashboard-gradient" className="weight-dash">
            <p style={{color: "white", fontSize: "14px"}}>Weight</p>
            <h2 style={{fontSize: "20px", color: "white", marginTop: "0px"}}>{this.props.currentUserStats.weight_in_lb} lb.</h2>
          </div>

          <div id="card-dashboard-gradient" className="goal-cal-dash">
            <p style={{color: "white", fontSize: "14px"}}>Goal Calories</p>
            <h2 style={{fontSize: "20px", color: "white", marginTop: "0px"}}>{this.props.currentUserStats.calories_for_goal}</h2>
          </div>

          <div id="card-dashboard-gradient" className="bmr-dash">
            <p style={{color: "white", fontSize: "14px"}}>BMR</p>
            <h2 style={{fontSize: "20px", color: "white", marginTop: "0px"}}>{this.props.currentUserStats.bmr}</h2>
          </div>

          <div id="card-dashboard-gradient" className="bmi-dash">
            <p style={{color: "white", fontSize: "14px"}}>BMI</p>
            <h2 style={{fontSize: "20px", color: "white", marginTop: "0px"}}>{this.props.currentUserStats.bmi}</h2>
          </div>

          <div id="card-dashboard" className="protein-container">
            <p style={{color: "black", fontSize: "14px"}}>Protein</p>
            <h2 style={{fontSize: "20px", color: "#2761f1", marginTop: "0px"}}>{this.props.currentUserStats.protein_grams}g</h2>
          </div>
          <div id="card-dashboard" className="carbs-container">
            <p style={{color: "black", fontSize: "14px"}}>Carbs</p>
            <h2 style={{fontSize: "20px", color: "#2761f1", marginTop: "0px"}}>{this.props.currentUserStats.carb_grams}g</h2>
          </div>
          <div id="card-dashboard" className="fats-container">
            <p style={{color: "black", fontSize: "14px"}}>Fats</p>
            <h2 style={{fontSize: "20px", color: "#2761f1", marginTop: "0px"}}>{this.props.currentUserStats.fat_grams}g</h2>
          </div>

          <div id="card-dashboard" className="macros-chart">
            <Macros currentUserStats={this.props.currentUserStats}/>
          </div>

          <div id="card-dashboard" className="macros-perc-chart">
            <MacroPercentage currentUserStats={this.props.currentUserStats}/>
          </div>

          <div id="card-dashboard" className="protein-perc-container">
            <p style={{color: "black", fontSize: "14px"}}>Protein %</p>
            <h2 style={{fontSize: "20px", color: "#2761f1", marginTop: "0px"}}>{this.props.currentUserStats.protein_percentage}%</h2>
          </div>
          <div id="card-dashboard" className="carbs-perc-container">
            <p style={{color: "black", fontSize: "14px"}}>Carbs %</p>
            <h2 style={{fontSize: "20px", color: "#2761f1", marginTop: "0px"}}>{this.props.currentUserStats.carb_percentage}%</h2>
          </div>
          <div id="card-dashboard" className="fats-perc-container">
            <p style={{color: "black", fontSize: "14px"}}>Fats %</p>
            <h2 style={{fontSize: "20px", color: "#2761f1", marginTop: "0px"}}>{this.props.currentUserStats.fat_percentage}%</h2>
          </div>
        </div>

      </React.Fragment>
    )
  }
}

export default UserProfile

// <div id="card-dashboard" className="macros-chart">
//   <Macros currentUserStats={this.props.currentUserStats}/>
// </div>
