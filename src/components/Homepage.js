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
        <div>
          <MainHeaderHome scrollToTop={this.props.scrollToTop}/>

          <div id="start-here">
            <div>
              <Image className="startimage" style={{margin: "0 auto", height: "auto"}} src="/iphone-front.png" />
            </div>
            <div className="starttext" style={{textAlign: "left", paddingLeft: "30px"}}>
              <h1 style={{ width: "90%", fontSize:"30px", marginBottom:"20px", textDecoration: "underline", textDecorationColor: "#e80aaa", paddingTop: "10px"}}>Take  The 60 Second Assesment</h1>
              <p style={{ width: "90%", marginBottom:"20px"}}>This FREE assesment will get you a complete fitness report and recommendations based on your results.</p><br/>
              <Link to="/calories-and-macros">
                <Button onClick={this.props.scrollToTop} size="large" id="button-mobile" type="submit">
                   TAKE THE FREE ASSESMENT
                </Button>
              </Link>
            </div>
          </div>

          <div className="blog-section-home">
            <h1 style={{margin: "0 auto", width: "90%", fontSize:"40px", paddingTop: "40px", textDecoration: "underline", textDecorationColor: "#e80aaa"}}>Latest Posts</h1>
            { this.props.posts.slice(0, 3).map(({fields}, i) => <BlogItem key={i} {...fields}/> )}
            <div>
              <Link to="/blog">
                <Button onClick={this.props.scrollToTop} size="large" id="button-mobile" type="submit">
                  SEE MORE
                </Button>
              </Link>
            </div><br/>
          </div>

          <div id="free-guide-section">
            <h1 style={{margin: "0 auto", fontSize:"40px", marginBottom: "40px", width: "90%"}}>Get your portion control guide and a 100+ healthy food list...FOR FREE!</h1>
            <Grid stackable columns={2}>
              <Grid.Row >
                <Grid.Column width={7}>
                  <Image id="alvaro-home-image" style={{margin: "0 auto"}} src='/books-3.png' size='medium' />
                </Grid.Column>
                <Grid.Column width={9}><br/>
                  <p>You can't get results and make progress if you are not eating the right foods. Eat anything in this list and apply the portion control method so you can start seeing results in no time!</p>
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

// <div id="second-header-home">
//   <div>
//     <h1 style={{margin: "0 auto", width: "90%", fontSize:"40px", paddingTop: "40px", fontStyle: "italic", textDecoration: "underline", textDecorationColor: "#e80aaa", marginBottom:"20px"}}>Training & Nutrition</h1>
//     <Programs programs={this.props.programs} scrollToTop={this.props.scrollToTop} />
//   </div>
// </div>


// <div id="home-page">
  // <div style={{height: "500px", backgroundImage: "url(/header-image.png)", backgroundSize: "cover"}}>
  //   <div className="home-header-title">
  //     <h1>YOUR TRANSFORMATION STARTS RIGHT HERE.</h1>
  //     <span>Everything you need to crush your health and fitness goals once and for all.</span>
  //     <Link to="/calories-and-macros">
  //       <Button onClick={this.props.scrollToTop} size="large" className="home-header-button" id="button-mobile" type="submit">
  //          GET MY FREE REPORT
  //       </Button>
  //     </Link>
  //   </div>
  // </div>

  // <Form.Input onChange={this.props.validateEmail} size="large" style={{width: "70%"}} name='email' label='' placeholder='Enter your email...' />

  // <div id="second-header-home">
  //   <div>
  //     <h1 style={{margin: "0 auto", width: "90%", fontSize:"40px", paddingTop: "40px", fontStyle: "italic", textDecoration: "underline", textDecorationColor: "#e80aaa", marginBottom:"20px"}}>Tools</h1>
  //     <p style={{margin: "0 auto", width: "80%", textAlign: "left", marginBottom: "40px"}}>We empower you to be your best self by providing the most useful, to the point, and up to date fitness and nutrition information out there. If you understand your body enough to make a few changes to your lifestyle, you will get amazing results in a matter of weeks, and we want to be part of your journey.</p>
  //     <AllTools scrollToTop={this.props.scrollToTop} allStats={this.props.allStats}/>
  //   </div>
  // </div>
