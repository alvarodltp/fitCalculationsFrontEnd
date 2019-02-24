import React from 'react'
import {Image, Icon, Card} from 'semantic-ui-react'
import ShareButtons from './ShareButtons'
import { Link } from "react-router-dom"

class DietType extends React.Component {

  render(){
    return(
      <div id="image-container">
        <Card onClick={(e) => {this.props.getDietType(e); this.props.addOneToStep(); this.props.scrollToTop()}} id="image-card">
          <Image />
          <Card.Content>
            <Card.Header>Standard</Card.Header>
          </Card.Content>
        </Card>
        <Card onClick={(e) => {this.props.getDietType(e); this.props.addOneToStep(); this.props.scrollToTop()}} id="image-card">
          <Image />
          <Card.Content>
            <Card.Header>Vegan or Vegetarian</Card.Header>
          </Card.Content>
        </Card>
      </div>
    )
  }
}

export default DietType
