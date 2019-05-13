import React from 'react'
import { Divider, Button, Form } from 'semantic-ui-react'

const FoodListForm = (props) => {
    return(
      <React.Fragment>
        <Divider style={{fontSize: "35px", fontStyle: "italic", marginTop: "40px"}} horizontal>
            Approved Food List
        </Divider>
        <div style={{width: "50%", margin: "0 auto"}}>
          <Form>
            <Form.Input onChange={props.getUserEmail} name='email' label='Enter your email to create list or retrieve provious old ones' placeholder='Email...' />
            <Button onClick={props.checkIfUserExists} size="small" id="button-mobile" style={{width: "100%"}} type="submit">
               SUBMIT
            </Button>
          </Form>
        </div>
      </React.Fragment>
  )
}

export default FoodListForm
