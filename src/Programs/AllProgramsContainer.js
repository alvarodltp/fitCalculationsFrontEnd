import React from 'react'
import { Card, Image, Icon, Grid } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import Header from '../components/Header';
import Programs from './Programs';
import { FaDumbbell } from 'react-icons/fa';

class AllProgramsContainer extends React.Component {
  constructor(){
    super()
    this.state={
      programs: [
            {
              name: '30 Days Abs',
              description: 'Work your core and abs like never before in this 30 day abs program!',
              price: "$29.99",
              image: "abs1.jpg",
              link: "https://fit-calculations.thrivecart.com/30-days-abs/"
            },
            {
              name: 'F#ck Diets',
              description: 'Get a complete report on your nutrition needs, and start seeing results with our easy to follow guide!',
              price: "$49.99",
              image: "diet-booklet.png",
              link: "no-diets"
            },
            {
              name: 'Personalized Nutrition Plan',
              description: 'A professionally made plan based on your goals and preferences!',
              price: "$80.00",
              image: "fish-taco.jpg",
              link: "https://fit-calculations.thrivecart.com/personalized-nutrition-plan/"
            },
            {
              name: 'Fat Blasting Cardio Program',
              description: 'Burn more fat than you ever thought possible in only 30 days!',
              price: "$29.99",
              image: "cardio.jpg",
              link: "https://fit-calculations.thrivecart.com/30-day-fat-blasting-cardio/"
            }
          ]
        }
      }

  render(){
    return(
      <React.Fragment>
        <Header title={"All Programs"} background={"heart-rate.png"}/>
        <Programs programs={this.state.programs} scrollToTop={this.props.scrollToTop}/>
      </React.Fragment>
    )
  }
}

export default AllProgramsContainer
