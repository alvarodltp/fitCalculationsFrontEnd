import React from 'react'
import { Form, Card, Button, Checkbox, Icon, Grid } from 'semantic-ui-react'
import Fade from 'react-reveal/Slide';
// import {Form, Input, Select, Label} from 'formsy-semantic-ui-react';

class UserInfoForm extends React.Component {
  constructor(){
    super()
    this.state={
      value: 'imperial'
    }
  }

  handleChange = (e, { value }) => this.setState({ value })

  render(){
    const genderOptions = [{ text: 'Male', value: 'male' }, { text: 'Female', value: 'female' }]
    const activityOptions = [{key: 'sedentary', text: 'Sedentary (little or no exercise)', value: 1.2}, {key: 'light', text: 'Lightly active (light exercise/sports 1-3 days/week)', value: 1.375}, {key: 'moderate', text: 'Moderately active (moderate exercise/sports 3-5 days/week)', value: 1.55}, {key: 'very active', text: 'Very active (hard exercise/sports 6-7 days a week)', value: 1.725}, {key: 'extra active', text: 'Extra active (very hard exercise/sports & physical job or 2x training)', value: 1.9}]
    const goalOptions = [{key: 'lose weight', text: 'Lose Weight/Get Lean', value: 'lose'}, {key: 'gain', text: 'Gain Muscle', value: 'gain'}]
    const weightPerWeek = [{key: '0.5', text: 'Slow - 0.5 lb. Per Week', value: '0.5'}, {key: '1.5', text: ' Steady - 1 lb. To 1.5 lb. Per Week', value: '1.5'}, {key: '2.0', text: 'Accelerated - 2 lb. Per Week', value: '2.0'}]
    const feetOptions = [{key: 2, text: "2", value: 2}, {key: 3, text: "3", value: 3}, {key: 4, text: "4", value: 4}, {key: 5, text: "5", value: 5}, {key: 6, text: "6", value: 6}, {key: 7, text: "7", value: 7}, {key: 8, text: "8", value: 8}]
    const inchesOptions = [{key: 0, text: "0", value: 0}, {key: 1, text: "1", value: 1}, {key: 2, text: "2", value: 2}, {key: 3, text: "3", value: 3}, {key: 4, text: "4", value: 4}, {key: 5, text: "5", value: 5}, {key: 6, text: "6", value: 6}, {key: 7, text: "7", value: 7}, {key: 8, text: "8", value: 8}, {key: 9, text: "9", value: 9}, {key: 10, text: "10", value: 10}, {key: 11, text: "11", value: 11}]

    return(
      <Fade left>
        <Card id="bmr-form-mobile">
          <Card.Content extra>
            <Form>
              <Grid stackable columns={2}>
                <Grid.Row>
                  <Grid.Column width={8}>
                    <Form.Select style={{width: "100%"}} onChange={(e) => {this.props.getFeet(e); this.props.enableButton(e)}} options={feetOptions} name='heightFeet' label='Height (Feet)' placeholder='Feet...' />
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <Form.Select style={{width: "100%"}} onChange={(e) => {this.props.getInches(e); this.props.enableButton(e)}} options={inchesOptions} name='heightInches' label='Height (Inches)' placeholder='Inches...' />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={8}>
                    <Form.Select onChange={(e) => {this.props.getActivityLevel(e); this.props.enableButton(e)}} name='activityLevel' label="Activity Level" options={activityOptions} placeholder="Activity Level..." />
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <Form.Select onChange={(e) => {this.props.getGoal(e); this.props.enableButton(e)}} name='goal' label='Goal' options={goalOptions} placeholder="Goal..." />
                  </Grid.Column>
                </Grid.Row>
                { this.props.goal !== "" ?
                <Grid.Row>
                  <Grid.Column width={16}>
                    <Form.Select onChange={(e) => {this.props.getWeightToLose(e); this.props.enableButton(e)}} name='weightPerWeek' label={this.props.goal === 'Lose Weight' ? 'Weight To Lose' : 'Weight To Gain'} options={weightPerWeek} placeholder="Weight To Lose Per Week..." />
                  </Grid.Column>
                </Grid.Row> : null }
                <Grid.Row>
                  <Grid.Column width={8}>
                    <Form.Input onChange={(e) => {this.props.handleChange(e); this.props.enableButton(e)}} onInput={(e)=>{e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0,2)}} name='age' type='number' label="Age" placeholder='Age...' />
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <Form.Input onChange={(e) => {this.props.handleChange(e); this.props.enableButton(e)}} onInput={(e)=>{e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0,3)}} name='weightLb' type='number' label='Weight (Pounds)' placeholder='Weight...' />
                  </Grid.Column>
                </Grid.Row>
              </Grid><br/>

              <Checkbox style={{marginRight: "70px"}} checked={this.props.gender === 'Female'} onChange={(e) => {this.props.enableButton(e); this.props.getGender(e)}} label="Female" value="Female" />
              <Checkbox checked={this.props.gender === 'Male'} onChange={(e) => {this.props.enableButton(e); this.props.getGender(e)}} label="Male" value="Male" /><br/><br/>
              {this.props.mobileDevice === false ?
              <Button size="large" disabled={this.props.buttonDisabled} id="button" style={{width: "100%"}} onClick={() => {this.props.hideForm(); this.props.calculateBmr(this.state.value); this.props.addOneToStep(); this.props.calculateCalories()}} type="submit">
                STEP 2 - SELECT BODY TYPE <Icon name="right arrow" />
              </Button> :
              <Button size="small" disabled={this.props.buttonDisabled} id="button-mobile" style={{width: "100%"}} onClick={() => {this.props.hideForm(); this.props.calculateBmr(this.state.value); this.props.addOneToStep(); this.props.calculateCalories()}} type="submit">
                STEP 2 - SELECT BODY TYPE <Icon name="right arrow" />
              </Button> }
            </Form>
          </Card.Content>
        </Card>
      </Fade>


    )
  }
}

export default UserInfoForm


// <p style={{color: "black", fontSize: "13px"}}>Gender</p>

// <Card id="bmr-form">
//   <Card.Content extra>
//   <Form>
//     <Form.Select style={{width: "100%"}} onChange={(e) => {this.props.getFeet(e); this.props.enableButton(e)}} options={feetOptions} name='heightFeet' label='Height (Feet)' placeholder='Feet...' />
//     <Form.Select style={{width: "100%"}} onChange={(e) => {this.props.getInches(e); this.props.enableButton(e)}} options={inchesOptions} name='heightInches' label='Height (Inches)' placeholder='Inches...' />
//     <Form.Select onChange={(e) => {this.props.getActivityLevel(e); this.props.enableButton(e)}} name='activityLevel' label="Activity Level" options={activityOptions} placeholder="Activity Level..." />
//     <Form.Select onChange={(e) => {this.props.getGoal(e); this.props.enableButton(e)}} name='goal' label='Goal' options={goalOptions} placeholder="Goal..." />
//     { this.props.goal !== "" ? <Form.Select onChange={(e) => {this.props.getWeightToLose(e); this.props.enableButton(e)}} name='weightPerWeek' label={this.props.goal === 'Lose Weight' ? 'Weight To Lose' : 'Weight To Gain'} options={weightPerWeek} placeholder="Weight To Lose Per Week..." /> : null }
//     <Form.Input onChange={(e) => {this.props.handleChange(e); this.props.enableButton(e)}} onInput={(e)=>{e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0,2)}} name='age' type='number' label="Age" placeholder='Age...' />
//     <Form.Input onChange={(e) => {this.props.handleChange(e); this.props.enableButton(e)}} onInput={(e)=>{e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0,5)}} name='weightLb' type='number' label='Weight (Pounds)' placeholder='Weight...' />
//     <p style={{color: "black", fontSize: "13px"}}>Gender</p>
//     <Checkbox style={{marginRight: "70px"}} checked={this.props.gender === 'Female'} onChange={(e) => {this.props.enableButton(e); this.props.getGender(e)}} label="Female" value="Female" />
//     <Checkbox checked={this.props.gender === 'Male'} onChange={(e) => {this.props.enableButton(e); this.props.getGender(e)}} label="Male" value="Male" /><br/><br/>
//     <Button disabled={this.props.buttonDisabled} id="button" style={{width: "100%"}} onClick={() => {this.props.calculateBmr(this.state.value); this.props.addOneToStep(); this.props.calculateCalories(); this.props.saveUser(); this.props.scrollToTop()}} type="submit">
//       Step 2 - Select Body Type <Icon name="right arrow" />
//     </Button>
//   </Form>
//   </Card.Content>
// </Card>

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
