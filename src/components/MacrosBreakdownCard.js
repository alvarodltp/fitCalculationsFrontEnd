import React from 'react'
import { Card, Button, Form, Icon } from 'semantic-ui-react'

class MacrosBreakdownCard extends React.Component {
  render(){
    const options = [{ text: '1 Meal', value: '1' }, { text: '2 Meals', value: '2' }, { text: '3 Meals', value: '3' }, { text: '4 Meals', value: '4' }, { text: '5 Meals', value: '5' }, { text: '6 Meals', value: '6' }, { text: '7 Meals', value: '7' }, { text: '8 Meals', value: '8' }]
    return(
      <Card id="bmr-results">
        <Card.Content>
          <h2 id="bmr-results-text"><Icon style={{color: "yellow", border: "black"}} name="star" size="small" />CALCULATE YOUR MACROS BREAKDOWN</h2>
          <p>Based on the number of meals you will be eating per day, we can estimate what your macros should be for each meal. We recommend between 3 and 6 meals for optimal results.</p>
          <Form>
            <Form.Select onChange={this.props.getNumber} required={true} options={options} name='meals' placeholder='Number of meals...' />
            <Button id="button" onClick={this.props.calculateBreakdown}>Calculate Your Daily Breakdown</Button>
            {this.props.caloriesBreakdown ?
            <div style={{marginTop: "20px"}}>
              <h3><Icon style={{color: "#7CFC00"}} name="check circle" size="small" /> {this.props.caloriesBreakdown} CALORIES PER MEAL</h3>
              <h3><Icon style={{color: "#7CFC00"}} name="check circle" size="small" /> {this.props.proteinBreakdown}G OF PROTEIN PER MEAL</h3>
              <h3><Icon style={{color: "#7CFC00"}} name="check circle" size="small" /> {this.props.carbsBreakdown}G OF CARBS PER MEAL</h3>
              <h3><Icon style={{color: "#7CFC00"}} name="check circle" size="small" /> {this.props.fatsBreakdown}G OF FATS PER MEAL</h3>
            </div> : null }
          </Form>
        </Card.Content>
      </Card>

    )
  }
}

export default MacrosBreakdownCard
