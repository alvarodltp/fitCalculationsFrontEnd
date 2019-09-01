import React from 'react'
import { Button, Form, Card } from 'semantic-ui-react'
import { 
  activityOptions, 
  goalOptions, 
  weightPerWeek, 
  feetOptions, 
  inchesOptions, 
  dietType,
  motivationOptions,
  bodyOptions
} from '../data/dropdownData'

class NewCalculationForm extends React.Component {
  render(){
    return(
      <React.Fragment>
      {this.props.currentUserStatsNewCalc ?
        <div>
          <h1>New Calculation</h1>
          <Card id="card-dashboard-new-calc">
            <Form style={{margin: "0 auto"}}>
              <Form.Input style={{margin: "15px", width: "90%"}} onChange={this.props.handleChange} value={this.props.currentUserStats.weight_in_lb} name="weight_in_lb" label="Weight" placeholder='Weight' type="number" />
              <Form.Select style={{margin: "15px", width: "90%"}}  onChange={(_, data) => {this.props.handleChangeDropdown(data.value, "height_in_feet")}} text={this.props.currentUserStatsNewCalc.height_in_feet} defaultValue={this.props.currentUserStatsNewCalc.height_in_feet} label="Feet" placeholder='Feet' selection="true" options={feetOptions} />
              <Form.Select style={{margin: "15px", width: "90%"}}  onChange={(_, data) => {this.props.handleChangeDropdown(data.value, "height_in_inches")}} text={this.props.currentUserStatsNewCalc.height_in_inches} defaultValue={this.props.currentUserStatsNewCalc.height_in_inches} label="Inches" placeholder='Inches' selection="true" options={inchesOptions} />
              <Form.Select style={{margin: "15px", width: "90%"}}  onChange={(_, data) => {this.props.handleChangeDropdown(data.value, "activity_level")}} text={this.props.currentUserStatsNewCalc.activity_level} defaultValue={this.props.currentUserStatsNewCalc.activity_level}label="Activity Level" placeholder='Activity Level' selection="true" options={activityOptions} />
              <Form.Select style={{margin: "15px", width: "90%"}}  onChange={(_, data) => {this.props.handleChangeDropdown(data.value, "goal")}} text={this.props.currentUserStatsNewCalc.goal} defaultValue={this.props.currentUserStatsNewCalc.goal} label="Goal" placeholder='Goal' selection="true" options={goalOptions} />
              <Form.Select style={{margin: "15px", width: "90%"}}  onChange={(_, data) => {this.props.handleChangeDropdown(data.value, "weight_to_manage")}} text={this.props.currentUserStatsNewCalc.weight_to_manage} defaultValue={this.props.currentUserStatsNewCalc.weight_to_manage} label="Weight To Lose/Gain" placeholder='Weight To Manage' selection="true" options={weightPerWeek} />
              <Form.Select style={{margin: "15px", width: "90%"}}  onChange={(_, data) => {this.props.handleChangeDropdown(data.value, "diet_type")}} text={this.props.currentUserStatsNewCalc.diet_type} defaultValue={this.props.currentUserStatsNewCalc.diet_type} label="Diet Type" placeholder='Diet Type' selection="true" options={dietType} />
              <Form.Select style={{margin: "15px", width: "90%"}}  onChange={(_, data) => {this.props.handleChangeDropdown(data.value, "body_type")}} text={this.props.currentUserStatsNewCalc.body_type} defaultValue={this.props.currentUserStatsNewCalc.body_type} label="Body Type" placeholder='Body Type' selection="true" options={bodyOptions} />
              <Form.Select style={{margin: "15px", width: "90%"}}  onChange={(_, data) => {this.props.handleChangeDropdown(data.value, "reason_to_get_fit")}} text={this.props.currentUserStatsNewCalc.reason_to_get_fit} defaultValue={this.props.currentUserStatsNewCalc.reason_to_get_fit} label="Motivation" placeholder='Motivation' selection="true" options={motivationOptions} />
              <Button onClick={this.props.calculateBmr} style={{width: "210px", marginLeft: "25px", marginTop: "35px", background: "#2761f1", color: "white"}}>Submit</Button>
            </Form>
          </Card>
        </div> : null }
      </React.Fragment>

    )
  }
}

export default NewCalculationForm
