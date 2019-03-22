import React from 'react'
import {Image, Icon, Button, Card, Grid} from 'semantic-ui-react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ReactCompareImage from 'react-compare-image';
import { FaCheck } from "react-icons/fa";
import WeightChart from './WeightChart'

class LandingPage extends React.Component {
  render(){
    return(
      <React.Fragment>
      <div style={{width: "80%", margin: "0 auto", marginTop: "40px"}}>
        <h1 style={{fontSize:"40px"}}>You're one step from getting in the best shape of your life</h1>
        <h2 style={{color: "blue", fontStyle: "italic"}}>INTRODUCING THE STEP-BY-STEP FORMULA TO BUILD THE BODY OF YOUR DREAMS.</h2>
        <h2>Just a few questions for you:</h2>
      </div>
        <ul style={{width: "100%", fontSize: "20px", marginBottom: "10px"}}>
          <li style={{textAlign: "left", width:"70%", margin: "0 auto"}}>Are you ready to learn the secrets that fitness models use to keep a perfect physique year round?</li><br/>
          <li style={{textAlign: "left", width:"70%", margin: "0 auto"}}>Are you interested in a program that will teach you the tricks that let you eat the foods you love while still making progress towards your goal?</li><br/>
          <li style={{textAlign: "left", width:"70%", margin: "0 auto"}}>Are you ready to sidestep the internet's endless parade of hollow tactics and finally learn tested strategies to {this.props.goal.toLowerCase()} without having to deal with restricting diets?</li><br/>
        </ul>
        <p style={{fontSize: "20px", width: "80%", margin:"0 auto", marginBottom: "0px"}}>If you are, then I’m excited to announce A NEW PROGRAM THAT’S YEARS IN THE MAKING.</p>
        <Image style={{width: "800px", margin: "0 auto", marginBottom: "10px"}}src={'../ebook-white.png'} />

        <h1 style={{margin: "0 auto", fontSize:"40px", width: "90%"}}>A Few Of The Things You Get...</h1><br/>
        <div id="what-you-get">
          <Card>
            <Image id="img-diet-type" src={'../vacation.png'} />
            <Card.Content>
              <Card.Header>DETAILED RESULTS</Card.Header>
                <Card.Description>Our coaches create your personal macro strategy and provide you with super simple, yet ridiculously comprehensive program to follow based on your fat loss or muscle building goals.</Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Image id="img-diet-type" src={'../vacation.png'} />
            <Card.Content>
              <Card.Header>DETAILED ACTION PLAN</Card.Header>
                <Card.Description>Our coaches create your personal macro strategy and provide you with super simple, yet ridiculously comprehensive program to follow based on your fat loss or muscle building goals.</Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Image id="img-diet-type" src={'../vacation.png'} />
            <Card.Content>
              <Card.Header>REFEED STRATEGY</Card.Header>
                <Card.Description>Our coaches create your personal macro strategy and provide you with super simple, yet ridiculously comprehensive program to follow based on your fat loss or muscle building goals.</Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Image id="img-diet-type" src={'../vacation.png'} />
            <Card.Content>
              <Card.Header>CARB CYCLING STRATEGY</Card.Header>
                <Card.Description>Our coaches create your personal macro strategy and provide you with super simple, yet ridiculously comprehensive program to follow based on your fat loss or muscle building goals.</Card.Description>
            </Card.Content>
          </Card>
        </div>

          <div id="landing-main-benefits">
            <h1 style={{fontSize:"40px"}}>This Program Is For You If:</h1><br/>
            <Grid id="transformation-images" stackable columns={2}>
              <Grid.Row>
                <Grid.Column width={7}>
                  <Image style={{margin: "0 auto", marginBottom: "20px"}} src={'../ebook-white.png'} />
                </Grid.Column>
                <Grid.Column width={9}>
                  <p style={{fontSize: "20px", textAlign: "left"}}>
                    <Icon name="check"/>You are busy and don't have time for useless information
                  </p>
                  <p style={{fontSize: "20px", textAlign: "left"}}>
                    <Icon name="check"/>You want straight to the point instructions on how to get to your goal
                  </p>
                  <p style={{fontSize: "20px", textAlign: "left"}}>
                    <Icon name="check"/>You want results ASAP without compromising your health
                  </p>
                  <p style={{fontSize: "20px", textAlign: "left"}}>
                    <Icon name="check"/>You want to be part of a supportive community
                  </p>
                  <p style={{fontSize: "20px", textAlign: "left"}}>
                    <Icon name="check"/>You are commited to work hard so you can play hard
                  </p>
                  <Button id="cta-btn" style={{background: '#2761f1', color: "white", margin: "0 auto", marginBottom: "30px", marginTop: "20px"}} content='YES! I WANT TO GET IN THE BEST SHAPE OF MY LIFE' size="huge" icon='angle double right' labelPosition='right' />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>

          <div>
            <div id="landing-main-benefits">
              <h1 style={{fontSize:"40px"}}>What Clients Say</h1><br/>
              <Grid id="transformation-images" stackable columns={3}>
                <Grid.Row>
                  <Grid.Column>
                  <Card id="testimonial-card">
                    <Image id="img-diet-type" src={'../Brandt.png'} />
                    <Card.Content>
                      <Card.Description>"Our coaches create your personal macro strategy and provide you with super simple." - Steve</Card.Description>
                    </Card.Content>
                  </Card>
                  </Grid.Column>
                  <Grid.Column>
                  <Card id="testimonial-card">
                    <Image id="img-diet-type" src={'../Brandt.png'} />
                    <Card.Content>
                      <Card.Description>"Our coaches create your personal macro strategy and provide you with super simple." - Steve</Card.Description>
                    </Card.Content>
                  </Card>
                  </Grid.Column>
                  <Grid.Column>
                  <Card id="testimonial-card">
                    <Image id="img-diet-type" src={'../Brandt.png'} />
                    <Card.Content>
                      <Card.Description>"Our coaches create your personal macro strategy and provide you with super simple." - Steve</Card.Description>
                    </Card.Content>
                  </Card>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </div>
          </div><br/>


            <div id="how-it-works">
            <h1 style={{fontSize:"40px"}}>How It Works</h1><br/>
              <VerticalTimeline>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  iconStyle={{ background: '#2761f1', color: '#fff' }}
                  icon={<FaCheck />}
                >
                  <Image style={{margin: "0 auto"}} src={null} />
                  <h3 style={{fontSize: "18px"}}>Invest In Yourself</h3>
                  <p style={{fontSize: "15px", textAlign: "left"}}>
                    Our coaches have your numbers ready to start working on a personalized strategy exclusively for you as soon as you make a purchase.
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  iconStyle={{ background: '#2761f1', color: '#fff' }}
                  icon={<FaCheck />}
                >
                  <Image style={{margin: "0 auto"}} src={null} />
                  <h3 style={{fontSize: "18px"}}>Numbers Check</h3>
                  <p style={{fontSize: "15px", textAlign: "left"}}>
                    After we get your order, your information and numbers are reviewed to ensure everything looks perfect and your plan will set you up success.
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  iconStyle={{ background: '#2761f1', color: '#fff' }}
                  icon={<FaCheck />}
                >
                  <Image style={{margin: "0 auto"}} src={null} />
                  <h3 style={{fontSize: "18px"}}>Plan Strategy And Implementation</h3>
                  <p style={{fontSize: "15px", textAlign: "left"}}>
                    We include over 20 data points such as your BMR, BMI, macronutrient breakdown percetange, and other useful information we will use to make your plan perfect.
                  </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                  iconStyle={{ background: '#2761f1', color: '#fff' }}
                  icon={<FaCheck />}
                >
                  <Image style={{margin: "0 auto"}} src={null} />
                  <h3 style={{fontSize: "18px"}}>Your Plan Is Ready</h3>
                  <p style={{fontSize: "15px", textAlign: "left"}}>
                    We will send you the plan within 2 business days of purchase.
                  </p>
                </VerticalTimelineElement>
              </VerticalTimeline>
            </div><br/>


            <div>
              <h1 style={{fontSize:"40px"}}>For A Limited Time</h1><br/>
              <Image style={{width: "50%", margin: "0 auto", marginBottom: "20px"}} src={'../5book.png'} />
              <Icon name="check" />
            </div><br/>
            <Button style={{width: "60%", background: '#2761f1', color: "white", margin: "0 auto", marginBottom: "30px", marginTop: "30px"}} content='Start Your Transformation Today' size="huge" icon='angle double right' labelPosition='right' />



            <div style={{width: "100%", backgroundColor: "#eaeaea"}}>
              <div style={{marginBottom: "50px"}} id="landing-main-benefits">
                <h1 style={{fontSize:"40px", paddingTop: "30px"}}>Get Unlimited Support</h1><br/>
                <Grid style={{paddingBottom: "30px"}} stackable columns={2}>
                  <Grid.Row>
                    <Grid.Column width={5}>
                      <Image style={{background: "white"}} src={'../Alvaro.png'} circular/>
                    </Grid.Column>
                    <Grid.Column width={11}>
                      <p style={{fontSize: "20px", textAlign: "left"}}>Hi there!</p>
                      <p style={{fontSize: "20px", textAlign: "left"}}>I am Alvaro, the founder of Fit Calculations. I have been training busy professionals for over 8 years and I know first hand what it takes to lose weight, gain muscle and get in top notch shape.</p>
                      <p style={{fontSize: "20px", textAlign: "left"}}>This program is like nothing you have ever seen. If you are ready to commit, you are about to get in the best shape of your life.</p>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </div>
            </div>

          <div style={{width: "100%"}}>
            <h1 style={{fontSize:"40px"}}>100% No-Risk Money Back Guarantee</h1>
            <div id="landing-main-benefits">
              <Grid stackable columns={2}>
                <Grid.Row>
                  <Grid.Column style={{marginBottom: "40px"}} width={5}>
                    <Image src={'../moneyback.png'} circular/>
                  </Grid.Column>
                  <Grid.Column width={11}>
                    <p style={{fontSize: "20px", textAlign: "left"}}>We are confident your personalized program will give you the results you want. However, if you haven't got closer to your goals, I will refund 100% of the cost.</p>
                    <p style={{fontSize: "20px", textAlign: "left"}}>All you need to do is provide your 30 day log to verify the program was followed as it was designed and created specifically for you.</p>
                    <Button style={{background: '#2761f1', color: "white", margin: "0 auto", marginBottom: "30px", marginTop: "20px"}} content='BUY NOW' size="huge" icon='angle double right' labelPosition='right' />
                </Grid.Column>
                </Grid.Row>
              </Grid>
            </div>
          </div>
      </React.Fragment>
    )
  }
}

export default LandingPage

// <div id="landing-main-benefits">
//   <h1 style={{fontSize:"40px"}}>They Did It And So Can You</h1><br/>
//   <Grid id="transformation-images" stackable columns={3}>
//     <Grid.Row>
//       <Grid.Column>
//         <ReactCompareImage leftImage={'../Al.jpg'} rightImage={'../ebook.png'} hover={true} />
//       </Grid.Column>
//       <Grid.Column>
//         <ReactCompareImage leftImage={'../vacation.png'} rightImage={'../ebook.png'} hover={true} />
//       </Grid.Column>
//       <Grid.Column>
//         <ReactCompareImage leftImage={'../vacation.png'} rightImage={'../ebook.png'} hover={true} />
//       </Grid.Column>
//     </Grid.Row>
//   </Grid>
// </div><br/>
// <Button style={{width: "60%", background: '#2761f1', color: "white", margin: "0 auto", marginBottom: "30px", marginTop: "30px"}} content='Start Your Transformation Today' size="huge" icon='angle double right' labelPosition='right' />
