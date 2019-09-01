import React from 'react'
import { Form, Card, Button, Checkbox, Icon, Grid } from 'semantic-ui-react'
import Fade from 'react-reveal/Slide';
import './UserInfoForm.css'
import { 
  activityOptions, 
  goalOptions, 
  weightPerWeek, 
  feetOptions, 
  inchesOptions, 
  weightPerWeekInKg 
} from '../data/dropdownData'

class UserInfoForm extends React.Component {

  render(){
    return(
      <React.Fragment>
      {this.props.formType === 'Imperial' ?
      <Fade left>
        <Card id="bmr-form-mobile">
          <Card.Content extra>
            <Form>
              <Checkbox checked={this.props.formType === "Imperial"} style={{marginRight: "70px"}} onChange={this.props.getFormType} label="Imperial" value="Imperial" />
              <Checkbox checked={this.props.formType === "Metric"} onChange={this.props.getFormType} label="Metric" value="Metric" /><br/><br/>
              <Grid stackable columns={2}>
                <Grid.Row>
                  <Grid.Column width={8}>
                    <Form.Select style={{width: "100%"}} onChange={(e) => {this.props.getFeet(e); this.props.enableButton(e)}} value={this.props.feet} options={feetOptions} name='heightFeet' label='Height (Feet)' placeholder='Feet...' />
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <Form.Select style={{width: "100%"}} onChange={(e) => {this.props.getInches(e); this.props.enableButton(e)}} value={this.props.inches} options={inchesOptions} name='heightInches' label='Height (Inches)' placeholder='Inches...' />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={8}>
                    <Form.Select onChange={(e) => {this.props.getActivityLevel(e); this.props.enableButton(e)}} text={this.props.activityLevelText} options={activityOptions} value={this.props.value} selection name='activityLevel' label="Activity Level" placeholder="Activity Level..." />
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <Form.Select onChange={(e) => {this.props.getGoal(e); this.props.enableButton(e)}} text={this.props.goal} name='goal' label='Goal' options={goalOptions} placeholder="Goal..." />
                  </Grid.Column>
                </Grid.Row>
                { this.props.goal !== "" ?
                <Grid.Row>
                  <Grid.Column width={16}>
                    <Form.Select onChange={(e) => {this.props.getWeightToLose(e); this.props.enableButton(e)}} text={this.props.weightToManage} name='weightPerWeek' label={this.props.goal === 'Lose Weight/Get Lean' ? 'Weight To Lose' : 'Weight To Gain'} options={weightPerWeek} placeholder="Weight To Manage..." />
                  </Grid.Column>
                </Grid.Row> : null }
                <Grid.Row>
                  <Grid.Column width={8}>
                    <Form.Input onChange={(e) => {this.props.handleChange(e); this.props.enableButton(e)}} value={this.props.age} onInput={(e)=>{e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0,2)}} name='age' type='number' label="Age" placeholder='Age...' />
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <Form.Input onChange={(e) => {this.props.handleChange(e); this.props.enableButton(e)}} value={this.props.weightLb} onInput={(e)=>{e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0,3)}} name='weightLb' type='number' label='Weight (Pounds)' placeholder='Weight In Lb...' />
                  </Grid.Column>
                </Grid.Row>
              </Grid><br/>

              <Checkbox style={{marginRight: "70px"}} checked={this.props.gender === 'Female'} onChange={(e) => {this.props.enableButton(e); this.props.getGender(e)}} label="Female" value="Female" />
              <Checkbox checked={this.props.gender === 'Male'} onChange={(e) => {this.props.enableButton(e); this.props.getGender(e)}} label="Male" value="Male" /><br/><br/>
              {this.props.mobileDevice === false ?
              <Button size="large" disabled={this.props.buttonDisabled} id="button" style={{width: "100%"}} onClick={() => {this.props.hideForm(); this.props.calculateBmr(this.props.value); this.props.addOneToStep(); this.props.calculateCalories()}} type="submit">
                STEP 2 - SELECT BODY TYPE <Icon name="right arrow" />
              </Button> :
              <Button size="small" disabled={this.props.buttonDisabled} id="button-mobile" style={{width: "100%"}} onClick={() => {this.props.hideForm(); this.props.calculateBmr(this.props.value); this.props.addOneToStep(); this.props.calculateCalories()}} type="submit">
                STEP 2 - SELECT BODY TYPE <Icon name="right arrow" />
              </Button> }
            </Form>
          </Card.Content>
        </Card>
      </Fade> :

      <Fade left>
        <Card id="bmr-form-mobile">
          <Card.Content extra>
            <Form>
            <Checkbox style={{marginRight: "70px"}} onChange={this.props.getFormType} checked={this.props.formType === 'Imperial'} label="Imperial" value="Imperial" />
            <Checkbox checked={this.props.formType === 'Metric'} onChange={this.props.getFormType} label="Metric" value="Metric" /><br/><br/>
              <Grid stackable columns={2}>
                <Grid.Row>
                  <Grid.Column width={16}>
                    <Form.Input style={{width: "100%"}} onChange={(e) => {this.props.handleChange(e); this.props.enableButtonMetricForm(e)}} onInput={(e)=>{e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0,3)}} value={this.props.heightCm} type='number' name='heightCm' label='Height (Centimeters)' placeholder='Cm...' />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={8}>
                    <Form.Select onChange={(e) => {this.props.getActivityLevel(e); this.props.enableButtonMetricForm(e)}} text={this.props.activityLevelText} options={activityOptions} name='activityLevel' label="Activity Level" placeholder="Activity Level..." />
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <Form.Select onChange={(e) => {this.props.getGoal(e); this.props.enableButtonMetricForm(e)}} text={this.props.goal} name='goal' label='Goal' options={goalOptions} placeholder="Goal..." />
                  </Grid.Column>
                </Grid.Row>
                { this.props.goal !== "" ?
                <Grid.Row>
                  <Grid.Column width={16}>
                    <Form.Select onChange={(e) => {this.props.getWeightToLose(e); this.props.enableButtonMetricForm(e)}} text={this.props.weightToManage} name='weightPerWeek' label={this.props.goal === 'Lose Weight/Get Lean' ? 'Weight To Lose' : 'Weight To Gain'} options={weightPerWeekInKg} placeholder="Weight To Manage..." />
                  </Grid.Column>
                </Grid.Row> : null }
                <Grid.Row>
                  <Grid.Column width={8}>
                    <Form.Input onChange={(e) => {this.props.handleChange(e); this.props.enableButtonMetricForm(e)}} value={this.props.age} onInput={(e)=>{e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0,2)}} name='age' type='number' label="Age" placeholder='Age...' />
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <Form.Input onChange={(e) => {this.props.handleChange(e); this.props.enableButtonMetricForm(e)}} value={this.props.weightKg} onInput={(e)=>{e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0,3)}} name='weightKg' type='number' label='Weight (Kilos)' placeholder='Weight In Kg...' />
                  </Grid.Column>
                </Grid.Row>
              </Grid><br/>

              <Checkbox style={{marginRight: "70px"}} checked={this.props.gender === 'Female'} onChange={(e) => {this.props.enableButtonMetricForm(e); this.props.getGender(e)}} label="Female" value="Female" />
              <Checkbox checked={this.props.gender === 'Male'} onChange={(e) => {this.props.enableButtonMetricForm(e); this.props.getGender(e)}} label="Male" value="Male" /><br/><br/>
              {this.props.mobileDevice === false ?
              <Button size="large" disabled={this.props.buttonDisabled} id="button" style={{width: "100%"}} onClick={() => {this.props.hideForm(); this.props.calculateBmr(); this.props.addOneToStep(); this.props.calculateCalories()}} type="submit">
                STEP 2 - SELECT BODY TYPE <Icon name="right arrow" />
              </Button> :
              <Button size="small" disabled={this.props.buttonDisabled} id="button-mobile" style={{width: "100%"}} onClick={() => {this.props.hideForm(); this.props.calculateBmr(); this.props.addOneToStep(); this.props.calculateCalories()}} type="submit">
                STEP 2 - SELECT BODY TYPE <Icon name="right arrow" />
              </Button> }
            </Form>
          </Card.Content>
        </Card>
      </Fade> }
      </React.Fragment>


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


// <Form.Select onChange={(e) => {this.props.getGender(e); this.props.enableButton(e)}} required={true} name='gender' label='Gender' options={genderOptions} placeholder='Gender...' />
