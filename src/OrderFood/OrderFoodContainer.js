import React from 'react'
import Meals from './Meals'
import OrderNutrientsInfo from './OrderNutrientsInfo'
import './OrderFood.scss'
import OrderDetails from './OrderDetails'

const meals = [
   {
    id: 1,
    name: 'Chicken Tika Masala & Rice',
    description: 'Delicious chicken with rice!',
    price: "$10.00",
    image: "tika.jpeg",
    calories: 450,
    quantity: 0
  },
  {
    id: 2,
    name: 'Bison Burger',
    description: 'Lean bison with sweet potatoes.',
    price: "$12.00",
    image: "bison.jpeg",
    calories: 500,
    quantity: 0
  },
  {
    id: 3,
    name: 'Healthy Tacos',
    description: 'Beef tacos with goat cheese.',
    price: "$12.00",
    image: "tacos.jpeg",
    calories: 380,
    quantity: 0
  },
  {
    id: 4,
    name: 'Vegan Goodness',
    description: '100% vegan.',
    price: "$9.00",
    calories: 350,
    image: "invest.png",
    quantity: 0
  },
  {
    id: 5,
    name: 'Ceviche',
    description: 'Lime cooked fish with sweet potato.',
    price: "$10.00",
    calories: 420,
    image: "ceviche.png",
    quantity: 0
  },
  {
    id: 6,
    name: 'Paella',
    description: 'Protein packed paella!.',
    price: "$12.00",
    calories: 400,
    image: "paella.jpg",
    quantity: 0
  }
]


class OrderFoodContainer extends React.Component {
  constructor(){
    super()
    this.state={
      meals: meals,
      orderDetails: false,
      message: "",
      color: ""
    }
  }

  addOrRemoveMeal = (e, mealId) => {
    let firstAddButton = e.target.innerText
    let symbol = e.target.innerText
    let meals = [...this.state.meals]
    debugger
    let meal = meals.filter(meal => meal.id === mealId).pop()
    symbol === "+" || firstAddButton === "+ Add" ? meal["quantity"] += 1 : meal["quantity"] -= 1
    this.setState({
      meals: meals
    })
  }

  showOrderDetails = (caloriesAdded) => {
    let message;
    let color;
    let calorieDifference = (this.props.currentUserStatsNewCalc.calories_for_goal * 7) - caloriesAdded;
    if(calorieDifference >= 200){
      message = `You calories are below your target calories. Adjust your meals to get closer to your target calories or make sure to add the additional ${calorieDifference} calories left from a different source.`;
      color = "green";
    } else if(calorieDifference <= -200){
      message = "You calories are above your target calories. Adjust your meals to get closer to your target calories.";
      color = "yellow";
    } else {
      message = `Congratulations, you are on your way to losing ${this.props.currentUserStatsNewCalc.weight_to_manage.split("-")[1]}.`;
      color = "green";
    }
    this.setState({
      orderDetails: true,
      message: message,
      color: color
    })
  }

  editOrder = () => {
    this.setState({
      orderDetails: false
    })
  }

  render(){
    return(
      <React.Fragment>
        {this.state.orderDetails === false ? <OrderNutrientsInfo showOrderDetails={this.showOrderDetails} currentUserStatsNewCalc={this.props.currentUserStatsNewCalc} meals={this.state.meals} /> : null }
        {this.state.orderDetails === false ? <Meals addOrRemoveMeal={this.addOrRemoveMeal} meals={this.state.meals} /> : null }
        {this.state.orderDetails === true && <OrderDetails editOrder={this.editOrder} color={this.state.color} message={this.state.message} currentUserStatsNewCalc={this.props.currentUserStatsNewCalc} meals={this.state.meals} /> }
      </React.Fragment>
    )
  }
}

export default OrderFoodContainer