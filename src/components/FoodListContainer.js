import React from 'react'
import { Header, Image, Table, Popup, Button } from 'semantic-ui-react'
import FoodList from './FoodList'

class FoodListContainer extends React.Component {
  constructor(){
    super()
    this.state={
      foodsChecked: []
    }
  }

  render() {
    return(
      <React.Fragment>
        <FoodList foodTypes={this.state.foodTypes} handleChange={this.handleChange}/>
        
      </React.Fragment>
    )
  }
}

export default FoodListContainer
