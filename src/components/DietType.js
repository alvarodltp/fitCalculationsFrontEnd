import React from 'react'
import {Image, Icon, Card} from 'semantic-ui-react'
import ShareButtons from './ShareButtons'
import { Link } from "react-router-dom"

class DietType extends React.Component {

  render(){
    return(
      <div id="image-container-diet-type">
        <Card onClick={(e) => {this.props.getDietType(e); this.props.addOneToStep(); this.props.scrollToTop()}} id="image-card">
          <Image id="img-diet-type" src={'../standard_diet.png'} />
          <Card.Content>
            <Card.Header>Standard</Card.Header>
          </Card.Content>
        </Card>
        <Card onClick={(e) => {this.props.getDietType(e); this.props.addOneToStep(); this.props.scrollToTop()}} id="image-card">
          <Image id="img-diet-type" src={'../vegan_diet.png'} />
          <Card.Content>
            <Card.Header>Vegan</Card.Header>
          </Card.Content>
        </Card>
        <Card onClick={(e) => {this.props.getDietType(e); this.props.addOneToStep(); this.props.scrollToTop()}} id="image-card">
          <Image id="img-diet-type" src={'../vegetarian_diet.png'} />
          <Card.Content>
            <Card.Header>Vegetarian</Card.Header>
          </Card.Content>
        </Card>
      </div>
    )
  }
}

export default DietType
