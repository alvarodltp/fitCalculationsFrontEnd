import React from 'react'
import FoodListForm from '../Foodlist/FoodListForm'
import FoodList from '../Foodlist/FoodList'
import FoodListCard from '../Foodlist/FoodListCard'
import SavedFoodList from '../Foodlist/SavedFoodList'
import swal from 'sweetalert'

const foodTypes = [
  {id: 1, value: "Lean Beef", category: "Meat And Poultry", isChecked: false}, {id: 2, value: "Chicken", category: "Meat And Poultry", isChecked: false},
  {id: 3, value: "Steak", category: "Meat And Poultry", isChecked: false}, {id: 4, value: "Bison", category: "Meat And Poultry", isChecked: false},
  {id: 5, value: "Pork", category: "Meat And Poultry", isChecked: false}, {id: 6, value: "Lamb Shoulder", category: "Meat And Poultry", isChecked: false},
  {id: 7, value: "Turkey Breast", category: "Meat And Poultry", isChecked: false}, {id: 8, value: "Venison", category: "Meat And Poultry", isChecked: false},
  {id: 9, value: "Veal", category: "Meat And Poultry", isChecked: false}, {id: 10, value: "Wild Duck", category: "Meat And Poultry", isChecked: false},
  {id: 11, value: "Bacon", category: "Meat And Poultry", isChecked: false}, {id: 12, value: "Ground Turkey", category: "Meat And Poultry", isChecked: false},
  {id: 13, value: "Tuna", category: "Seafood", isChecked: false}, {id: 14, value: "Cat Fish", category: "Seafood", isChecked: false},
  {id: 15, value: "Crab", category: "Seafood", isChecked: false}, {id: 16, value: "Clams", category: "Seafood", isChecked: false},
  {id: 17, value: "Lobster", category: "Seafood", isChecked: false}, {id: 18, value: "Mussels", category: "Seafood", isChecked: false},
  {id: 19, value: "Salmon", category: "Seafood", isChecked: false}, {id: 20, value: "Mahi Mahi", category: "Seafood", isChecked: false},
  {id: 21, value: "Scallops", category: "Seafood", isChecked: false}, {id: 22, value: "Sardines", category: "Seafood", isChecked: false},
  {id: 23, value: "Shrimp", category: "Seafood", isChecked: false}, {id: 24, value: "Trout", category: "Seafood", isChecked: false},
  {id: 25, value: "Sea Bass", category: "Seafood", isChecked: false},
  {id: 27, value: "Egg Whites", category: "Eggs", isChecked: false}, {id: 28, value: "Whole Eggs", category: "Eggs", isChecked: false},
  {id: 29, value: "Brown Rice", category: "Grains And Pasta", isChecked: false}, {id: 30, value: "Couscous", category: "Grains And Pasta", isChecked: false},
  {id: 31, value: "Ezikiel Sprouted Grain Bread", category: "Grains And Pasta", isChecked: false}, {id: 32, value: "Steel Cut Oats", category: "Grains And Pasta", isChecked: false},
  {id: 33, value: "White Rice", category: "Grains And Pasta", isChecked: false}, {id: 34, value: "Quinoa", category: "Grains And Pasta", isChecked: false},
  {id: 35, value: "Whole Wheat Pasta", category: "Grains And Pasta", isChecked: false}, {id: 36, value: "White Pasta", category: "Grains And Pasta", isChecked: false},
  {id: 37, value: "Black Beans", category: "Beans And Legumes", isChecked: false}, {id: 38, value: "Black-Eyes Peas", category: "Beans And Legumes", isChecked: false},
  {id: 39, value: "Brown Lentils", category: "Beans And Legumes", isChecked: false}, {id: 40, value: "Cheakpeas - Garbanzo Beans", category: "Beans And Legumes", isChecked: false},
  {id: 41, value: "Green Lentils", category: "Beans And Legumes", isChecked: false}, {id: 42, value: "Pinto Beans", category: "Beans And Legumes", isChecked: false},
  {id: 43, value: "Lima Beans", category: "Beans And Legumes", isChecked: false}, {id: 44, value: "Red Lentils", category: "Beans And Legumes", isChecked: false},
  {id: 45, value: "Firm Tofu", category: "Beans And Legumes", isChecked: false}, {id: 46, value: "Tempeh", category: "Beans And Legumes", isChecked: false},
  {id: 47, value: "Asparagus", category: "Veggies", isChecked: false}, {id: 48, value: "Bell Pepper", category: "Veggies", isChecked: false},
  {id: 49, value: "Broccoli", category: "Veggies", isChecked: false}, {id: 50, value: "Corn", category: "Veggies", isChecked: false},
  {id: 51, value: "Brussels Sprouts", category: "Veggies", isChecked: false}, {id: 52, value: "Carrots", category: "Veggies", isChecked: false},
  {id: 53, value: "Green Peas", category: "Veggies", isChecked: false}, {id: 54, value: "Onion", category: "Veggies", isChecked: false},
  {id: 55, value: "Mushrooms", category: "Veggies", isChecked: false}, {id: 56, value: "Russet Potatos", category: "Veggies", isChecked: false},
  {id: 57, value: "Sweet Potatoes", category: "Veggies", isChecked: false}, {id: 58, value: "Yam", category: "Veggies", isChecked: false},
  {id: 59, value: "Yellow Squash", category: "Veggies", isChecked: false}, {id: 60, value: "Zucchini", category: "Veggies", isChecked: false},
  {id: 61, value: "Artichokes", category: "Veggies", isChecked: false}, {id: 62, value: "Beets", category: "Veggies", isChecked: false},
  {id: 63, value: "Butternut Squash", category: "Veggies", isChecked: false}, {id: 64, value: "Parsnips", category: "Veggies", isChecked: false},
  {id: 65, value: "Couliflower", category: "Veggies", isChecked: false},
  {id: 66, value: "Arugula", category: "Leafy Greens", isChecked: false}, {id: 67, value: "Kale", category: "Leafy Greens", isChecked: false},
  {id: 68, value: "Romaine Lettuce", category: "Leafy Greens", isChecked: false}, {id: 69, value: "Spinach", category: "Leafy Greens", isChecked: false},
  {id: 70, value: "Swiss Chard", category: "Leafy Greens", isChecked: false}, {id: 71, value: "Bok Choy", category: "Leafy Greens", isChecked: false},
  {id: 72, value: "Cabbage", category: "Leafy Greens", isChecked: false}, {id: 73, value: "Celery", category: "Leafy Greens", isChecked: false},
  {id: 74, value: "Cucumbers", category: "Leafy Greens", isChecked: false}, {id: 75, value: "Eggplant", category: "Leafy Greens", isChecked: false},
  {id: 76, value: "Green Beans", category: "Leafy Greens", isChecked: false}, {id: 77, value: "Snap Peas", category: "Grains And Pasta", isChecked: false},
  {id: 78, value: "Apples", category: "Fruit", isChecked: false}, {id: 79, value: "Avocado", category: "Fruit", isChecked: false},
  {id: 80, value: "Apricot", category: "Fruit", isChecked: false}, {id: 81, value: "Banana", category: "Fruit", isChecked: false},
  {id: 82, value: "Blueberries", category: "Fruit", isChecked: false}, {id: 83, value: "Blackberries", category: "Fruit", isChecked: false},
  {id: 84, value: "Cantaloupe", category: "Fruit", isChecked: false}, {id: 85, value: "Cherries", category: "Fruit", isChecked: false},
  {id: 86, value: "Cranberries", category: "Fruit", isChecked: false}, {id: 87, value: "Grapefruit", category: "Fruit", isChecked: false},
  {id: 88, value: "Grapes", category: "Fruit", isChecked: false}, {id: 89, value: "Kiwi", category: "Fruit", isChecked: false},
  {id: 90, value: "Lemon", category: "Fruit", isChecked: false}, {id: 91, value: "Lime", category: "Fruit", isChecked: false},
  {id: 92, value: "Mango", category: "Fruit", isChecked: false}, {id: 93, value: "Orange", category: "Fruit", isChecked: false},
  {id: 94, value: "Papaya", category: "Fruit", isChecked: false}, {id: 95, value: "Peach", category: "Fruit", isChecked: false},
  {id: 96, value: "Plum", category: "Fruit", isChecked: false}, {id: 97, value: "Pear", category: "Fruit", isChecked: false},
  {id: 98, value: "Pineapple", category: "Fruit", isChecked: false}, {id: 99, value: "Raspberries", category: "Fruit", isChecked: false},
  {id: 100, value: "Strawberries", category: "Fruit", isChecked: false}, {id: 101, value: "Roma Tomatoes", category: "Fruit", isChecked: false},
  {id: 102, value: "Watermelon", category: "Fruit", isChecked: false}, {id: 103, value: "Almonds", category: "Nuts And Seeds", isChecked: false},
  {id: 104, value: "Brazil Nuts", category: "Nuts And Seeds", isChecked: false}, {id: 105, value: "Cashews", category: "Nuts And Seeds", isChecked: false},
  {id: 106, value: "Chia Seeds", category: "Nuts And Seeds", isChecked: false}, {id: 107, value: "Grounded Flax Seed", category: "Nuts And Seeds", isChecked: false},
  {id: 108, value: "Halzelnuts", category: "Nuts And Seeds", isChecked: false}, {id: 109, value: "Hemp Seeds", category: "Nuts And Seeds", isChecked: false},
  {id: 110, value: "Macadamia Nuts", category: "Nuts And Seeds", isChecked: false}, {id: 111, value: "Pecans", category: "Nuts And Seeds", isChecked: false},
  {id: 112, value: "Pine Nuts", category: "Nuts And Seeds", isChecked: false}, {id: 113, value: "Pistachios", category: "Nuts And Seeds", isChecked: false},
  {id: 114, value: "Pumpkin Seeds", category: "Nuts And Seeds", isChecked: false}, {id: 115, value: "Sesame Seeds", category: "Nuts And Seeds", isChecked: false},
  {id: 116, value: "Sunflower Seeds", category: "Nuts And Seeds", isChecked: false}, {id: 117, value: "Walnuts", category: "Nuts And Seeds", isChecked: false},
  {id: 118, value: "Almond Butter", category: "Nut Butters", isChecked: false}, {id: 11, value: "Cashew Butter", category: "Nut Butters", isChecked: false},
  {id: 119, value: "Avocado Oil", category: "Good Fats", isChecked: false}, {id: 120, value: "Coconut Oil", category: "Good Fats", isChecked: false},
  {id: 121, value: "Grass-Fed Butter", category: "Good Fats", isChecked: false}, {id: 122, value: "Ghee", category: "Good Fats", isChecked: false},
  {id: 123, value: "Olive Oil", category: "Good Fats", isChecked: false}, {id: 124, value: "Macadamia Nut Oil", category: "Good Fats", isChecked: false},
  {id: 125, value: "Walnut Oil", category: "Good Fats", isChecked: false},
  {id: 126, value: "Almond Milk", category: "Beverages", isChecked: false}, {id: 127, value: "Coconut Milk", category: "Beverages", isChecked: false},
  {id: 128, value: "Coconut Water", category: "Beverages", isChecked: false}, {id: 129, value: "Flax Milk", category: "Beverages", isChecked: false},
  {id: 130, value: "Tea", category: "Beverages", isChecked: false}, {id: 131, value: "Coffee", category: "Beverages", isChecked: false},
  {id: 132, value: "Water", category: "Beverages", isChecked: false}, {id: 133, value: "Almond Flour", category: "Other", isChecked: false},
  {id: 134, value: "Coconut Flower", category: "Other", isChecked: false}, {id: 135, value: "Broth - Low Sodium", category: "Other", isChecked: false},
  {id: 136, value: "Fat Free Mayo", category: "Other", isChecked: false}, {id: 137, value: "Mustard", category: "Other", isChecked: false},
  {id: 138, value: "Salsa - Low Sodium", category: "Other", isChecked: false}]

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
      createNew: false
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

  // getUsersWithLists = () => {
  //   fetch("https://fitcalculations-api.herokuapp.com/users")
  //   .then(response => response.json())
  //   .then(json => {
  //     let usersWithLists = json.filter(user => user["food_lists"].length > 0)
  //     this.setState({
  //       usersWithList: usersWithLists,
  //       loading: false
  //     })
  //   })
  // }

  getUserFoodList = () => {
    fetch("https://fitcalculations-api.herokuapp.com/food_lists")
    .then(response => response.json())
    .then(json => {
      let foodList = json.filter(list => list["user"].id === this.props.currentUserStatsNewCalc.user.id)
      debugger
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
    foodTypes.forEach(food => {
          food.isChecked = false
    })
  }

  // checkIfUserExists = () => {
  //   let userEmail = this.state.userEmail
  //   let usersWithLists = this.state.usersWithList
  //   let filteredUser = usersWithLists.filter(user => user.email === userEmail)[0] //either an object or undefined
  //   let userFoodLists;
  //   filteredUser !== undefined ? userFoodLists = filteredUser.food_lists : userFoodLists = null
  //   this.setState({
  //     user: filteredUser,
  //     foodList: userFoodLists
  //   }, () => this.createUser(filteredUser, userEmail))
  // }

  // validateEmail = (e) => {
  //   let email = e.target.value.replace(/\s*$/,'')
  //   var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   this.setState({
  //     emailValid: re.test(email)
  //   })
  // }
  //
  // errorMessage = () => {
  //   if(this.state.emailValid === "" || this.state.emailValid === false) {
  //     this.setState({
  //       message: "Please enter a valid email."
  //     })
  //   }
  // }

  // listOrError = (e) => {
  //   if(this.state.emailValid === true){
  //     this.checkIfUserExists()
  //   } else {
  //     this.errorMessage()
  //   }
  // }

  // createUser = (user, email) => { //need to convert this to create or update user based on if the user already has his/her stats
  //   if(user === undefined){
  //     fetch("https://fitcalculations-api.herokuapp.com/users", {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Accept': 'application/json'
  //       },
  //       body: JSON.stringify({
  //         email: email.toLowerCase()
  //         })
  //       }).then(response => response.json())
  //       .then(user => {
  //         debugger
  //         this.setState({
  //           user: user,
  //           foodTypes: foodTypes
  //         })
  //       })
  //   }
  // }

  createFoodList = () => {
    let foodList;
    this.state.foodList === null ? foodList = new Array(0) : foodList = this.state.foodList
    let userId = this.props.currentUserStatsNewCalc.user.id
    debugger
    if(this.state.foodList === null || this.state.foodList.length < 9) {
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
          debugger
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
        debugger
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

  // getUserEmail = (e) => {
  //   this.setState({
  //     userEmail: e.target.value.toLowerCase()
  //   })
  // }

  // validateEmail = (e) => {
  //   let email = e.target.value.replace(/\s*$/,'')
  //   var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   this.setState({
  //     emailValid: re.test(email)
  //   })
  // }

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

  render() {
    return(
      <React.Fragment>
        {this.state.createNew === true ? <FoodList disabled={this.state.disabled} foodList={this.state.foodList} maxListLimit={this.state.maxListLimit} filteredFoodTypes={this.state.filteredFoodTypes} handleDropdownClick={this.handleDropdownClick} getName={this.getName} createFoodList={this.createFoodList} backToSavedLists={this.backToSavedLists} foodTypes={this.state.foodTypes} foodsChecked={this.state.foodsChecked} handleChange={this.handleChange} getAllFoodsChecked={this.getAllFoodsChecked}/> : null }
        {this.state.foodsForSelectedList === null && this.state.foodList != null && this.state.createNew === false ? <FoodListCard createNew={this.createNew} getAllFoodsForSelectedList={this.getAllFoodsForSelectedList} foodListName={this.state.foodListName} setFoodTypes={this.setFoodTypes} foodList={this.state.foodList} removeFoodList={this.removeFoodList} user={this.state.user} /> : null }
        {this.state.foodsForSelectedList !== null ? <SavedFoodList handleChangeOnSavedList={this.handleChangeOnSavedList} clearSelectedFoods={this.clearSelectedFoods} foodsForSelectedList={this.state.foodsForSelectedList} backToSavedLists={this.backToSavedLists} handleChange={this.handleChange}/> : null}
      </React.Fragment>
    )
  }
}

export default FoodListContainer

// <FoodListForm validateEmail={this.validateEmail} emailValid={this.state.emailValid} message={this.state.message} listOrError={this.listOrError} loading={this.state.loading} checkIfUserExists={this.checkIfUserExists} getUserEmail={this.getUserEmail} foodTypes={this.state.foodTypes} foodsChecked={this.state.foodsChecked} handleChange={this.handleChange} getAllFoodsChecked={this.getAllFoodsChecked}/>
