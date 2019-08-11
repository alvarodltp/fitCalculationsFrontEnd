import React from 'react'
import { Card, Button } from 'semantic-ui-react'

const ExistingFoodLists = (props) => {
  return( 
    <React.Fragment>
      {props.foodList.map(list =>
      <div className="grocery-list-card">
        <div style={{padding: "20px"}}>
          <h4>{list.name}</h4>
          <p style={{fontSize: "12px"}}>{list.date}</p>
          <h4 style={{color: "green", margin: "14px"}}>${list.total_cost}</h4>
          <Button onClick={(e) => {props.getAllFoodsForSelectedList(e, list.id)}} basic color='green'>
            Open
          </Button>
          <Button onClick={(e) => {props.removeFoodList(e, list.id)}} basic color='red'>
            Delete
          </Button>
        </div> 
      </div> )}
    </React.Fragment>
  )    
}

export default ExistingFoodLists
