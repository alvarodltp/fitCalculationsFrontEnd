import React from 'react'
import { Checkbox, Button, Divider, Input, Select } from 'semantic-ui-react'


const FoodList = (props) => {
  let options = [
  { text: 'All', value: 1 },
  { text: 'Meat And Poultry', value: 2 },
  { text: 'Seafood', value: 3 },
  { text: 'Eggs', value: 4 },
  { text: 'Grains And Pasta', value: 5 },
  { text: 'Beans And Legumes', value: 6 },
  { text: 'Veggies', value: 7 },
  { text: 'Leafy Greens', value: 8 },
  { text: 'Fruit', value: 9 },
  { text: 'Nuts And Seeds', value: 10 },
  { text: 'Nut Butters', value: 11 },
  { text: 'Good Fats', value: 12 },
  { text: 'Beverages', value: 13 },
  { text: 'Other', value: 14 }
]

  return(
    <React.Fragment>
      <Divider style={{fontSize: "35px", fontStyle: "italic", paddingTop: "80px", marginBottom: "50px", marginTop: "0px"}} horizontal>
        Create A New List
      </Divider>
      <div>
        <Select style={{marginBottom: "40px", width: "60%"}} onChange={(e, data) => {props.handleDropdownClick(e, data)}} options={options} placeholder='Filter By Food Category' />
        {props.filteredFoodTypes.map(food =>
        <div>
          <Checkbox id={food.id} checked={food.isChecked} onChange={(e, food) => {props.handleChange(e, food)}} style={{width: "80%", margin: "0 auto", marginBottom: "10px"}} label={food.value} />
        </div> )} <br/>
        <Button disabled={props.disabled} id="button-mobile" onClick={props.backToSavedLists}>Go Back To Saved Lists</Button>
        <Button id="button-mobile" onClick={props.createFoodList}>Save This List</Button>
        {props.maxListLimit !== "" ? <p style={{color: "red", fontSize: "12px", marginBottom:"50px"}}>{props.maxListLimit}</p> : null }
      </div>
    </React.Fragment>
  )
}

export default FoodList
