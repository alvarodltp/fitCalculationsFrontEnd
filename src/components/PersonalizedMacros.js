import React from 'react'
import { Icon, Card, Image, Button, Divider } from 'semantic-ui-react'
import { css } from '@emotion/core';
import { BeatLoader } from 'react-spinners';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

class PersonalizedMacros extends React.Component {

  render(){
    return(
      <React.Fragment>
      <div>
          <div style={{marginBottom: "40px"}}>
            <Divider id="title-body-type" horizontal>
                SELECT YOUR BODY TYPE
            </Divider>
          </div>
            <Card id="body-type-points-card">
                <h4 id="body-type-points"><Icon style={{color: "#2761f1"}} name='hand point right outline' size="medium" />Knowing your body type will add more accuracy to your macronutrient needs.</h4>
                <h4 id="body-type-points"><Icon style={{color: "#2761f1"}} name='hand point right outline' size="medium" />It will determine the type of exercise and nutrition you’ll need to get to your goal as fast and safe as possible.</h4>
                <h4 id="body-type-points"><Icon style={{color: "#2761f1"}} name='hand point right outline' size="medium" />If you think you are in between 2 body types, select the broader one.</h4>
            </Card>

          { this.props.user === null ?
            <div>
            <div style={{marginBottom: "40px"}} className='sweet-loading'>
              <BeatLoader
                css={override}
                sizeUnit={"px"}
                size={20}
                color={this.props.gender === "Female" ? '#e80aaa' : '#2761f1'}
                loading={this.props.loading}
              />
            </div>
            <p style={{fontStyle: "italic"}}>Calculating Calories/Loading Body Types</p>
          </div> :
          <div style={{marginBottom: "50px"}}>
            <Card onClick={(e) => {this.props.calculateMacros(e); this.props.addOneToStep(); this.props.scrollToTop()}} id="image-card">
              <Image src={'../Ectomorph.jpg'} />
              <Card.Content>
                <Card.Header>Ectomorph</Card.Header>
                <Card.Description>Naturally thin, with a fast metabolic rate.</Card.Description>
              </Card.Content>
            </Card>
            <Card onClick={(e) => {this.props.calculateMacros(e); this.props.addOneToStep(); this.props.scrollToTop()}} id="image-card">
              <Image src={'../Mesomorph.jpg'} />
              <Card.Content>
                <Card.Header>Mesomorph</Card.Header>
                <Card.Description>In between an Ectomorph and an Endomorph with a moderate metabolic rate. </Card.Description>
              </Card.Content>
            </Card>
            <Card onClick={(e) => {this.props.calculateMacros(e); this.props.addOneToStep(); this.props.scrollToTop()}} id="image-card">
              <Image src={'../Endomorph.jpg'} />
              <Card.Content>
                <Card.Header>Endomorph</Card.Header>
                <Card.Description>Naturally broad and thick with a slow metabolic rate.</Card.Description>
              </Card.Content>
            </Card>
          </div> }
        </div>
      </React.Fragment>
    )
  }
}

export default PersonalizedMacros

// 'https://www.dropbox.com/s/60htmbhkx75vzdu/Ectomorph.jpg?raw=1'
