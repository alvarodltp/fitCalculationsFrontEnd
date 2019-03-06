import React from 'react'
import {Image, Icon, Button, Card, Grid} from 'semantic-ui-react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ReactCompareImage from 'react-compare-image';

class LandingPage extends React.Component {

  render(){
    return(
      <React.Fragment>
      <div style={{width: "80%", margin: "0 auto", marginTop: "40px"}}>
        <h1 style={{fontSize:"40px"}}>You're one step from getting in the best shape of your life</h1>
        <h2 style={{color: "blue"}}>INTRODUCING THE STEP-BY-STEP FORMULA TO BUILD THE BODY OF YOUR DREAMS.</h2>
        <h2>Just a few questions for you:</h2>
      </div>
        <ul style={{width: "100%", fontSize: "20px", marginBottom: "10px"}}>
          <li style={{textAlign: "left", width:"70%", margin: "0 auto"}}>Are you ready to learn the secrets that fitness models use to keep a perfect physique year round?</li><br/>
          <li style={{textAlign: "left", width:"70%", margin: "0 auto"}}>Are you interested in a program that will teach you the tricks that let you eat the foods you love while still making progress towards your goal?</li><br/>
          <li style={{textAlign: "left", width:"70%", margin: "0 auto"}}>Are you ready to sidestep the internet's endless parade of hollow tactics and finally learn tested strategies to {this.props.goal.toLowerCase()} without having to deal with restricting diets?</li><br/>
        </ul>
        <p style={{fontSize: "20px", width: "80%", margin:"0 auto", marginBottom: "50px"}}>If you are, then I’m excited to announce A NEW PROGRAM THAT’S YEARS IN THE MAKING.</p>
        <Image style={{width: "250px", margin: "0 auto", marginBottom: "50px"}}src={'../ebook.png'} />
        <div id="landing-main-benefits">
        <h1 style={{fontSize:"40px"}}>A Few Of The Things You Get...</h1><br/>
          <Card>
            <Image id="img-motivation" src={'../vacation.png'} />
            <Card.Content>
              <Card.Header>PERSONALIZED DETAILED RESULTS</Card.Header>
                <Card.Description>Our coaches create your personal macro strategy and provide you with super simple, yet ridiculously comprehensive program to follow based on your fat loss or muscle building goals.</Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Image id="img-motivation" src={'../vacation.png'} />
            <Card.Content>
              <Card.Header>PERSONALIZED MACRO STRATEGY</Card.Header>
                <Card.Description>Our coaches create your personal macro strategy and provide you with super simple, yet ridiculously comprehensive program to follow based on your fat loss or muscle building goals.</Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Image id="img-motivation" src={'../vacation.png'} />
            <Card.Content>
              <Card.Header>PERSONALIZED REFEED STRATEGY</Card.Header>
                <Card.Description>Our coaches create your personal macro strategy and provide you with super simple, yet ridiculously comprehensive program to follow based on your fat loss or muscle building goals.</Card.Description>
            </Card.Content>
          </Card>
        </div>
        <div id="landing-main-benefits">
          <Card>
            <Image id="img-motivation" src={'../vacation.png'} />
            <Card.Content>
              <Card.Header>LIFESTYLE GUIDE</Card.Header>
                <Card.Description>Our coaches create your personal macro strategy and provide you with super simple, yet ridiculously comprehensive program to follow based on your fat loss or muscle building goals.</Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Image id="img-motivation" src={'../vacation.png'} />
            <Card.Content>
              <Card.Header>GROCERY SHOPPING LIST</Card.Header>
                <Card.Description>Our coaches create your personal macro strategy and provide you with super simple, yet ridiculously comprehensive program to follow based on your fat loss or muscle building goals.</Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Image id="img-motivation" src={'../vacation.png'} />
            <Card.Content>
              <Card.Header>MEAL PLAN EXAMPLES</Card.Header>
                <Card.Description>Our coaches create your personal macro strategy and provide you with super simple, yet ridiculously comprehensive program to follow based on your fat loss or muscle building goals.</Card.Description>
            </Card.Content>
          </Card>

          <div id="landing-main-benefits">
            <h1 style={{fontSize:"40px"}}>For A Limited Time Only!</h1><br/>
            <Image style={{width: "250px", margin: "0 auto", marginBottom: "40px"}} src={'../ebook.png'} />
            <Button style={{background: "red", color: "white", margin: "0 auto", marginBottom: "30px", marginTop: "10px"}} content='Get Your Personalized Plan For Just $49.00' size="huge" icon='angle double right' labelPosition='right' />
          </div>


          <div id="landing-main-benefits">
          <h1 style={{fontSize:"40px"}}>What Clients Say</h1><br/>
            <Card>
              <Image id="img-motivation" src={'../vacation.png'} />
              <Card.Content>
                <Card.Description>"Our coaches create your personal macro strategy and provide you with super simple." - Steve</Card.Description>
              </Card.Content>
            </Card>
            <Card>
              <Image id="img-motivation" src={'../vacation.png'} />
              <Card.Content>
                <Card.Description>"Our coaches create your personal macro strategy and provide you with super simple." - Steve</Card.Description>
              </Card.Content>
            </Card>
            <Card>
              <Image id="img-motivation" src={'../vacation.png'} />
              <Card.Content>
                <Card.Description>"Our coaches create your personal macro strategy and provide you with super simple." - Steve</Card.Description>
              </Card.Content>
            </Card>
            <Card>
              <Image id="img-motivation" src={'../vacation.png'} />
              <Card.Content>
                <Card.Description>"Our coaches create your personal macro strategy and provide you with super simple." - Steve</Card.Description>
              </Card.Content>
            </Card>
          </div>
          <h1 style={{fontSize:"40px"}}>How It Works</h1>
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: '#2761f1', color: '#fff' }}
                icon={null}
              >
                <Image style={{margin: "0 auto"}} src={null} />
                <h3 style={{fontSize: "18px"}}>Invest In Yourself</h3>
                <p style={{fontSize: "15px"}}>
                  Our coaches have your numbers ready to start working on a personalized strategy exclusively for you as soon as you make a purchase.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: '#2761f1', color: '#fff' }}
                icon={null}
              >
                <Image style={{margin: "0 auto"}} src={null} />
                <h3 style={{fontSize: "18px"}}>Numbers Check</h3>
                <p style={{fontSize: "15px"}}>
                  After we get your order, your information and numbers are reviewed to ensure everything looks perfect and your plan will set you up success.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: '#2761f1', color: '#fff' }}
                icon={null}
              >
                <Image style={{margin: "0 auto"}} src={null} />
                <h3 style={{fontSize: "18px"}}>Plan Strategy And Implementation</h3>
                <p style={{fontSize: "15px"}}>
                  Aside from the information you provided, your calories, and macronutrients, we have other valuable information such as BMR, BMI, macronutrient breakdown percetange, and other information we will use to make sure your plan is perfect.
                </p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                iconStyle={{ background: '#2761f1', color: '#fff' }}
                icon={null}
              >
                <Image style={{margin: "0 auto"}} src={null} />
                <h3 style={{fontSize: "18px"}}>Your Plan Is Ready</h3>
                <p style={{fontSize: "15px"}}>
                  We will send you the plan within 2 business days of purchase.
                </p>
              </VerticalTimelineElement>
            </VerticalTimeline>

            <div id="landing-main-benefits">
              <h1 style={{fontSize:"40px"}}>They Did It And So Can You</h1><br/>
              <Grid id="transformation-images" stackable columns={3}>
                <Grid.Row>
                  <Grid.Column>
                    <ReactCompareImage style={{height: "15%"}} leftImage={'../vacation.png'} rightImage={'../ebook.png'} hover={true} />
                  </Grid.Column>
                  <Grid.Column>
                    <ReactCompareImage style={{width: "15%"}} leftImage={'../vacation.png'} rightImage={'../ebook.png'} hover={true} />
                  </Grid.Column>
                  <Grid.Column>
                    <ReactCompareImage style={{width: "15%"}} leftImage={'../vacation.png'} rightImage={'../ebook.png'} hover={true} />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </div><br/>

            <div id="landing-main-benefits">
              <h1 style={{fontSize:"40px"}}>Get Unlimited Support</h1><br/>
              <Image style={{margin: "0 auto"}} circular size="small" src={'../Alvaro.png'}/>
              <Card style={{width: "100%"}}>
                <p style={{fontSize: "20px", textAlign: "left"}}>Hi there!</p>
                <p style={{fontSize: "20px", textAlign: "left"}}>I am Alvaro, the founder of Fit Calculations. I have been training busy professionals for over 8 years and I know first hand what it takes to lose weight, gain muscle and get fit.</p>
                <p style={{fontSize: "20px", textAlign: "left"}}>This program is like nothing you have ever seen. If you are ready to commit, you are about to get in the best shape of your life.</p>
              </Card>
              <Button style={{background: "red", color: "white", margin: "0 auto", marginBottom: "30px", marginTop: "30px"}} content='Get Your Personalized Plan For Just $49.00' size="huge" icon='angle double right' labelPosition='right' />
            </div>

            <div>
              <Card>
                <Image style={{background: "white"}} src={'../money-back.png'}/>
              </Card>
              <Card style={{background: "white", width: "65%"}}>
                <h1 style={{fontSize:"40px"}}>100% No-Risk Money Back Guarantee!</h1>
                <p style={{fontSize: "20px", textAlign: "left"}}>We are confident your personalized program will give you the results you want. However, if you haven't got closer to your goals, I will refund 100% of the cost. All you need to do is provide your 30 day log to verify the program was followed as it was designed and created specifically for you.</p><br/>
              </Card>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default LandingPage
