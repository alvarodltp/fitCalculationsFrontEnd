import React from 'react'
import { Header, Image, Table, Popup, Button } from 'semantic-ui-react'
import FoodList from './FoodList'

class FoodListContainer extends React.Component {
  constructor(){
    super()
    this.state={
      foodTypes: [
        {id: 1, value: "Protein", isChecked: false},
        {id: 2, value: "Carbs", isChecked: false},
        {id: 3, value: "Fats", isChecked: false},
        {id: 4, value: "Veggies", isChecked: false}
      ]
    }
  }


  handleChange = (e) => {
    let foodTypes = this.state.foodTypes
    foodTypes.forEach(food => {
       if (food.value === e.target.innerText)
          food.isChecked =  !food.isChecked
    })
    this.setState({foodTypes: foodTypes})
    console.log(foodTypes)
  }



  render() {
    return(
      <FoodList foodTypes={this.state.foodTypes} handleChange={this.handleChange}/>
    )
  }
}

export default FoodListContainer
