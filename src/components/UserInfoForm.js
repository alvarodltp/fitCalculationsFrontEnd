import React from 'react'
import { Card, Button, Form, Radio, Icon } from 'semantic-ui-react'

class UserInfoForm extends React.Component {
  constructor(){
    super()
    this.state={
      value: 'metric',
    }
  }

  handleChange = (e, { value }) => this.setState({ value })

  render(){
    const genderOptions = [{ text: 'Male', value: 'male' }, { text: 'Female', value: 'female' }]
    const activityOptions = [{key: 'sedentary', text: 'Sedentary (little or no exercise)', value: 1.2}, {key: 'light', text: 'Lightly active (light exercise/sports 1-3 days/week)', value: 1.375}, {key: 'moderate', text: 'Moderately active (moderate exercise/sports 3-5 days/week)', value: 1.55}, {key: 'very active', text: 'Very active (hard exercise/sports 6-7 days a week)', value: 1.725}, {key: 'extra active', text: 'Extra active (very hard exercise/sports & physical job or 2x training)', value: 1.9}]
    const goalOptions = [{key: 'lose weight', text: 'Lose Weight', value: 'lose'}, {key: 'maintain', text: 'Maintain Current Weight', value: 'maintain'}, {key: 'gain', text: 'Gain Muscle', value: 'gain'}]
    const feetOptions = [{key: 1, text: "1", value: 1}, {key: 2, text: "2", value: 2}, {key: 3, text: "3", value: 3}, {key: 4, text: "4", value: 4}, {key: 5, text: "5", value: 5}, {key: 6, text: "6", value: 6}, {key: 7, text: "7", value: 7}, {key: 8, text: "8", value: 8}]
    const inchesOptions = [{key: 0, text: "0", value: 0}, {key: 1, text: "1", value: 1}, {key: 2, text: "2", value: 2}, {key: 3, text: "3", value: 3}, {key: 4, text: "4", value: 4}, {key: 5, text: "5", value: 5}, {key: 6, text: "6", value: 6}, {key: 7, text: "7", value: 7}, {key: 8, text: "8", value: 8}, {key: 9, text: "9", value: 9}, {key: 10, text: "10", value: 10}, {key: 11, text: "11", value: 11}]
    return(
      <div>
          <h3>Step 1 - Enter Your Information {this.props.caloriesForGoal > 1000 ? <Icon style={{color: "#7CFC00"}} name='check' /> : null}</h3>
          <Card id="bmr-form" style={{backgroundColor: "lightgray"}}>
            <Card.Content extra>
            <Form>
              <Form.Field>
                <Radio
                  label='Metric (cm/Kg)'
                  name='radioGroup'
                  value='metric'
                  checked={this.state.value === 'metric'}
                  onChange={(e, value) => {this.handleChange(e, value); this.props.resetForm()}}
                />
              </Form.Field>
              <Form.Field>
                <Radio
                  label='Imperial (Feet/Inches/Pounds)'
                  name='radioGroup'
                  value='imperial'
                  checked={this.state.value === 'imperial'}
                  onChange={(e, value) => {this.handleChange(e, value); this.props.resetForm()}}
                />
              </Form.Field>
            </Form>

            {this.state.value === 'metric' ?
            <Form>
                <Form.Select required onChange={this.props.getGender} name='gender' label='Gender' options={genderOptions} placeholder='Gender...' />
                <Form.Input required onChange={this.props.handleChange} name='age' type='number' label="Age" placeholder='Age...' />
                <Form.Input required onChange={this.props.handleChange} name='weightKg' type='number' label='Weight (Kg.)' placeholder='Weight...' />
                <Form.Input required onChange={this.props.handleChange} name='heightCm' type='number' label='Height (Centimeters)' placeholder='Height...' />
                <Form.Select required onChange={this.props.getActivityLevel} name='activityLevel' label="Activity Level" options={activityOptions} placeholder="Activity Level..." />
                <Form.Select required onChange={this.props.getGoal} name='goal' label='Goal' options={goalOptions} placeholder="Goal..." /><br/>
                <Button id="button" style={{width: "100%"}} onClick={() => {this.props.calculateBmr(this.state.value); this.props.addOneToStep()}} type="submit">
                  Step 2 - Select Body Type <Icon name="right arrow" />
                </Button>
            </Form> :
            <Form>
                <Form.Select required onChange={this.props.getGender} name='gender' label='Gender' options={genderOptions} placeholder='Gender...' />
                <Form.Input required onChange={this.props.handleChange} name='age' type='number' label="Age" placeholder='Age...' />
                <Form.Input required onChange={this.props.handleChange} name='weightLb' type='number' label='Weight (Pounds)' placeholder='Weight...' />
                <Form.Select required onChange={this.props.getFeet} options={feetOptions} name='heightFeet' label='Height (Feet)' placeholder='Feet...' />
                <Form.Select required onChange={this.props.getInches} options={inchesOptions} name='heightInches' label='Height (Inches)' placeholder='Inches...' />
                <Form.Select required onChange={this.props.getActivityLevel} name='activityLevel' label="Activity Level" options={activityOptions} placeholder="Activity Level..." />
                <Form.Select required onChange={this.props.getGoal} name='goal' label='Goal' options={goalOptions} placeholder="Goal..." /><br/>
                <Button id="button" style={{width: "100%"}} onClick={() => this.props.calculateBmr(this.state.value)} type="submit">
                  Step 2 - Select Body Type <Icon name="right arrow" />
                </Button>
            </Form> }


            </Card.Content>
          </Card>
      </div>
    )
  }
}

export default UserInfoForm
