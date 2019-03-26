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
        <h1 style={{fontSize:"36px"}}>You're One Step From Getting In The Best Shape Of Your Life</h1>
        <h2 style={{color: "blue", fontStyle: "italic"}}>INTRODUCING THE STEP-BY-STEP GUIDE TO BUILD YOUR BEST BODY EVER.</h2>
        <h2>Just a few questions for you:</h2>
      </div>
        <ul style={{width: "100%", marginBottom: "10px"}}>
          <li style={{textAlign: "left", width:"70%", margin: "0 auto"}}>Are you ready to learn the fitness industry secrets that models use to keep a perfect physique year round?</li><br/>
          <li style={{textAlign: "left", width:"70%", margin: "0 auto"}}>Are you interested in a program that will teach you the tricks that let you eat the foods you love while still making progress towards your goal?</li><br/>
          <li style={{textAlign: "left", width:"70%", margin: "0 auto"}}>Are you ready to sidestep the internet's hollow tactics and finally learn tested strategies to accomplish your goal without having to deal with restricting diets?</li><br/>
        </ul>
        <p style={{width: "80%", margin:"0 auto", marginBottom: "0px"}}>If you are, then I’m excited to announce THE GUIDE THAT WILL CHANGE YOUR LIFE.</p>


        <div style={{width: "100%"}}>
          <div id="landing-main-benefits">
            <Grid stackable columns={2}>
              <Grid.Row>
                <Grid.Column style={{marginBottom: "40px"}} width={7}>
                  <Image style={{ height: "400px", margin: "0 auto", marginBottom: "10px"}} src={'../e-book-white-side.png'} />
                </Grid.Column>
                <Grid.Column width={9}>
                  <h4 style={{textAlign: "left", marginBottom: "25px", fontWeight: "bold"}}>This Is For You If...</h4>
                  <ul>
                    <li style={{fontSize: "18px", textAlign: "left", paddingLeft: "10px", paddingBottom: "10px"}}>
                      You are busy and don't have time for useless information
                    </li>
                    <li style={{fontSize: "18px", textAlign: "left", paddingLeft: "10px", paddingBottom: "10px"}}>
                      You want straight to the point instructions on how to get to your goal
                    </li>
                    <li style={{fontSize: "18px", textAlign: "left", paddingLeft: "10px", paddingBottom: "10px"}}>
                      You want results ASAP without compromising your health
                    </li>
                    <li style={{fontSize: "18px", textAlign: "left", paddingLeft: "10px", paddingBottom: "10px"}}>
                      You want to be part of a supportive community
                    </li>
                    <li style={{fontSize: "18px", textAlign: "left", paddingLeft: "10px", paddingBottom: "10px"}}>
                      You are commited to work hard so you can play hard
                    </li>
                  </ul>
              </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </div>

        <div style={{width: "100%"}}>
          <h1 style={{fontSize:"36px"}}>What's Included</h1><br/>
          <div id="landing-main-benefits">
            <Grid stackable columns={2}>
              <Grid.Row>
                <Grid.Column style={{marginBottom: "40px"}} width={7}>
                  <Image src={'../exclusive-recipes.jpg'} />
                </Grid.Column>
                <Grid.Column width={9}>
                  <h4 style={{textAlign: "left", marginBottom: "25px", fontWeight: "bold"}}>Detailed Results</h4>
                  <p style={{textAlign: "left", marginBottom: "25px"}}>Understand your results explained in an easy to digest way.</p>
                  <ul>
                    <li style={{paddingBottom: "5px"}}>Your calories and macronutrients needs</li>
                    <li style={{paddingBottom: "5px"}}>Your BMR and BMI analysis</li>
                    <li style={{paddingBottom: "5px"}}>Your body type and gender</li>
                    <li style={{paddingBottom: "5px"}}>Your THR(Target Heart Rate) Zones</li>
                  </ul>
              </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </div>

        <div style={{width: "100%"}}>
          <div id="landing-main-benefits">
            <Grid stackable columns={2}>
              <Grid.Row>
                <Grid.Column style={{marginBottom: "40px"}} width={7}>
                  <Image src={'../exclusive-recipes.jpg'} />
                </Grid.Column>
                <Grid.Column width={9}>
                  <h4 style={{textAlign: "left", marginBottom: "25px"}}>Easy To Follow Action Plan</h4>
                  <p style={{textAlign: "left", marginBottom: "25px"}}>Super simple, yet ridiculously comprehensive program to follow based on your fat loss or muscle building goals.</p>
                  <ul>
                    <li style={{paddingBottom: "5px"}}>A guide to prepare for your new lifestyle</li>
                    <li style={{paddingBottom: "5px"}}>Refeed and carb cycling strategies to make continuous progress</li>
                    <li style={{paddingBottom: "5px"}}>Meal plan examples with different calorie levels that have been proven to work</li>
                    <li style={{paddingBottom: "5px"}}>A grocery shopping list with macro friendly foods</li>
                  </ul>
              </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </div>

        <div style={{width: "100%"}}>
          <div id="landing-main-benefits">
            <Grid stackable columns={2}>
              <Grid.Row>
                <Grid.Column style={{marginBottom: "40px"}} width={7}>
                  <Image src={'../exclusive-recipes.jpg'} />
                </Grid.Column>
                <Grid.Column width={9}>
                  <h4 style={{textAlign: "left", marginBottom: "25px"}}>Incredible Recipes</h4>
                  <p style={{textAlign: "left", marginBottom: "25px"}}>This is not a low calorie, restrictive diet. You’ll be eating the foods you love without going hungry.</p>
                  <ul>
                    <li style={{paddingBottom: "5px"}}>50 quick and easy delicious recipes</li>
                    <li style={{paddingBottom: "5px"}}>Nutrition information listed for every single one of them</li>
                    <li style={{paddingBottom: "5px"}}>Includes burgers, pancakes, and other favorites</li>
                    <li style={{paddingBottom: "5px"}}>Included for free for a limited time!</li>
                  </ul>
              </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </div>

        <div style={{width: "100%"}}>
          <div id="landing-main-benefits">
            <Grid stackable columns={2}>
              <Grid.Row>
                <Grid.Column style={{marginBottom: "40px"}} width={7}>
                  <Image src={'../exclusive-recipes.jpg'} />
                </Grid.Column>
                <Grid.Column width={9}>
                  <h4 style={{textAlign: "left", marginBottom: "25px"}}>Online Support</h4>
                  <p style={{textAlign: "left", marginBottom: "25px"}}>Get unlimited access to our online coaches through access to our new official Facebook community group.</p>
                  <ul>
                    <li style={{paddingBottom: "5px"}}>Connect with others on the plan</li>
                    <li style={{paddingBottom: "5px"}}>Share tips and advice</li>
                    <li style={{paddingBottom: "5px"}}>Get Support and motivation</li>
                    <li style={{paddingBottom: "5px"}}>Clear up any questions</li>
                  </ul>
              </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </div>

        <Button style={{width: "60%", background: '#2761f1', color: "white", margin: "0 auto", marginBottom: "30px", marginTop: "30px"}} content='Start Your Transformation Today' size="huge" icon='angle double right' labelPosition='right' />

        <div id="how-it-works">
        <h1 style={{fontSize:"36px"}}>How It Works</h1><br/>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              iconStyle={{ background: '#2761f1', color: '#fff' }}
              icon={<FaCheck />}
            >
              <Image style={{margin: "0 auto"}} src={null} />
              <h4>You Invest In Yourself</h4>
              <p style={{fontSize: "16px", textAlign: "left"}}>
                Our coaches have your numbers ready to start working on a personalized strategy exclusively for you as soon as you make a purchase.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              iconStyle={{ background: '#2761f1', color: '#fff' }}
              icon={<FaCheck />}
            >
              <Image style={{margin: "0 auto"}} src={null} />
              <h4>We Check Your Numbers</h4>
              <p style={{fontSize: "16px", textAlign: "left"}}>
                After we get your order, your information and numbers are reviewed to ensure everything looks perfect and your plan will set you up for success.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              iconStyle={{ background: '#2761f1', color: '#fff' }}
              icon={<FaCheck />}
            >
              <Image style={{margin: "0 auto"}} src={null} />
              <h4>We Implement A Plan And Strategy</h4>
              <p style={{fontSize: "16px", textAlign: "left"}}>
                We include over 20 data points such as your BMR, BMI, macronutrient breakdown percetange, and other useful information we will use to make your plan perfect.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              iconStyle={{ background: '#2761f1', color: '#fff' }}
              icon={<FaCheck />}
            >
              <Image style={{margin: "0 auto"}} src={null} />
              <h4>We Send Your Plan</h4>
              <p style={{fontSize: "16px", textAlign: "left"}}>
                We will send you the plan within 2 business days of purchase.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div><br/><br/>


        <div style={{width: "100%", backgroundColor: "#F6F6F6"}}>
          <div style={{marginBottom: "50px"}} id="landing-main-benefits">
            <Grid stackable columns={2}>
              <Grid.Row style={{padding: "0"}}>
                <Grid.Column width={7}>
                  <Image style={{background: "white"}} src={'../joe.jpg'}/>
                </Grid.Column>
                <Grid.Column width={9}>
                <div id="text-next-image">
                  <p style={{textAlign: "center", fontSize: "18px", marginTop: "20px", marginBottom: "25px"}}>"This is not a traditional, low calorie, deprivation diet. It’s an education in fat loss, nutrition and macronutrients, where you eat more food than you ever thought possible and spend less time in the gym."</p>
                  <p style={{textAlign: "center", fontSize: "18px", marginBottom: "25px"}}>Alvaro, Fit Calculations</p>
                </div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </div><br/>


            <div>
              <h1 style={{fontSize:"36px"}}>For A Limited Time</h1><br/>
              <Image style={{width: "50%", margin: "0 auto", marginBottom: "20px"}} src={'../5book.png'} />
              <Icon name="check" />
            </div><br/>
            <Button style={{width: "60%", background: '#2761f1', color: "white", margin: "0 auto", marginBottom: "30px", marginTop: "30px"}} content='Start Your Transformation Today' size="huge" icon='angle double right' labelPosition='right' />



            <div style={{width: "100%", backgroundColor: "#F6F6F6"}}>
              <div style={{marginBottom: "50px"}} id="landing-main-benefits">
                <h1 style={{fontSize:"36px", paddingTop: "50px"}}>Get Unlimited Support</h1><br/>
                <Grid style={{paddingBottom: "50px"}} stackable columns={2}>
                  <Grid.Row>
                    <Grid.Column width={5}>
                      <Image style={{background: "white"}} src={'../Alvaro.png'} circular/>
                    </Grid.Column>
                    <Grid.Column width={11}>
                      <p style={{textAlign: "left"}}>Hi there!</p>
                      <p style={{textAlign: "left"}}>I am Alvaro, the founder of Fit Calculations. I have been training busy professionals for over 8 years and I know first hand what it takes to lose weight, gain muscle and get in top notch shape.</p>
                      <p style={{textAlign: "left"}}>This program is like nothing you have ever seen. If you are ready to commit, you are about to get in the best shape of your life.</p>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </div>
            </div>

          <div style={{width: "100%"}}>
            <h1 style={{fontSize:"36px", paddingTop: "50px"}}>100% No-Risk Money Back Guarantee</h1>
            <div id="landing-main-benefits">
              <Grid style={{paddingBottom: "50px"}} stackable columns={2}>
                <Grid.Row>
                  <Grid.Column style={{marginBottom: "40px"}} width={5}>
                    <Image src={'../moneyback.png'} circular/>
                  </Grid.Column>
                  <Grid.Column width={11}>
                    <p style={{textAlign: "left"}}>We are confident your personalized program will give you the results you want. However, if you haven't got closer to your goals, I will refund 100% of the cost.</p>
                    <p style={{textAlign: "left"}}>All you need to do is provide your 30 day food log to verify the program was followed as it was designed and created specifically for you.</p>
                    <Button style={{background: '#2761f1', color: "white", margin: "0 auto",  marginTop: "20px"}} content='BUY NOW' size="huge" icon='angle double right' labelPosition='right' />
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
//
// <div>
//   <div id="landing-main-benefits">
//     <h1 style={{fontSize:"36px"}}>What Clients Say</h1><br/>
//     <Grid id="transformation-images" stackable columns={3}>
//       <Grid.Row>
//         <Grid.Column>
//         <Card id="testimonial-card">
//           <Image id="img-diet-type" src={'../Brandt.png'} />
//           <Card.Content>
//             <Card.Description>"Our coaches create your personal macro strategy and provide you with super simple." - Steve</Card.Description>
//           </Card.Content>
//         </Card>
//         </Grid.Column>
//         <Grid.Column>
//         <Card id="testimonial-card">
//           <Image id="img-diet-type" src={'../Brandt.png'} />
//           <Card.Content>
//             <Card.Description>"Our coaches create your personal macro strategy and provide you with super simple." - Steve</Card.Description>
//           </Card.Content>
//         </Card>
//         </Grid.Column>
//         <Grid.Column>
//         <Card id="testimonial-card">
//           <Image id="img-diet-type" src={'../Brandt.png'} />
//           <Card.Content>
//             <Card.Description>"Our coaches create your personal macro strategy and provide you with super simple." - Steve</Card.Description>
//           </Card.Content>
//         </Card>
//         </Grid.Column>
//       </Grid.Row>
//     </Grid>
//   </div>
// </div><br/>

// <div id="landing-main-benefits">
//   <h1 style={{fontSize:"36px"}}>They Did It And So Can You</h1><br/>
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
