import React from 'react'
import BlogItem from './BlogItem'
import AllBlogs from './AllBlogs'

class Blog extends React.Component {
  render(){
    return(
      <React.Fragment>
      <div id="blog-header">
        <h1 style={{fontSize:"55px", width: "100%", fontStyle: "italic", color: "white", paddingTop: "130px"}}>Blog</h1>
      </div>
      <div>
        <AllBlogs fields={this.props} />
       </div>
     </React.Fragment>
    )
  }
}

export default Blog
