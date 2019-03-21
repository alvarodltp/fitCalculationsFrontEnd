import React from 'react'
import {Image, Card, Icon, Divider} from 'semantic-ui-react'
import Slide from 'react-reveal/Slide';

class Motivation extends React.Component {

  render(){
    return(
      <Slide left>
        <div id="img-container-motivation">
          <Divider id="title-body-type" horizontal>
              SELECT YOUR MOTIVATION
          </Divider>
          <Card onClick={(e) => {this.props.getMotivationToGetFit(e); this.props.addOneToStep(); this.props.scrollToTop()}} id="image-card">
            <Image id="img-diet-type" src={'../athletic_event.png'} />
            <Card.Content>
              <Card.Header>Athletic Event</Card.Header>
            </Card.Content>
          </Card>
          <Card onClick={(e) => {this.props.getMotivationToGetFit(e); this.props.addOneToStep(); this.props.scrollToTop()}} id="image-card">
            <Image id="img-diet-type" src={'../vacation.png'} />
            <Card.Content>
              <Card.Header>Vacation</Card.Header>
            </Card.Content>
          </Card>
          <Card onClick={(e) => {this.props.getMotivationToGetFit(e); this.props.addOneToStep(); this.props.scrollToTop()}} id="image-card">
            <Image id="img-diet-type" src={'../wedding_social.png'} />
            <Card.Content>
              <Card.Header>Social Event</Card.Header>
            </Card.Content>
          </Card>
          <Card onClick={(e) => {this.props.getMotivationToGetFit(e); this.props.addOneToStep(); this.props.scrollToTop()}} id="image-card">
            <Image id="img-diet-type" src={'../health.png'} />
            <Card.Content>
              <Card.Header>Health Reasons</Card.Header>
            </Card.Content>
          </Card>
        </div>
      </Slide>
    )
  }
}

export default Motivation
