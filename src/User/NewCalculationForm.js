import React from 'react'
import { Button, Input, Dropdown, Select, Form } from 'semantic-ui-react'


class NewCalculationForm extends React.Component {
  render(){
    debugger
    const activityOptions = [{key: 'sedentary', text: 'Sedentary (little or no exercise)', value: 1.2}, {key: 'light', text: 'Lightly active (light exercise/sports 1-3 days/week)', value: 1.375}, {key: 'moderate', text: 'Moderately active (moderate exercise/sports 3-5 days/week)', value: 1.55}, {key: 'very active', text: 'Very active (hard exercise/sports 6-7 days a week)', value: 1.725}, {key: 'extra active', text: 'Extra active (very hard exercise/sports & physical job or 2x training)', value: 1.9}]
    const goalOptions = [{key: 'lose weight', text: 'Lose Weight/Get Lean', value: 'lose'}, {key: 'gain', text: 'Gain Muscle', value: 'gain'}]
    const weightPerWeek = [{key: '0.5', text: 'Slow - 0.5 lb. Per Week', value: '0.5'}, {key: '1.5', text: ' Steady - 1 lb. To 1.5 lb. Per Week', value: '1.5'}, {key: '2.0', text: 'Accelerated - 2 lb. Per Week', value: '2.0'}]
    const feetOptions = [{key: 2, text: "2", value: 2}, {key: 3, text: "3", value: 3}, {key: 4, text: "4", value: 4}, {key: 5, text: "5", value: 5}, {key: 6, text: "6", value: 6}, {key: 7, text: "7", value: 7}, {key: 8, text: "8", value: 8}]
    const inchesOptions = [{key: 0, text: "0", value: 0}, {key: 1, text: "1", value: 1}, {key: 2, text: "2", value: 2}, {key: 3, text: "3", value: 3}, {key: 4, text: "4", value: 4}, {key: 5, text: "5", value: 5}, {key: 6, text: "6", value: 6}, {key: 7, text: "7", value: 7}, {key: 8, text: "8", value: 8}, {key: 9, text: "9", value: 9}, {key: 10, text: "10", value: 10}, {key: 11, text: "11", value: 11}]
    const weightPerWeekInKg = [{key: '0.22', text: 'Slow - 0.22 kg. Per Week', value: '0.22'}, {key: '0.68', text: ' Steady - 0.45 kg. To 0.68 kg. Per Week', value: '0.68'}, {key: '0.90', text: 'Accelerated - 0.90 kg. Per Week', value: '0.90'}]
    const genderOptions = [{key: 'male', text: 'Male', value: 'male'}, {key: 'female', text: 'Female', value: 'female'}]
    const dietType = [{key: 'standard', text: 'Standart Western', value: 'standard'}, {key: 'vegan', text: 'Vegan', value: 'vegan'}, {key: 'vegetarian', text: 'Vegetarian', value: 'vegetarian'}]
    const motivationOptions = [{key: 'athletic', text: 'Athletic Event', value: 'athletic'}, {key: 'wedding', text: 'Wedding', value: 'wedding'}, {key: 'vacation', text: 'Vacation', value: 'vacation'}, {key: 'health', text: 'Health Reasons', value: 'health'}]
    const bodyOptions = [{key: 'Ectomorph', text: 'Ectomorph', value: 'ectomorph'}, {key: 'mesomorph', text: 'Mesomorph', value: 'mesomorph'}, {key: 'endomorph', text: 'Endomorph', value: 'endomorph'}]
    return(
      <React.Fragment>

        <Form>
          <Form.Group>
            <Form.Input style={{margin: "15px", width: "100%"}} onChange={this.props.handleChange} value={this.props.currentUserStats.weight_in_lb} name="weight_in_lb" label="Weight" placeholder='Weight'  />
            <Form.Input style={{margin: "15px"}} onChange={this.props.handleChange} value={this.props.currentUserStats.age} name="age" label="Age" placeholder='Age' />
          </Form.Group>
          <Form.Group>
            <Form.Select style={{margin: "15px"}}  onChange={(_, data) => {this.props.handleChangeDropdown(data.value, "height_in_feet")}} text={this.props.currentUserStatsNewCalc[0].height_in_feet} defaultValue={this.props.currentUserStatsNewCalc[0].height_in_feet} label="Feet" placeholder='Feet' selection="true" options={feetOptions} />
            <Form.Select style={{margin: "15px"}}  onChange={(_, data) => {this.props.handleChangeDropdown(data.value, "height_in_cm")}} text={this.props.currentUserStatsNewCalc[0].height_in_inches} defaultValue={this.props.currentUserStatsNewCalc[0].height_in_inches} label="Inches" placeholder='Inches' selection="true" options={inchesOptions} />
            <Form.Select style={{margin: "15px"}}  onChange={(_, data) => {this.props.handleChangeDropdown(data.value, "activity_level")}} text={this.props.currentUserStatsNewCalc[0].activity_level} defaultValue={this.props.currentUserStatsNewCalc[0].activity_level}label="Activity Level" placeholder='Activity Level' selection="true" options={activityOptions} />
          </Form.Group>
          <Form.Group>
            <Form.Select style={{margin: "15px"}}  onChange={(_, data) => {this.props.handleChangeDropdown(data.value, "goal")}} text={this.props.currentUserStatsNewCalc[0].goal} defaultValue={this.props.currentUserStatsNewCalc[0].goal} label="Goal" placeholder='Goal' selection="true" options={goalOptions} />
            <Form.Select style={{margin: "15px"}}  onChange={(_, data) => {this.props.handleChangeDropdown(data.value, "weight_to_manage")}} text={this.props.currentUserStatsNewCalc[0].weight_to_manage} defaultValue={this.props.currentUserStatsNewCalc[0].weight_to_manage} label="Weight To Lose/Gain" placeholder='Weight To Manage' selection="true" options={weightPerWeek} />
            <Form.Select style={{margin: "15px"}}  onChange={(_, data) => {this.props.handleChangeDropdown(data.value, "diet_type")}} text={this.props.currentUserStatsNewCalc[0].diet_type} defaultValue={this.props.currentUserStatsNewCalc[0].diet_type} label="Diet Type" placeholder='Diet Type' selection="true" options={dietType} />
          </Form.Group>
          <Form.Group>
            <Form.Select style={{margin: "15px"}}  onChange={(_, data) => {this.props.handleChangeDropdown(data.value, "body_type")}} text={this.props.currentUserStatsNewCalc[0].body_type} defaultValue={this.props.currentUserStatsNewCalc[0].body_type} label="Body Type" placeholder='Body Type' selection="true" options={bodyOptions} />
            <Form.Select style={{margin: "15px"}}  onChange={(_, data) => {this.props.handleChangeDropdown(data.value, "reason_to_get_fit")}} text={this.props.currentUserStatsNewCalc[0].reason_to_get_fit} defaultValue={this.props.currentUserStatsNewCalc[0].reason_to_get_fit} label="Motivation" placeholder='Motivation' selection="true" options={motivationOptions} />
            <Button onClick={this.props.calculateBmr} style={{width: "210px", marginLeft: "25px", marginTop: "35px", background: "#2761f1", color: "white"}}>Submit</Button>
          </Form.Group>
        </Form>
      </React.Fragment>
    )
  }
}

export default NewCalculationForm
