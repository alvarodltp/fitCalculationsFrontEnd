import React from 'react'
import { Message, Button } from 'semantic-ui-react'

const OrderDetails = (props) => {
  // let weightToLose = props.currentUserStatsNewCalc.weight_to_manage.split("-")[1];
  let mealsList = props.meals.filter(meal => meal["quantity"] > 0)
  return(
    <React.Fragment>
      <div>
        <Message color={props.color}>{props.message}</Message>
        <Button onClick={props.editOrder} id="button">Edit Order</Button>
        <h1 style={{textAlign: "left", marginLeft: "20px"}}>Order Details</h1>
        {mealsList.map(meal => <p style={{textAlign: "left", marginLeft: "20px"}}>{meal.quantity} - {meal.name}</p>)}
      </div>
      
    </React.Fragment>
  )
}

export default OrderDetails