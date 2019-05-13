import React from 'react'
import { Card, Image, Button, Divider } from 'semantic-ui-react'

const FoodListCard = (props) => {
  return(
    <React.Fragment>
    <Divider style={{fontSize: "35px", fontStyle: "italic", marginTop: "40px"}} horizontal>
        Your Saved Lists
    </Divider>
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
    {props.userFoodLists.map(foodList =>
      <Card>
       <Card.Content>
         <Card.Header>Grocery Shopping List</Card.Header>
         <Card.Description>
           {foodList.date}
         </Card.Description>
       </Card.Content>
       <Card.Content extra>
         <div className='ui two buttons'>
           <Button basic color='green'>
             Open
           </Button>
           <Button basic color='red'>
             Delete
           </Button>
         </div>
       </Card.Content>
     </Card> )}
   </React.Fragment>
  )
}

export default FoodListCard
