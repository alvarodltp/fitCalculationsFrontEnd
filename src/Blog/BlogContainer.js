import React from 'react'
import './Blog.css'
import AllBlogs from './AllBlogs'
import BlogSide from './BlogSide'

class BlogContainer extends React.Component {
  render(){
    return(
      <React.Fragment>
      <div id="blog-container">
        <div>
          <AllBlogs scrollToTop={this.props.scrollToTop} posts={this.props.posts} />
        </div>
        <div style={{margin: "20px"}}>
          <BlogSide scrollToTop={this.props.scrollToTop}/>
        </div>
      </div>
     </React.Fragment>
    )
  }
}

export default BlogContainer
