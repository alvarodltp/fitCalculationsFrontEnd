import React from 'react'
import {Form, Button, Grid, Image, Statistic} from 'semantic-ui-react'
import AllTools from '../Tools/AllTools'
import Products from './Products'
import { BeatLoader } from 'react-spinners';
import {Link} from 'react-router-dom'
import MainHeaderHome from './MainHeaderHome';
import Flip from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import BlogItem from '../Blog/BlogItem';
import Programs from '../Programs/Programs';

class Homepage extends React.Component {

  render(){
    return(
      <React.Fragment>
        <MainHeaderHome />
        <div id="home-page">

          <div style={{height: "500px", backgroundImage: "url(/header-image.png)", backgroundSize: "cover"}}>
            <div className="home-header-title">
              <h1>YOUR TRANSFORMATION STARTS RIGHT HERE.</h1>
              <span>Everything you need to crush your health and fitness goals once and for all.</span>
              <Link to="/calories-and-macros">
                <Button onClick={this.props.scrollToTop} size="large" className="home-header-button" id="button-mobile" type="submit">
                   GET MY FREE REPORT
                </Button>
              </Link>
            </div>
          </div>

          <Slide left>
            <div style={{height: "5px", background: "linear-gradient(270deg, rgba(39,97,241,1) 0%, rgba(232,10,170,1) 80%)"}}>
            </div>
          </Slide>

          <div id="third-header-home">
            <Grid style={{width: "101%"}} stackable columns={2}>
              <Grid.Row style={{paddingTop: "0"}}>
                  <Grid.Column style={{backgroundColor: "#2761f1", height: "500px"}} width={8}>
                    <Image className="vertical-center" style={{margin: "0 auto", height: "400px"}} src="/iphone-front.png" />
                  </Grid.Column>
                <Grid.Column style={{margin: "0 auto", backgroundColor: "#f0f0f0", height: "500px", textAlign: "center"}} width={8}>
                  <div className="vertical-center" style={{width: "90%", textAlign: "left", paddingLeft: "30px"}}>
                    <h1 style={{ width: "90%", fontSize:"40px", fontStyle: "italic", marginBottom:"20px", textDecoration: "underline", textDecorationColor: "#e80aaa"}}>Start Here</h1>
                    <h1 style={{ width: "90%", fontSize:"30px", fontStyle: "italic", marginBottom:"20px"}}>Get a complete report and recommendations based on your results.</h1>
                    <p>It takes less than 60 seconds.</p><br/>
                    <Link to="/calories-and-macros">
                      <Button onClick={this.props.scrollToTop} size="large" id="button-mobile" type="submit">
                         GET MY FREE REPORT
                      </Button>
                    </Link>
                  </div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>

          <div id="second-header-home">
            <div>
              <h1 style={{margin: "0 auto", width: "90%", fontSize:"40px", paddingTop: "40px", fontStyle: "italic", textDecoration: "underline", textDecorationColor: "#e80aaa", marginBottom:"20px"}}>Training & Nutrition</h1>
              <Programs programs={this.props.programs} scrollToTop={this.props.scrollToTop} />
            </div>
          </div>

          <div id="second-header-home">
            <div>
              <h1 style={{margin: "0 auto", width: "90%", fontSize:"40px", paddingTop: "40px", fontStyle: "italic", textDecoration: "underline", textDecorationColor: "#e80aaa", marginBottom:"20px"}}>All Tools</h1>
              <p style={{margin: "0 auto", width: "80%", textAlign: "left", marginBottom: "40px"}}>I want to empower you to be your best self by providing the most useful, to the point, and up to date fitness and nutrition information out there. If you understand your body enough to make a few changes to your lifestyle, you will get amazing results in a matter of weeks, and I want to be part of your journey.</p>
              <AllTools scrollToTop={this.props.scrollToTop} allStats={this.props.allStats}/>
            </div>
          </div>

          <div className="blog-section-home">
            <h1 style={{margin: "0 auto", width: "90%", fontSize:"40px", paddingTop: "40px", fontStyle: "italic", textDecoration: "underline", textDecorationColor: "#e80aaa", marginBottom:"10px", color: "white"}}>Latest Posts</h1>
            { this.props.posts.slice(0, 2).map(({fields}, i) => <BlogItem key={i} {...fields}/> )}
            <div>
              <Link to="/blog">
                <Button onClick={this.props.scrollToTop} size="large" id="button-mobile" type="submit">
                  SEE MORE
                </Button>
              </Link>
            </div><br/>
          </div>

          <div id="free-guide-section">
            <h1 style={{margin: "0 auto", fontSize:"40px", marginBottom: "40px", width: "90%", fontStyle: "italic"}}>Get your portion control guide and a 100+ healthy food list...FOR FREE!</h1>
            <Grid stackable columns={2}>
              <Grid.Row >
                <Grid.Column width={7}>
                  <Image id="alvaro-home-image" style={{margin: "0 auto"}} src='/books-3.png' size='medium' />
                </Grid.Column>
                <Grid.Column width={9}><br/>
                  <p>Hi! My name is Alvaro and I have 10+ years of experience helping people like you reach your body's full potential. I've helped entrepreneurs and busy professionals get and stay in top notch shape and I can do the same for you. Enter your email below to get your FREE guide.</p>
                  <div style={{textAlign:"center"}}>
                    <Form>

                      { this.props.message !== "" ? <p style={{fontSize: "12px", color: "red"}}>{this.props.message}</p> : null }
                      <a target="_self" href="https://drive.google.com/file/d/1-lq43IW3cTCafFvhTm6RrutJvju0J4k6/view?usp=sharing">
                      <Button onClick={this.props.requiredEmailMessage} size="large" id="button-mobile" style={{width: "70%"}} type="submit">
                         GET YOUR FREE GUIDE
                      </Button>
                      </a>
                    </Form><br/><br/>
                  </div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>

          <div id="fourth-header-home">
          </div>

        </div>
      </React.Fragment>
    )
  }
}

export default Homepage

  // <Form.Input onChange={this.props.validateEmail} size="large" style={{width: "70%"}} name='email' label='' placeholder='Enter your email...' />
