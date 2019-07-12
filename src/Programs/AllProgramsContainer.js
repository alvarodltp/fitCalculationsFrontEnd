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

        }
      }

  render(){
    return(
      <React.Fragment>
        <Header title={"All Programs"} background={"heart-rate.png"}/>
        <Programs programs={this.props.programs} scrollToTop={this.props.scrollToTop}/>
      </React.Fragment>
    )
  }
}

export default AllProgramsContainer
