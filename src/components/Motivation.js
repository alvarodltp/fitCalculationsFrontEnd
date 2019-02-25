import React from 'react'
import {Image, Card} from 'semantic-ui-react'

class Motivation extends React.Component {

  render(){
    return(
      <div id="img-container-motivation">
        <Card onClick={(e) => {this.props.getMotivationToGetFit(e); this.props.addOneToStep(); this.props.scrollToTop()}} id="image-card">
          <Image id="img-motivation" src={'../athletic_event.png'} />
          <Card.Content>
            <Card.Header>Athletic Event</Card.Header>
          </Card.Content>
        </Card>
        <Card onClick={(e) => {this.props.getMotivationToGetFit(e); this.props.addOneToStep(); this.props.scrollToTop()}} id="image-card">
          <Image id="img-motivation" src={'../vacation.png'} />
          <Card.Content>
            <Card.Header>Vacation</Card.Header>
          </Card.Content>
        </Card>
        <Card onClick={(e) => {this.props.getMotivationToGetFit(e); this.props.addOneToStep(); this.props.scrollToTop()}} id="image-card">
          <Image id="img-motivation" src={'../wedding_social.png'} />
          <Card.Content>
            <Card.Header>Wedding/Social Event</Card.Header>
          </Card.Content>
        </Card>
        <Card onClick={(e) => {this.props.getMotivationToGetFit(e); this.props.addOneToStep(); this.props.scrollToTop()}} id="image-card">
          <Image id="img-motivation" src={'../health.png'} />
          <Card.Content>
            <Card.Header>Health Reasons</Card.Header>
          </Card.Content>
        </Card>
      </div>
    )
  }
}

export default Motivation
