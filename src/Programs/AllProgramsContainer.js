import React from 'react'
import {Link} from 'react-router-dom';
import Header from '../components/Header';
import Programs from './Programs';
import { FaDumbbell } from 'react-icons/fa';

class AllProgramsContainer extends React.Component {
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
