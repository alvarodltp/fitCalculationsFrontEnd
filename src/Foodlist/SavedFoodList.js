import React from 'react'
import { Checkbox, Button, Divider, Input } from 'semantic-ui-react'

const SavedFoodList = (props) => {
  return(
    <React.Fragment>
      <div>
        <h1 style={{marginTop: "30px"}}>Your List</h1>
        {props.foodsForSelectedList.map(food =>
        <div>
          <Checkbox id={food.id} checked={food.isChecked} onChange={(e, food) => {props.handleChangeOnSavedList(e, food)}} style={{width: "80%", margin: "0 auto", marginBottom: "10px"}} label={food.name} />
        </div> )} <br/>
        <Button id="button-mobile" onClick={props.clearSelectedFoods}>Go Back To Saved Lists</Button>
        <Button id="button-mobile" onClick={props.clearSelectedFoods}>Finish Shopping</Button>
      </div>
    </React.Fragment>
  )
}

export default SavedFoodList
