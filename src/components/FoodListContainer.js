import React from 'react'
import FoodListForm from './FoodListForm'
import FoodList from './FoodList'
import FoodListTitle from './FoodListCard'
import FoodListCard from './FoodListCard'
import SavedFoodList from './SavedFoodList'

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
      userEmail: "",
      user: null,
      usersWithLists: null,
      foodList: [],
      loading: true,
      newList: [],
      foodListName: "",
      foodsForSelectedList: null,
      lastFoodListAddedId: "",
      foodsSavedForList: []
    }
  }

  componentDidMount(){
    this.getUsersWithLists()
  }

  getName = (e) => {
    this.setState({
      foodListName: e.target.innerText
    })
  }

  getUsersWithLists = () => {
    fetch("https://fitcalculations-api.herokuapp.com/users")
    .then(response => response.json())
    .then(json => {
      let usersWithLists = json.filter(user => user["food_lists"].length > 0)
      this.setState({
        usersWithList: usersWithLists,
        loading: false
      })
    })
  }

  handleChange = (e, foodObj) => {
    let foodTypes = this.state.foodTypes
    foodTypes.forEach(food => {
       if (food.value === e.target.parentElement.innerText)
        food.isChecked = !food.isChecked
    })
    this.setState({
      foodTypes: foodTypes
    })
  }

  handleChangeOnSavedList = (e, foodObj) => {
    let foodsForSelectedList=this.state.foodsForSelectedList
    foodsForSelectedList.forEach(food => {
       if (food.name === e.target.parentElement.innerText)
        e.target.checked = !e.target.checked
    })
  }

  unCheckAllFoods = () => {
    let foodTypes = this.state.foodTypes
    foodTypes.forEach(food => {
          food.isChecked = false
    })
  }

  checkIfUserExists = () => {
    let userEmail = this.state.userEmail
    let usersWithLists = this.state.usersWithList
    let filteredUser = usersWithLists.filter(user => user.email === userEmail)[0] //either an object or undefined
    let userFoodLists;
    filteredUser !== undefined ? userFoodLists = filteredUser.food_lists : userFoodLists = null
    this.setState({
      user: filteredUser,
      foodList: userFoodLists
    }, () => this.createUser(filteredUser, userEmail))
  }

  createUser = (user, email) => {
    if(user === undefined){
      fetch("https://fitcalculations-api.herokuapp.com/users", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          email: email.toLowerCase()
          })
        }).then(response => response.json())
        .then(user => {
          this.setState({
            user: user,
            foodTypes: foodTypes
          })
        })
    } else {

    }
  }

  createFoodList = () => {
    let foodList;
    this.state.foodList === null ? foodList = new Array(0) : foodList = this.state.foodList
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
        let lastFoodListAddedId = json.id
        this.setState({
          foodList: [...foodList, json]
        }, this.getAllFoodsChecked(lastFoodListAddedId), this.unCheckAllFoods())
      })//this needs to happen after an actual food list is created
  }

  getAllFoodsChecked = (lastFoodListAddedId) => {
    let selectedFoods = this.state.foodTypes.filter(food => food.isChecked === true)
    debugger
    this.setState({
      foodsChecked: selectedFoods
    }, () => this.saveFoods(lastFoodListAddedId, selectedFoods))
  }

  saveFoods = (foodListId, selectedFoods) => {
    // let id;
    // this.state.foodList.length > 1 ? id=this.state.foodList.sort((a, b) => a - b).pop().id : id=this.state.foodList[0].id //gets last food list id
    debugger
    for(var i = 0; i < selectedFoods.length; i++){
    var current = selectedFoods[i];
    fetch("https://fitcalculations-api.herokuapp.com/foods", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: current.value,
        category: current.category,
        food_list_id: foodListId
        })
      })
      .then(response => response.json())
      .then(json => {
        console.log(json)
        this.setState({
          foodsSavedForList: [...this.state.foodsSavedForList, json]
        })
      })
    }//end of loop
  }

  getAllFoodsForSelectedList = (e, listId) => {
    fetch("https://fitcalculations-api.herokuapp.com/foods")
   .then(response => response.json())
   .then(json => {
     let foodsForSelectedList = json.filter(foods => foods.food_list_id === listId)
     this.setState({
       foodsForSelectedList: foodsForSelectedList
     })
   })
  }

  setFoodTypes = () => {
    this.setState({
      foodTypes: foodTypes
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

  removeFoodList = (e, listId) => {
  let id = listId
  let foodListCopy = [...this.state.foodList]
  fetch(`https://fitcalculations-api.herokuapp.com/food_lists/${id}`, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
  })
  .then(response => response.json())
  .then(json => {
    let foodListAfterDelete = foodListCopy.filter(foodList => foodList["id"] !== json.id)
    this.setState({
      foodList: foodListAfterDelete
    })
  })
}

clearSelectedFoods = () => {
  this.setState({
    foodsForSelectedList: null
  })
}

  render() {
    return(
      <React.Fragment>
        {this.state.user === null ? <FoodListForm checkIfUserExists={this.checkIfUserExists} getUserEmail={this.getUserEmail} foodTypes={this.state.foodTypes} foodsChecked={this.state.foodsChecked} handleChange={this.handleChange} getAllFoodsChecked={this.getAllFoodsChecked}/> : null }
        {this.state.foodTypes !== null ? <FoodList getName={this.getName} createFoodList={this.createFoodList} backToSavedLists={this.backToSavedLists} foodTypes={this.state.foodTypes} foodsChecked={this.state.foodsChecked} handleChange={this.handleChange} getAllFoodsChecked={this.getAllFoodsChecked}/> : null }
        {this.state.user !== null && this.state.foodTypes === null && this.state.foodsForSelectedList === null ? <FoodListCard getAllFoodsForSelectedList={this.getAllFoodsForSelectedList} foodListName={this.state.foodListName} setFoodTypes={this.setFoodTypes} foodList={this.state.foodList} removeFoodList={this.removeFoodList} user={this.state.user} /> : null }
        {this.state.foodsForSelectedList !== null ? <SavedFoodList handleChangeOnSavedList={this.handleChangeOnSavedList} clearSelectedFoods={this.clearSelectedFoods} foodsForSelectedList={this.state.foodsForSelectedList} backToSavedLists={this.backToSavedLists} handleChange={this.handleChange}/> : null}
      </React.Fragment>
    )
  }
}

export default FoodListContainer
