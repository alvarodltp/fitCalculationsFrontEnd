import React from 'react'
import { Header, Image, Table, Popup, Button } from 'semantic-ui-react'
import FoodList from './FoodList'

class FoodListContainer extends React.Component {
  constructor(){
    super()
    this.state={
      foodTypes: [
        {id: 1, value: "Chicken", category: "protein", isChecked: false},
        {id: 2, value: "Sweet Potato", category: "carbs", isChecked: false},
        {id: 3, value: "Olive Oil", category: "fats", isChecked: false},
        {id: 4, value: "Green Peppers", category: "veggies", isChecked: false}
      ],
      foodsChecked: [],
      usersHaveFoodlist: null,
      userEmail: "",
      user: null
    }
  }

  handleChange = (e) => {
    let foodTypes = this.state.foodTypes
    foodTypes.forEach(food => {
       if (food.value === e.target.innerText)
        food.isChecked = !food.isChecked
    })
    this.setState({foodTypes: foodTypes})
  }

  getAllFoodsChecked = () => {
    let selectedFoods = this.state.foodTypes.filter(food => food.isChecked === true)
    console.log(selectedFoods)
    this.setState({
      foodsChecked: selectedFoods
    })
  }

  getAllUsersWithLists = () => {
    fetch("https://fitcalculations-api.herokuapp.com/users")
    .then(response => response.json())
    .then(json => {
      let userExists = json.filter(user => user.email === this.state.userEmail)
      this.setState({
        user: userExists
      })
    }).then(() => this.createUserOrCreateList(this.state.user))
  }

  getUserEmail = (e) => {
    this.setState({
      userEmail: e.target.value
    })
  }

  createUserOrCreateList = (user) => {
    if(this.state.user === null){
      this.createUser()
    } else {
      this.createFoodList(user)
    }
  }

  createUser = () => {
    fetch("https://fitcalculations-api.herokuapp.com/users", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: "",
        email: this.state.userEmail.toLowerCase(),
        gender: ""
        })
      }).then(response => response.json())
      .then(user => {
        this.setState({
          user: user
        })
      })
  }

  createFoodList = (user) => {
    fetch("https://fitcalculations-api.herokuapp.com/food_lists", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        date: new Date(),
        user_id: user[0].id
        })
      }).then(response => response.json())
      .then(json => {
        console.log(json)
        this.setState({
          foodList: json
        })
      })
  }


  render() {
    return(
      <React.Fragment>
        <FoodList getAllUsersWithLists={this.getAllUsersWithLists} createFoodList={this.createFoodList} getUserEmail={this.getUserEmail} foodTypes={this.state.foodTypes} foodsChecked={this.state.foodsChecked} handleChange={this.handleChange} getAllFoodsChecked={this.getAllFoodsChecked}/>
      </React.Fragment>
    )
  }
}

export default FoodListContainer
