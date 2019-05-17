import React from 'react'
import { Divider, Button, Form } from 'semantic-ui-react'
import { BeatLoader } from 'react-spinners';

const FoodListForm = (props) => {
    return(
      <React.Fragment>

      {props.loading === false ?
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
        </div> :

        <div id="loading-foodlist-form">
          <div className='sweet-loading'>
            <BeatLoader
              sizeUnit={"px"}
              size={13}
              color={"#2761f1"}
              loading={props.loading}
            />
          </div>
        </div> }

      </React.Fragment>
  )
}

export default FoodListForm
