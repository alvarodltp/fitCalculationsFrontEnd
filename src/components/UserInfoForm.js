import React from 'react'
import { Form, Card, Button, Radio, Icon } from 'semantic-ui-react'
// import {Form, Input, Select, Label} from 'formsy-semantic-ui-react';

class UserInfoForm extends React.Component {
  constructor(){
    super()
    this.state={
      value: 'imperial',
    }
  }

  handleChange = (e, { value }) => this.setState({ value })

  render(){
    const genderOptions = [{ text: 'Male', value: 'male' }, { text: 'Female', value: 'female' }]
    const activityOptions = [{key: 'sedentary', text: 'Sedentary (little or no exercise)', value: 1.2}, {key: 'light', text: 'Lightly active (light exercise/sports 1-3 days/week)', value: 1.375}, {key: 'moderate', text: 'Moderately active (moderate exercise/sports 3-5 days/week)', value: 1.55}, {key: 'very active', text: 'Very active (hard exercise/sports 6-7 days a week)', value: 1.725}, {key: 'extra active', text: 'Extra active (very hard exercise/sports & physical job or 2x training)', value: 1.9}]
    const goalOptions = [{key: 'lose weight', text: 'Lose Weight', value: 'lose'}, {key: 'gain', text: 'Gain Muscle', value: 'gain'}]
    const feetOptions = [{key: 1, text: "1", value: 1}, {key: 2, text: "2", value: 2}, {key: 3, text: "3", value: 3}, {key: 4, text: "4", value: 4}, {key: 5, text: "5", value: 5}, {key: 6, text: "6", value: 6}, {key: 7, text: "7", value: 7}, {key: 8, text: "8", value: 8}]
    const inchesOptions = [{key: 0, text: "0", value: 0}, {key: 1, text: "1", value: 1}, {key: 2, text: "2", value: 2}, {key: 3, text: "3", value: 3}, {key: 4, text: "4", value: 4}, {key: 5, text: "5", value: 5}, {key: 6, text: "6", value: 6}, {key: 7, text: "7", value: 7}, {key: 8, text: "8", value: 8}, {key: 9, text: "9", value: 9}, {key: 10, text: "10", value: 10}, {key: 11, text: "11", value: 11}]
    return(

    <div>
      <Card id="bmr-form">
        <Card.Content extra>
        <Form>
          <Radio style={{marginRight: "70px"}} checked={this.props.gender === 'Female'} onChange={(e) => {this.props.enableButton(e); this.props.getGender(e)}} label="Female" value="Female" />
          <Radio checked={this.props.gender === 'Male'} onChange={(e) => {this.props.enableButton(e); this.props.getGender(e)}} label="Male" value="Male" /><br/><br/>
          <Form.Select style={{width: "100%"}} onChange={(e) => {this.props.getFeet(e); this.props.enableButton(e)}} required={true} options={feetOptions} name='heightFeet' label='Height (Feet)' placeholder='Feet...' />
          <Form.Select style={{width: "100%%"}} onChange={(e) => {this.props.getInches(e); this.props.enableButton(e)}} required={true} options={inchesOptions} name='heightInches' label='Height (Inches)' placeholder='Inches...' />
          <Form.Select onChange={(e) => {this.props.getActivityLevel(e); this.props.enableButton(e)}} required={true} name='activityLevel' label="Activity Level" options={activityOptions} placeholder="Activity Level..." />
          <Form.Select onChange={(e) => {this.props.getGoal(e); this.props.enableButton(e)}} required={true} name='goal' label='Goal' options={goalOptions} placeholder="Goal..." />
          <Form.Input onChange={(e) => {this.props.handleChange(e); this.props.enableButton(e)}} onInput={(e)=>{e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0,2)}} required={true} name='age' type='number' label="Age" placeholder='Age...' />
          <Form.Input onChange={(e) => {this.props.handleChange(e); this.props.enableButton(e)}} onInput={(e)=>{e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0,3)}} required={true} name='weightLb' type='number' label='Weight (Pounds)' placeholder='Weight...' /><br/>
          <Button disabled={this.props.buttonDisabled} id="button" style={{width: "100%"}} onClick={() => {this.props.calculateBmr(this.state.value); this.props.addOneToStep(); this.props.calculateCalories(); this.props.saveUser(); this.props.scrollToTop()}} type="submit">
            Step 2 - Select Body Type <Icon name="right arrow" />
          </Button>
        </Form>
        </Card.Content>
      </Card>
    </div>
    )
  }
}

export default UserInfoForm

// <Form>
//   <Form.Field>
//     <Radio
//       label='Imperial (Feet/Inches/Pounds)'
//       name='radioGroup'
//       value='imperial'
//       checked={this.state.value === 'imperial'}
//       onChange={(e, value) => {this.handleChange(e, value); this.props.resetForm()}}
//     />
//   </Form.Field><br/>
// </Form>

// <Form.Select onChange={(e) => {this.props.getGender(e); this.props.enableButton(e)}} required={true} name='gender' label='Gender' options={genderOptions} placeholder='Gender...' />
