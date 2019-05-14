import React from 'react'
import { Card, Image, Button, Divider } from 'semantic-ui-react'
import ExistingFoodLists from './ExistingFoodLists'

const FoodListCard = (props) => {
  return(
    <React.Fragment>
      {props.user !== undefined ?
      <Divider style={{fontSize: "35px", fontStyle: "italic", marginTop: "40px"}} horizontal>
          Your Saved Lists
      </Divider> :
      <Divider style={{fontSize: "35px", fontStyle: "italic", marginTop: "40px"}} horizontal>
          Create Your First List
      </Divider> }

      <Card>
       <Card.Content>
         <Card.Header>Add New Grocery Shopping List</Card.Header>
         <Card.Description>
         </Card.Description>
       </Card.Content>
       <Card.Content extra>
         <Button onClick={props.createFoodList} basic color='green'>
           Create New
         </Button>
       </Card.Content>
     </Card>
     
     {props.user !== undefined ?
     <ExistingFoodLists foodList={props.foodList} removeFoodList={props.removeFoodList} user={props.user}/> : null }

    </React.Fragment>
  )
}

export default FoodListCard
