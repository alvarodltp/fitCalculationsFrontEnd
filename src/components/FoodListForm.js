import React from 'react'
import { Divider, Button, Form } from 'semantic-ui-react'

const FoodListForm = (props) => {
    return(
      <React.Fragment>
        <div id="background-food">
          <div id="food-form">
            <h1 style={{fontSize: "60px"}}>APPROVED SHOPPING LIST</h1>
            <div style={{width: "70%", margin: "0 auto"}}>
              <Form>
                <Form.Input onChange={props.getUserEmail} name='email' label='Enter your email to create a new list or retrieve previous.' placeholder='Email...' />
                <Button onClick={props.checkIfUserExists} size="small" id="button-mobile" style={{width: "100%"}} type="submit">
                   SUBMIT
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </React.Fragment>
  )
}

export default FoodListForm
