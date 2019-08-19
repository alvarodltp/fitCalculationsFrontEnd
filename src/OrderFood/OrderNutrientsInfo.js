import React from 'react'
import { Button } from 'semantic-ui-react'

const OrderNutrientsInfo = (props) => {
  let caloriesAdded = props.meals.map(meal => meal.quantity * meal.calories).reduce((a, b) => a + b)
  return(
    <React.Fragment>
      <div className="nutrition-info" style={{display: "flex", justifyContent: "space-between"}}>
        <div style={{margin: "25px", textAlign: "left"}}>
          <h4>Weekly Goal Calories to <br/>{props.currentUserStatsNewCalc.goal}</h4>  
          <p>{props.currentUserStatsNewCalc.calories_for_goal} x 7 days = {props.currentUserStatsNewCalc.calories_for_goal * 7}</p>
        </div>

        <div style={{margin: "25px", textAlign: "left"}}>
          <h4>Your current <br/>calories ordered</h4>  
            <p>{caloriesAdded}</p>
          </div>
          <div style={{margin: "25px"}}>
            <Button disabled={props.disabled} onClick={() => {props.showOrderDetails(caloriesAdded)}} style={{marginTop: "20px"}} id="button">Continue To Order</Button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default OrderNutrientsInfo