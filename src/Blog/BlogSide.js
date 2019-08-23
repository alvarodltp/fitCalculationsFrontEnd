import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Image, Input } from 'semantic-ui-react'

const BlogSide = (props) => {
  return(
    <div className="blog-about-container">
      <div className="post-quiz">
        <h1 style={{margin: "0 auto", width: "90%", marginBottom: "10px"}}>Take The Assesment</h1>
        <p style={{margin: "0 auto", width: "80%", marginBottom: "10px"}}>Get personalized recommendations based on your results.</p>
        <Link to='/calories-and-macros'>
          <Button id="button" onClick={props.scrollToTop}>START THE ASSESMENT</Button>
        </Link>
      </div>
    </div>
  )
}

export default BlogSide

{/* <div className="blog-about">
  <h1 style={{margin: "0 auto", width: "90%"}}>About</h1>
  <p style={{margin: "0 auto", width: "80%"}}>Fit Calculations was created by Alvaro De La Torre. Alvaro is passionate about helping others live a healthier life.</p><br/>
</div> */}

{/* <Image src="Alvaro-wall.png" style={{margin: "0 auto", height: "350px"}}/><br/> */}

// <div className="post-signup">
//   <h1>Don't miss a post!</h1>
//   <p>Get notified</p>
//   <Input style={{width: "80%"}} placeholder="Name"/><br/><br/>
//   <Input style={{width: "80%"}} placeholder="Email"/><br/><br/>
//   <Button style={{margin: "0 auto"}}>YES, SEND ME FREE ADVICE!</Button>
// </div>
