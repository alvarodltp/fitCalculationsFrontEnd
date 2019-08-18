import React from 'react'
import { Card, Image, Button, Divider, Message } from 'semantic-ui-react'
import ExistingFoodLists from './ExistingFoodLists'

const FoodListCard = (props) => {
  return(
    <React.Fragment>
      <div style={{margin: "0 auto"}}>
        <h1 style={{marginTop: "30px"}}>Your Lists</h1>
        {props.foodList === null || props.foodList.length < 9 ?
        <Button id="button" style={{margin: "30px"}} onClick={() => {props.setFoodTypes(); props.createNew()}}>Create New</Button> :
        <Message style={{marginTop: "40px"}} color='yellow'>You have reached your limit of 10 lists. Delete a list to create a new one</Message> }
      </div>
      <div style={{alignItems: "left"}}>
        <ExistingFoodLists getDollarAmount={props.getDollarAmount} addPriceToList={props.addPriceToList} getAllFoodsForSelectedList={props.getAllFoodsForSelectedList} foodList={props.foodList} removeFoodList={props.removeFoodList} user={props.user}/>
      </div>
    </React.Fragment>
  )
}

export default FoodListCard
