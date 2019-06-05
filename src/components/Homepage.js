import React from 'react'
import {Form, Button, Grid, Image} from 'semantic-ui-react'
import AllTools from './AllTools'
import Products from './Products'
import { BeatLoader } from 'react-spinners';
import {Link} from 'react-router-dom'

class Homepage extends React.Component {

  render(){
    return(
      <div id="home-page">
        <div id="first-header-home">
          <div id="content-home-header">
            <h1 style={{margin: "0 auto", fontSize:"40px", marginBottom: "40px", width: "90%", fontStyle: "italic"}}>Get your portion control guide and a 100+ healthy food list...FOR FREE!</h1>
            <Grid stackable columns={2}>
              <Grid.Row >
                <Grid.Column width={7}>
                  <Image id="alvaro-home-image" style={{margin: "0 auto"}} src='/Alvaro.png' size='medium' circular/>
                </Grid.Column>
                <Grid.Column width={9}><br/>
                  <p>Hi! My name is Alvaro and I have 10+ years of experience helping people like you reach your body's full potential. I've helped entrepreneurs and busy professionals get and stay in top notch shape and I can do the same for you. Enter your email below to get your FREE guide.</p>
                  <div style={{textAlign:"center"}}>
                    <Form>
                      <Form.Input onChange={this.props.validateEmail} size="large" style={{width: "70%"}} name='email' label='' placeholder='Enter your email...' />
                      { this.props.message !== "" ? <p style={{fontSize: "12px", color: "red"}}>{this.props.message}</p> : null }
                      <Button onClick={this.props.requiredEmailMessage} size="large" id="button-mobile" style={{width: "70%"}} type="submit">
                         GET YOUR FREE GUIDE
                      </Button>
                    </Form>
                  </div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </div>

          <div id="third-header-home">
            <Grid stackable columns={4}>
              <Grid.Row >
                <Grid.Column width={10}>
                  <h1 style={{textAlign:"center", margin: "0 auto", width: "80%", fontSize:"40px", paddingTop: "40px", fontStyle: "italic", textDecoration: "underline", textDecorationColor: "#e80aaa", marginBottom:"20px"}}>Top Rated Tool - Macros And Calories</h1>
                  <p style={{margin: "0 auto", width: "80%", textAlign: "left", marginBottom: "40px"}}>I want to empower you to be your best self by providing the most useful, to the point, and up to date fitness and nutrition information out there. If you understand your body enough to make a few changes to your lifestyle, you will get amazing results in a matter of weeks, and I want to be part of your journey.</p>
                  <Link to="/calories-and-macros">
                    <div style={{margin: "0 auto", width: "50%"}}>
                      <Button size="large" id="button-mobile" style={{width: "100%"}} type="submit">
                         GET MY MACROS NOW
                      </Button>
                    </div>
                  </Link>
                </Grid.Column>
                <Grid.Column width={6}><br/>
                  <Image style={{margin: "0 auto", height: "400px"}} src="/iphone-front.png" />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>


        <div id="second-header-home">
          <div>
            <h1 style={{margin: "0 auto", width: "90%", fontSize:"40px", paddingTop: "40px", fontStyle: "italic", textDecoration: "underline", textDecorationColor: "#e80aaa", marginBottom:"20px"}}>All Tools</h1>
            <p style={{margin: "0 auto", width: "80%", textAlign: "left", marginBottom:"40px"}}>I want to empower you to be your best self by providing the most useful, to the point, and up to date fitness and nutrition information out there. If you understand your body enough to make a few changes to your lifestyle, you will get amazing results in a matter of weeks, and I want to be part of your journey.</p>
            {this.props.allStats !== null ? <AllTools scrollToTop={this.props.scrollToTop} allStats={this.props.allStats}/> :
              <div style={{marginTop: "60px"}} className='sweet-loading'>
                <BeatLoader
                  sizeUnit={"px"}
                  size={13}
                  color={"#2761f1"}
                  loading={true}
                />
              </div> }
          </div>
        </div>

        <div id="fourth-header-home">
          <div>
            <h1 style={{margin: "0 auto", width: "90%", fontSize:"40px", paddingTop: "40px", fontStyle: "italic", textDecoration: "underline", textDecorationColor: "#e80aaa", marginBottom:"20px"}}>Unleash Your Fitness Potential</h1>
            <p style={{margin: "0 auto", width: "80%", textAlign: "left"}}>This guide has absolutely everything you need to start your journey towards getting in the best shape of your life. Follow my guide for 30 days and if you don't see results I will refund all your money back. That is how confident I am that this guide will be a game changer for you.</p>
            <Products allStats={this.props.allStats}/>
          </div>
        </div>

        <div style={{marginBottom: "0px", width: "100%", backgroundColor: "#e80aaa"}}>
          <div style={{paddingBottom: "30px"}}>
            <h1 style={{fontSize:"40px", paddingTop: "20px", color: "white", fontStyle: "italic"}}>Ready To Get Fit?</h1>
            <a target="_self" href="https://fit-calculations.thrivecart.com/fck-diets/">
              <Button onClick={this.getEvent3} id="cta-button" content='GET MY GUIDE NOW' size="large" icon='angle double right' labelPosition='right' />
            </a>
          </div>
        </div>

      </div>
    )
  }
}

export default Homepage
