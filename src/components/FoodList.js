import React from 'react'
import { Checkbox, Button, Divider } from 'semantic-ui-react'

const FoodList = (props) => {
  return(
    <React.Fragment>
      <Divider style={{fontSize: "35px", fontStyle: "italic", marginTop: "40px"}} horizontal>
          Create New List
      </Divider>
      <div>
        {props.foodTypes.map(food =>
          <Checkbox id={food.id} checked={food.isChecked} onChange={(e, food) => {props.handleChange(e, food)}} style={{width: "80%", margin: "0 auto", marginBottom: "10px"}} label={food.value} />
        )}
      </div><br/>
      <div>
        <Button id="button-mobile" onClick={props.backToSavedLists}>Go Back To Saved Lists</Button>
        <Button id="button-mobile" onClick={props.createFoodList}>Save This List</Button>
      </div>
    </React.Fragment>
  )
}

export default FoodList
