import React from 'react'
import {Image, Icon, Card} from 'semantic-ui-react'
import ShareButtons from './ShareButtons'
import { Link } from "react-router-dom"

class Motivation extends React.Component {

  render(){
    return(
      <div id="image-container">
        <Card onClick={(e) => {this.props.addDietTypeAndMotivationToUser(); this.props.getMotivationToGetFit(e); this.props.addOneToStep(); this.props.scrollToTop()}} id="image-card">
          <Image />
          <Card.Content>
            <Card.Header>Athletic or Sporting Event</Card.Header>
            <Card.Description>Naturally thin, with a fast metabolic rate.</Card.Description>
          </Card.Content>
        </Card>
        <Card onClick={(e) => {this.props.addDietTypeAndMotivationToUser(); this.props.getMotivationToGetFit(e); this.props.addOneToStep(); this.props.scrollToTop()}} id="image-card">
          <Image />
          <Card.Content>
            <Card.Header>Vacation or Wedding</Card.Header>
            <Card.Description>In between an Ectomorph and an Endomorph with a moderate metabolic rate. </Card.Description>
          </Card.Content>
        </Card>
        <Card onClick={(e) => {this.props.addDietTypeAndMotivationToUser(); this.props.getMotivationToGetFit(e); this.props.addOneToStep(); this.props.scrollToTop()}} id="image-card">
          <Image />
          <Card.Content>
            <Card.Header>Health Related Reasons</Card.Header>
            <Card.Description>Naturally broad and thick with a slow metabolic rate.</Card.Description>
          </Card.Content>
        </Card>
      </div>
    )
  }
}

export default Motivation
