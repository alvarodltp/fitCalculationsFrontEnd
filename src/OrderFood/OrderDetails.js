import React from 'react';
import { Message, Button, Select, Input, Form } from 'semantic-ui-react';
import swal from 'sweetalert';
import {Link} from 'react-router-dom';

class OrderDetails extends React.Component {
  constructor(){
    super()
    this.state={
      subtotal: 0.00,
      mealsList: null,
      taxes: 0.00,
      delivery: 0.00,
      promoCode: "",
      coupon: "",
      total: "",
      disabled: false

    }
  }

  componentDidMount(){
    let mealsList = this.props.meals.filter(meal => meal["quantity"] > 0);
    let subtotal = mealsList.map(meal => meal.price * meal.quantity).reduce((a,b) => a + b).toFixed(2)
    this.setState({
      mealsList: mealsList,
      subtotal: subtotal
    })
  }


  handleChange = (data, name) => {
    let taxes = ((this.state.subtotal * data.value) / 100).toFixed(2)
    let total = (parseFloat(taxes) + parseFloat(this.state.subtotal) + parseFloat(this.state.delivery)).toFixed(2)
    this.setState({
      taxes: taxes,
      total: total
    })
  }

  handleChangeDelivery = (data) => {
    let total = (parseFloat(this.state.subtotal) + parseFloat(data.value) + parseFloat(this.state.taxes)).toFixed(2)
    this.setState({
      delivery: data.value,
      total: total
    });
  }

  getCoupon = (e) => {
    this.setState({
      coupon: e.target.value
    });
  }

  applyDiscount = () => {
    if(this.state.coupon != ""){
      let total = (parseFloat(this.state.total) - 10).toFixed(2)
      this.setState({
        coupon: 10.00,
        total: total,
        disabled: true
      })
    }
  }

  completeOrder = () => {
    swal("Success!", "Your Order Has Been Placed!", "success")
  }



  render(){
    const storeOptions = [
      { key: 'tx', value: '6.25', text: 'Texas' },
      { key: 'ca', value: '7.25', text: 'California' },
      { key: 'dmv', value: '4.15', text: 'DMV' }
    ];
    const deliveryOptions = [
      { key: 'd', value: '9.99', text: 'Delivery' },
      { key: 'p', value: '0.00', text: 'Pickup' }
    ];
    return(
      <React.Fragment>
        <div>
          <Message style={{textAlign: "left"}} color={this.props.color}>
            {this.props.message}<br/>
            <Button id="button" style={{marginTop: "10px"}} onClick={this.props.editOrder}>Add or Remove Items</Button>
          </Message>
          
          <div className="order-titles">
            <div className="store">
              <h2>Select Your Store</h2>
              <Select onChange={(_, data) => {this.handleChange(data, "taxes")}} placeholder='Select your location' options={storeOptions} />
            </div>
            
            <div className="delivery">
              <h2>Delivery or Pickup</h2>
              <Select onChange={(_, data) => {this.handleChangeDelivery(data)}} placeholder='Delivery or Pickup' options={deliveryOptions} />
            </div>
            
            <div className="coupon">
              <h2>Have A Coupon?</h2>
              <Input disabled={this.state.disabled} onChange={this.getCoupon} id="coupon-input" placeholder='Enter anything' />
              <Button disabled={this.state.disabled} onClick={this.applyDiscount} id="button">Add</Button>
            </div>
          </div>

          <h2 style={{textAlign: "left", marginLeft: "20px"}}>Order Details</h2>
          {this.state.mealsList ? this.state.mealsList.map(meal => 
          <div className="order-details">
            <p className="meal-name">{meal.quantity} - {meal.name}</p> 
            <p className="meal-price">${(meal.quantity * meal.price).toFixed(2)}</p> 
          </div>) : null }

          <div className="order-details">
            <h4 className="meal-name">SUBTOTAL:</h4>
            <h4 className="meal-price">${this.state.subtotal}</h4> 
            <h4 className="meal-name">TAXES:</h4>
            <h4 className="meal-price">${this.state.taxes}</h4> 
            <h4 className="meal-name">DELIVERY:</h4>
            <h4 className="meal-price">${this.state.delivery}</h4> 
            <h4 className="meal-name">CREDITS:</h4>
            {this.state.coupon === 10.00 ? <h4 className="meal-price" style={{color: "green"}}>(${this.state.coupon})</h4> : null }
            <h4 className="meal-name">TOTAL:</h4>
            <h4 className="meal-price">${this.state.total}</h4> 
          </div>
          <Link to="/">
            <Button style={{float: "left", marginLeft: "20px"}} onClick={() => {this.completeOrder(); this.props.editOrder()}} id="button">Complete Order</Button>
          </Link>
        </div>
      </React.Fragment>
    )
  }  
}

export default OrderDetails