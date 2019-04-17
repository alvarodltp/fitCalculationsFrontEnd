import React from 'react'
import { Checkbox, Divider } from 'semantic-ui-react'

class FoodList extends React.Component {
  render() {

    const foods = [
      {id: 1, value: "Chicken", category: "Protein"},
      {id: 2, value: "Potatoes", category: "Carbs"},
      {id: 3, value: "Olive Oil", category: "Fats"},
      {id: 4, value: "Spinach", category: "Veggies"}
    ]

    return(
      <React.Fragment>
        <Divider style={{fontSize: "35px", fontStyle: "italic", marginTop: "40px"}} horizontal>
            Approved Food List
        </Divider>
        {this.props.foodTypes.map(food =>
          <Checkbox key={food.id} checked={food.isChecked} onChange={this.props.handleChange} style={{width: "80%", margin: "0 auto", marginBottom: "60px"}} label={food.value} />
        )}

        {foods.map(food =>
          <Checkbox key={food.id} checked={food.isChecked} onChange={this.props.handleChangeFood} style={{width: "80%", margin: "0 auto", marginBottom: "60px"}} label={food.value} />
        )}
      </React.Fragment>
    )
  }
}

export default FoodList
