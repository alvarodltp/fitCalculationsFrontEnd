import React from 'react'
import { Card, Button, Input, Container, Form, Radio } from 'semantic-ui-react'

class UserInfoForm extends React.Component {
  constructor(){
    super()
    this.state={
      value: "",
    }
  }

  handleChange = (e, { value }) => this.setState({ value })

  render(){
    const genderOptions = [{ text: 'Male', value: 'male' }, { text: 'Female', value: 'female' }]
    const activityOptions = [{key: 'sedentary', text: 'Sedentary (little or no exercise)', value: 1.2}, {key: 'light', text: 'Lightly active (light exercise/sports 1-3 days/week)', value: 1.375}, {key: 'moderate', text: 'Moderately active (moderate exercise/sports 3-5 days/week)', value: 1.55}, {key: 'very active', text: 'Very active (hard exercise/sports 6-7 days a week)', value: 1.725}, {key: 'extra active', text: 'Extra active (very hard exercise/sports & physical job or 2x training)', value: 1.9}]
    const goalOptions = [{key: 'lose weight', text: 'Lose Weight', value: 'lose'}, {key: 'maintain', text: 'Maintain Current Weight', value: 'maintain'}, {key: 'gain', text: 'Gain Muscle', value: 'gain'}]
    return(
      <div>
        <Card.Group id="card-group">
          <Card>
            <Card.Content>
              <Card.Header>Calculate Your BMR</Card.Header>
              <Card.Description>
                Steve wants to add you to the group <strong>best friends</strong>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
            <Form>
              <Form.Field>
                <Radio
                  label='Metric(cm/Kg)'
                  name='radioGroup'
                  value='metric'
                  checked={this.state.value === 'metric'}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <Radio
                  label='Imperial(Feet/Inches/Pounds)'
                  name='radioGroup'
                  value='imperial'
                  checked={this.state.value === 'imperial'}
                  onChange={this.handleChange}
                />
              </Form.Field>
            </Form>

            {this.state.value === 'metric' ?
            <Form>
                <Form.Input onChange={this.props.handleChange} name='name' label='Name' placeholder='Name...' /><br/>
                <Form.Select onChange={this.props.getGender} name='gender' label='Gender' options={genderOptions} placeholder='Gender...' /><br/>
                <Form.Input onChange={this.props.handleChange} name='age' type='number' label="Age" placeholder='Age...' />
                <Form.Input onChange={this.props.handleChange} name='weightKg' type='number' label='Weight (Kg.)' placeholder='Weight...' /><br/>
                <Form.Input onChange={this.props.handleChange} name='heightCm' type='number' label='Height (Centimeters)' placeholder='Height...' /><br/>
                <Form.Select onChange={this.props.getActivityLevel} name='activityLevel' label="Activity Level" options={activityOptions} placeholder="Activity Level..." /><br/>
                <Form.Select onChange={this.props.getGoal} name='goal' label='Goal' options={goalOptions} placeholder="Goal..." /><br/>
            </Form> :
            <Form>
                <Form.Input onChange={this.props.handleChange} name='name' label='Name' placeholder='Name...' /><br/>
                <Form.Select onChange={this.props.getGender} name='gender' label='Gender' options={genderOptions} placeholder='Gender...' /><br/>
                <Form.Input onChange={this.props.handleChange} name='age' type='number' label="Age" placeholder='Age...' />
                <Form.Input onChange={this.props.handleChange} name='weightLb' type='number' label='Weight (Pounds)' placeholder='Weight...' /><br/>
                <Form.Input onChange={this.props.handleChange} name='heightFeet' type='number' label='Height (Feet)' placeholder='Height...' /><br/>
                <Form.Select onChange={this.props.getActivityLevel} name='activityLevel' label="Activity Level" options={activityOptions} placeholder="Activity Level..." /><br/>
                <Form.Select onChange={this.props.getGoal} name='goal' label='Goal' options={goalOptions} placeholder="Goal..." /><br/>
            </Form> }

                <Button basic color='green'>
                  Calculate BMR
                </Button>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Card.Header>Molly Thomas</Card.Header>
              <Card.Meta>New User</Card.Meta>
              <Card.Description>
                Molly wants to add you to the group <strong>musicians</strong>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button basic color='green'>
                  Approve
                </Button>
              </div>
            </Card.Content>
          </Card>
        </Card.Group>
      </div>
    )
  }
}

export default UserInfoForm
