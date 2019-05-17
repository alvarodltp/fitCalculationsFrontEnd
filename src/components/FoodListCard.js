import React from 'react'
import { Card, Image, Button, Divider, Message } from 'semantic-ui-react'
import ExistingFoodLists from './ExistingFoodLists'

const FoodListCard = (props) => {
  return(
    <React.Fragment>
      <div>
          <Divider style={{fontSize: "35px", fontStyle: "italic", marginTop: "50px"}} horizontal>
              Your Lists
          </Divider>
          {props.foodList === null || props.foodList.length < 6 ?
        <Card>
          <Card.Content>
             <Card.Header>Add New Grocery Shopping List</Card.Header>
             <Card.Description>
             </Card.Description>
           </Card.Content>
           <Card.Content extra>
             <Button onClick={props.setFoodTypes} basic color='green'>
               Create New
             </Button>
           </Card.Content>
         </Card> :

         <Message style={{marginTop: "40px"}} color='yellow'>You have reached your limit of 6 lists. Delete a list to create a new one</Message> }

         {props.user !== undefined ?
         <ExistingFoodLists getAllFoodsForSelectedList={props.getAllFoodsForSelectedList} foodList={props.foodList} removeFoodList={props.removeFoodList} user={props.user}/> : null }
       </div>
    </React.Fragment>
  )
}

export default FoodListCard
