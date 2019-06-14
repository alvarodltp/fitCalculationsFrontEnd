import React from 'react'
import { Card, Button } from 'semantic-ui-react'

const ExistingFoodLists = (props) => {
  return(
    <React.Fragment>
    <div>
      {props.foodList.map(list =>
       <Card>
        <Card.Content>
          <Card.Header>Grocery List</Card.Header>
          <Card.Description>
           {list.date}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button onClick={(e) => {props.getAllFoodsForSelectedList(e, list.id)}} basic color='green'>
              Open
            </Button>
            <Button onClick={(e) => {props.removeFoodList(e, list.id)}} basic color='red'>
              Delete
            </Button>
          </div>
        </Card.Content>
      </Card> )}
    </div>

    </React.Fragment>
  )
}

export default ExistingFoodLists
