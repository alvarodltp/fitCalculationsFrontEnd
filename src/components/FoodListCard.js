import React from 'react'
import { Card, Image, Button, Divider } from 'semantic-ui-react'
import ExistingFoodLists from './ExistingFoodLists'

const FoodListCard = (props) => {
  return(
    <React.Fragment>
      <Divider style={{fontSize: "35px", fontStyle: "italic", marginTop: "40px"}} horizontal>
          Your Lists
      </Divider>

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
     </Card>

     {props.user !== undefined ?
     <ExistingFoodLists openSavedList={props.openSavedList} foodList={props.foodList} removeFoodList={props.removeFoodList} user={props.user}/> : null }

    </React.Fragment>
  )
}

export default FoodListCard
