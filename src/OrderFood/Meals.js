import React from 'react'
import {Button} from 'semantic-ui-react'

class Meals extends React.Component {
  render(){
    return(
      <React.Fragment>
        <div className="meal-cards-container">
        {this.props.meals.map(meal => 
          <div key={meal.id} className="meal-card">
            <img style={{width: "100%", height: "45%", margin: "0"}} src={meal.image} />

            <div style={{padding: "15px", textAlign: "left"}}>
              <h4 style={{margin: "0", marginBottom: "8px", fontSize: "14px"}}>{meal.name}</h4>
              <p style={{margin: "0", fontSize: "12px"}}>{meal.description}</p>
              <p style={{margin: "0", fontSize: "12px"}}>${meal.price}</p>
            </div>

            <div style={{bottom: "0", textAlign: "center", background: "#F1B727", color: "white"}}>
              <h4 style={{margin: "0"}}>{meal.calories} Calories</h4>
            </div><br/>

            {meal.quantity > 0 ? 
            <div style={{display:"flex", justifyContent: "center", marginBottom: "20px"}}>
              <Button onClick={(e) => {this.props.addOrRemoveMeal(e, meal.id)}}>-</Button>
              <h4 style={{padding: "15px", margin: "0px 15px"}}>{meal.quantity}</h4>
              <Button onClick={(e) => {this.props.addOrRemoveMeal(e, meal.id)}}>+</Button>
            </div> :
            <Button style={{margin: "0 auto", width: "80%", marginBottom: "20px"}} onClick={(e) => {this.props.addOrRemoveMeal(e, meal.id)}} id="button-mobile">+ Add</Button> }
          </div> )}
        </div>
      </React.Fragment>
    )
  }
}

export default Meals