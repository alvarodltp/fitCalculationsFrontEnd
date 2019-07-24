import React from 'react'
import {Image, Icon, Card, Divider, Popup} from 'semantic-ui-react'
import ShareButtons from './ShareButtons'
import { Link } from "react-router-dom"
import Slide from 'react-reveal/Slide';

class DietType extends React.Component {

  render(){
    return(
      <Slide left>
        <div id="image-container-diet-type">
        <Divider id="title-body-type" horizontal>
          <Popup trigger={<Icon style={{margin: "0 auto"}} size="large" name="arrow left" onClick={this.props.substractOneFromStep} style={{textAlign: "left"}} />} content='Back' /> SELECT YOUR CURRENT DIET
        </Divider>
          <Card onClick={(e) => {this.props.getDietType(e); this.props.addOneToStep(); this.props.scrollToTop()}} id="image-card-diettype">
            <Image id="img-diet-type" src={'../vegan_diet.png'} />
            <Card.Content>
              <Card.Header>Vegan</Card.Header>
            </Card.Content>
          </Card>
          <Card onClick={(e) => {this.props.getDietType(e); this.props.addOneToStep(); this.props.scrollToTop()}} id="image-card-diettype">
            <Image id="img-diet-type" src={'../standard_diet.png'} />
            <Card.Content>
              <Card.Header>Standard Western</Card.Header>
            </Card.Content>
          </Card>
          <Card onClick={(e) => {this.props.getDietType(e); this.props.addOneToStep(); this.props.scrollToTop()}} id="image-card-diettype">
            <Image id="img-diet-type" src={'../vegetarian_diet.png'} />
            <Card.Content>
              <Card.Header>Vegetarian</Card.Header>
            </Card.Content>
          </Card>
        </div>
      </Slide>
    )
  }
}

export default DietType
