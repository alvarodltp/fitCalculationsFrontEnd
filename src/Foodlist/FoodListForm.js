import React from 'react'
import { Divider, Button, Form } from 'semantic-ui-react'
import { BeatLoader } from 'react-spinners';
import Slide from 'react-reveal/Slide';

class FoodListForm extends React.Component {
  render(){
    return(
      <React.Fragment>
      {this.props.loading === false ?
        <div id="background-food">
          <div id="food-form">
          <Slide left>
            <h1 style={{fontSize: "60px", fontStyle: "italic"}}>HEALTHY SHOPPING LIST</h1>
          </Slide>
          <Slide right>
            <div style={{width: "70%", margin: "0 auto"}}>
              <Form>
                <Form.Input onChange={(e) => {this.props.getUserEmail(e); this.props.validateEmail(e)}} name='email' label='Enter your email to create a new list or retrieve previous.' placeholder='Email...' />
                {this.props.emailValid !== "" || this.props.emailValid !== true ? <p style={{fontSize: "12px", color: "red"}}>{this.props.message}</p> : null}
                <Button onClick={this.props.listOrError} size="small" id="button-mobile" style={{width: "100%"}} type="submit">
                   SUBMIT
                </Button>
              </Form>
            </div>
          </Slide>
          </div>
        </div> :

        <div id="loading-foodlist-form">
          <div className='sweet-loading'>
            <BeatLoader
              sizeUnit={"px"}
              size={13}
              color={"#2761f1"}
              loading={this.props.loading}
            />
          </div>
        </div> }

      </React.Fragment>
    )
  }
}

export default FoodListForm
