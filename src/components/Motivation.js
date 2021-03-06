import React from 'react'
import {Image, Card, Icon, Divider, Popup} from 'semantic-ui-react'
import Slide from 'react-reveal/Slide';

class Motivation extends React.Component {

  render(){
    return(
      <Slide left>
        <div id="img-container-motivation">
          <Divider id="title-body-type" horizontal>
            <Popup trigger={<Icon style={{margin: "0 auto"}} size="large" name="arrow left" onClick={this.props.substractOneFromStep} style={{textAlign: "left"}} />} content='Back' /> SELECT YOUR MOTIVATION
          </Divider>
          <Card onClick={(e) => {this.props.getMotivationToGetFit(e); this.props.addOneToStep(); this.props.scrollToTop()}} id="image-card-diettype">
            <Image id="img-diet-type" src={'../athletic_event.png'} />
            <Card.Content>
              <Card.Header>Athletic Event</Card.Header>
            </Card.Content>
          </Card>
          <Card onClick={(e) => {this.props.getMotivationToGetFit(e); this.props.addOneToStep(); this.props.scrollToTop()}} id="image-card-diettype">
            <Image id="img-diet-type" src={'../vacation.png'} />
            <Card.Content>
              <Card.Header>Vacation</Card.Header>
            </Card.Content>
          </Card>
          <Card onClick={(e) => {this.props.getMotivationToGetFit(e); this.props.addOneToStep(); this.props.scrollToTop()}} id="image-card-diettype">
            <Image id="img-diet-type" src={'../wedding_social.png'} />
            <Card.Content>
              <Card.Header>Social Event</Card.Header>
            </Card.Content>
          </Card>
          <Card onClick={(e) => {this.props.getMotivationToGetFit(e); this.props.addOneToStep(); this.props.scrollToTop()}} id="image-card-diettype">
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
