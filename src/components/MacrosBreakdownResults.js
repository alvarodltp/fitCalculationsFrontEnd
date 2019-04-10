import React from 'react'
import { Icon, Grid } from 'semantic-ui-react'
import {Doughnut} from 'react-chartjs-2';

class MacrosBreakdownResults extends React.Component {
  render(){

    const data = {
      labels: [
        'Calories',
        'Protein',
        'Carbs',
        'Fats'
      ],
      datasets: [{
        data: [this.props.caloriesInMeal, this.props.proteinInMeal, this.props.carbsInMeal, this.props.fatsInMeal],
        backgroundColor: ['#2761f1','#A9A9A9','#e80aaa','#D3D3D3'],
        hoverBackgroundColor: ['#2761f1','#A9A9A9','#e80aaa','#D3D3D3']
      }]
    }


    return(
    <React.Fragment>
        <p>Based on your selection of {this.props.mealsPerDay} meals per day, each meal should have the following macronutrient breakdown.</p>
        <Grid style={{margin: "0 auto", width: "100%"}} columns={2}>
          <Grid.Row>
            <Grid.Column width={10}>
            <Doughnut
               data={data}
               width={300}
               height={300}
               options={{
               maintainAspectRatio: false
               }}
               />
            </Grid.Column>
            <Grid.Column width={6} >
              <div id="macros-numbers">
                <p><Icon style={{color: "#7CFC00"}} name="check" size="small" />{this.props.caloriesInMeal} Calories</p>
                <p><Icon style={{color: "#7CFC00"}} name="check" size="small" />{this.props.proteinInMeal}G Protein</p>
                <p><Icon style={{color: "#7CFC00"}} name="check" size="small" />{this.props.carbsInMeal}G Carbs</p>
                <p><Icon style={{color: "#7CFC00"}} name="check" size="small" />{this.props.fatsInMeal}G Fats</p>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </React.Fragment>

    )
  }
}

export default MacrosBreakdownResults
