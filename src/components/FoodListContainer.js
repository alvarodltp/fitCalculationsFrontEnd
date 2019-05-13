import React from 'react'
import FoodListForm from './FoodListForm'
import FoodList from './FoodList'
import FoodListCard from './FoodListCard'

const foodTypes = [
  {id: 1, value: "Chicken", category: "protein", isChecked: false},
  {id: 2, value: "Sweet Potato", category: "carbs", isChecked: false},
  {id: 3, value: "Olive Oil", category: "fats", isChecked: false},
  {id: 4, value: "Green Peppers", category: "veggies", isChecked: false}
]

class FoodListContainer extends React.Component {
  constructor(){
    super()
    this.state={
      foodTypes: null,
      foodsChecked: [],
      usersHaveFoodlist: null,
      userEmail: "",
      user: null,
      userFoodLists: null
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
    if(this.state.emailValid === true){
      fetch("https://fitcalculations-api.herokuapp.com/users")
      .then(response => response.json())
      .then(json => {
        let userExists = json.filter(user => user.email === this.state.userEmail)
        let userFoodLists = userExists[0].food_lists
        this.setState({
          user: userExists,
          userFoodLists: userFoodLists
        })
      }).then(() => this.createUser(this.state.user))
    } else {

    }
  }

  createUser = () => {
    if(this.state.user === null){
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
    } else {

    }
  }

  createFoodList = () => {
    let userId = this.state.user.id
    fetch("https://fitcalculations-api.herokuapp.com/food_lists", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        date: new Date(),
        user_id: userId
        })
      }).then(response => response.json())
      .then(json => {
        console.log(json)
        this.setState({
          foodList: json,
          foodTypes: foodTypes
        })
      })
  }

  getUserEmail = (e) => {
    this.setState({
      userEmail: e.target.value
    }, this.validateEmail(e))
  }

  validateEmail = (e) => {
    let email = e.target.value.replace(/\s*$/,'')
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.setState({
      emailValid: re.test(email)
    })
  }

  backToSavedLists = () => {
    this.setState({
      foodTypes: null
    })
  }

  render() {
    return(
      <React.Fragment>
        {this.state.user === null ? <FoodListForm getAllUsersWithLists={this.getAllUsersWithLists} getUserEmail={this.getUserEmail} foodTypes={this.state.foodTypes} foodsChecked={this.state.foodsChecked} handleChange={this.handleChange} getAllFoodsChecked={this.getAllFoodsChecked}/> : null }
        {this.state.foodTypes !== null ? <FoodList backToSavedLists={this.backToSavedLists} foodTypes={this.state.foodTypes} foodsChecked={this.state.foodsChecked} handleChange={this.handleChange} getAllFoodsChecked={this.getAllFoodsChecked}/> : null }
        {this.state.userFoodLists !== null && this.state.foodTypes === null ? <FoodListCard createFoodList={this.createFoodList} userFoodLists={this.state.userFoodLists}/> : null }
      </React.Fragment>
    )
  }
}

export default FoodListContainer
