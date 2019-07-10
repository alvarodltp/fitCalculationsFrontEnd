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
              name: '30 Days Core',
              description: 'Work your core and abs like never before.',
              price: "$29.99",
              image: "detailed-results",
              link: "30-days-core"
            },
            {
              name: 'F#ck Diets',
              description: 'Work your core and abs like never before.',
              price: "$29.99",
              image: "detailed-results",
              link: "no-diets"
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
