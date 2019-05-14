import React from 'react'
import { Card, Button } from 'semantic-ui-react'

const ExistingFoodLists = (props) => {
  return(
    <React.Fragment>
    {props.foodList === null ?
    <h1>You don't have any food lists yet</h1> :
    <div>
      {props.foodList.map(list =>
       <Card>
        <Card.Content>
          <Card.Header>Grocery Shopping List</Card.Header>
          <Card.Description>
           {list.date}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic color='green'>
              Open
            </Button>
            <Button onClick={(e) => {props.removeFoodList(e, list.id)}} basic color='red'>
              Delete
            </Button>
          </div>
        </Card.Content>
      </Card> )}
    </div> }

    </React.Fragment>
  )
}

export default ExistingFoodLists
