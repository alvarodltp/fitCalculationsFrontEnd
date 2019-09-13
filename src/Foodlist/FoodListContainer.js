import React from 'react'
import FoodListForm from '../Foodlist/FoodListForm'
import FoodList from '../Foodlist/FoodList'
import FoodListCard from '../Foodlist/FoodListCard'
import SavedFoodList from '../Foodlist/SavedFoodList'
import swal from 'sweetalert'
import './FoodList.css'
import {foodTypes} from '../data/foodData.js'

class FoodListContainer extends React.Component {
  constructor(){
    super()
    this.state={
      foodTypes: null,
      filteredFoodTypes: foodTypes,
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
      maxListLimit: "",
      disabled: true,
      emailValid: "",
      message: "",
      createNew: false,
      foodListName: "Grocery List",
      foodListTotalCost: 0
    }
  }

  componentDidMount(){
    this.setFoodTypes()
    this.getUserFoodList()
  }

  getName = (e) => {
    this.setState({
      foodListName: e.target.innerText
    })
  }

  getUserFoodList = () => {
    fetch("https://fitcalculations-api.herokuapp.com/food_lists")
    .then(response => response.json())
    .then(json => {
      let foodList = json.filter(list => list["user"].id === this.props.currentUserStatsNewCalc.user.id)
      // debugger
      this.setState({
        foodList: foodList
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
    let foodsForSelectedList = this.state.foodsForSelectedList
    foodsForSelectedList.forEach(food => {
       if (food.name === e.target.parentElement.innerText)
        e.target.checked = !e.target.checked
    })
  }

  unCheckAllFoods = () => {
    let foodTypes = this.state.foodTypes
    // debugger
    foodTypes.forEach(food => {
          food.isChecked = false
    })
  }

  createFoodList = () => {
    let foodList;
    this.state.foodList === null ? foodList = new Array(0) : foodList = this.state.foodList
    let userId = this.props.currentUserStatsNewCalc.user.id
    let totalCost;
    this.state.foodListTotalCost === 0 ? totalCost = "-" : totalCost = this.state.totalCost
    if(this.state.foodList === null || this.state.foodList.length < 9) {
      fetch("https://fitcalculations-api.herokuapp.com/food_lists", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          date: new Date(),
          user_id: userId,
          name: this.state.foodListName,
          total_cost: totalCost
          })
        }).then(response => response.json())
        .then(json => {
          // debugger
          let lastFoodListAddedId = json.id
          this.setState({
            foodList: [...foodList, json],
            disabled: false,
            createNew: false
          }, this.getAllFoodsChecked(lastFoodListAddedId), this.unCheckAllFoods())
        })//this needs to happen after an actual food list is created
    } else {
      this.setState({
        maxListLimit: "You have reached your limit of 9 lists. Delete a list to create a new one."
      })
    }
  }

  getAllFoodsChecked = (lastFoodListAddedId) => {
    let selectedFoods = this.state.foodTypes.filter(food => food.isChecked === true)
    // debugger
    this.setState({
      foodsChecked: selectedFoods
    }, () => this.saveFoods(lastFoodListAddedId, selectedFoods))
  }

  saveFoods = (foodListId, selectedFoods) => {
    // let id;
    // this.state.foodList.length > 1 ? id=this.state.foodList.sort((a, b) => a - b).pop().id : id=this.state.foodList[0].id //gets last food list id
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
        // debugger
      })
    } //end of loop
    swal("Success!", "Your list has been saved!", "success")
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

  backToSavedLists = () => {
    this.setState({
      foodTypes: null,
      maxListLimit: "",
      createNew: false
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

handleDropdownClick = (e) => {
  let foods;
  e.target.innerText === "All" ? foods = foodTypes : foods = this.state.foodTypes.filter(food => food.category === e.target.innerText)
  this.setState({
    filteredFoodTypes: foods,
    foodTypes: foodTypes
  })
}

createNew = () => {
  this.setState({
    createNew: true
  })
}

getDollarAmount = (e) => {
  this.setState({
    totalCost: e.target.value
  })
}

addPriceToList = (e, listId) => {
  debugger
  let foodListCopy = [...this.state.foodList];
  let filteredArr = foodListCopy.filter(foodList => foodList.id != listId)
  debugger
  fetch(`https://fitcalculations-api.herokuapp.com/food_lists/${listId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      total_cost: this.state.totalCost
    })
  })
  .then(response => response.json())
  .then(json => {
    this.setState({
      foodList: [...filteredArr, json]
    })
  })
}

  render() {
    return(
      <React.Fragment>
        {this.state.createNew === true ? <FoodList disabled={this.state.disabled} foodList={this.state.foodList} maxListLimit={this.state.maxListLimit} filteredFoodTypes={this.state.filteredFoodTypes} handleDropdownClick={this.handleDropdownClick} getName={this.getName} createFoodList={this.createFoodList} backToSavedLists={this.backToSavedLists} foodTypes={this.state.foodTypes} foodsChecked={this.state.foodsChecked} handleChange={this.handleChange} getAllFoodsChecked={this.getAllFoodsChecked}/> : null }
        {this.state.foodsForSelectedList === null && this.state.foodList != null && this.state.createNew === false ? <FoodListCard getDollarAmount={this.getDollarAmount} addPriceToList={this.addPriceToList} createNew={this.createNew} getAllFoodsForSelectedList={this.getAllFoodsForSelectedList} foodListName={this.state.foodListName} setFoodTypes={this.setFoodTypes} foodList={this.state.foodList} removeFoodList={this.removeFoodList} user={this.state.user} /> : null }
        {this.state.foodsForSelectedList !== null ? <SavedFoodList handleChangeOnSavedList={this.handleChangeOnSavedList} clearSelectedFoods={this.clearSelectedFoods} foodsForSelectedList={this.state.foodsForSelectedList}backToSavedLists={this.backToSavedLists} handleChange={this.handleChange}/> :   null}
      </React.Fragment>
    )
  }
}

export default FoodListContainer