import React from 'react'
import { Checkbox, Divider, Button, Form, Input } from 'semantic-ui-react'

class FoodList extends React.Component {
  render() {
    return(
      <React.Fragment>
        <Divider style={{fontSize: "35px", fontStyle: "italic", marginTop: "40px"}} horizontal>
            Approved Food List
        </Divider>
        <div style={{width: "50%", margin: "0 auto"}}>
          <Form>
            <Form.Input onChange={this.props.getUserEmail} name='email' label='Enter your email to create list or get your old ones' placeholder='Email...' />
            <Button onClick={this.props.getAllUsersWithLists} size="small" id="button-mobile" style={{width: "100%"}} type="submit">
               SUBMIT
            </Button>
          </Form>
        </div>
        {this.props.foodTypes.map(food =>
          <Checkbox key={food.id} checked={food.isChecked} onChange={this.props.handleChange} style={{width: "80%", margin: "0 auto", marginBottom: "10px"}} label={food.value} />
        )}
        <Button onClick={this.props.getAllFoodsChecked}>Save List</Button>
      </React.Fragment>
    )
  }
}

export default FoodList
