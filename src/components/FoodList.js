import React from 'react'
import { Checkbox, Divider, Button } from 'semantic-ui-react'

class FoodList extends React.Component {
  constructor(){
    super()
    this.state={
      foodTypes: [
        {id: 1, value: "Chicken", category: "protein", isChecked: false},
        {id: 2, value: "Sweet Potato", category: "carbs", isChecked: false},
        {id: 3, value: "Olive Oil", category: "fats", isChecked: false},
        {id: 4, value: "Green Peppers", category: "veggies", isChecked: false}
      ],
      foodsChecked: []
    }
  }

  handleChange = (e) => {
    let foodTypes = this.state.foodTypes
    foodTypes.forEach(food => {
       if (food.value === e.target.innerText)
          food.isChecked = !food.isChecked
    })
    this.setState({foodTypes: foodTypes})
    console.log(foodTypes)
  }

  getAllFoodsChecked = () => {
    let selectedFoods = this.state.foodTypes.filter(food => food.isChecked === true)
    console.log(selectedFoods)
    this.setState({
      foodsChecked: selectedFoods
    })
  }

  render() {
    return(
      <React.Fragment>
        <Divider style={{fontSize: "35px", fontStyle: "italic", marginTop: "40px"}} horizontal>
            Approved Food List
        </Divider>
        {this.state.foodTypes.map(food =>

          <Checkbox key={food.id} checked={food.isChecked} onChange={this.handleChange} style={{width: "80%", margin: "0 auto", marginBottom: "10px"}} label={food.value} />
        )}
        <Button onClick={this.getAllFoodsChecked}>Save Foods</Button>
      </React.Fragment>
    )
  }
}

export default FoodList
