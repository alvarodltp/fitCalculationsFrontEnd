import React from 'react'
import BlogItem from './BlogItem'
import AllBlogs from './AllBlogs'
import BlogHeader from './BlogHeader'
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
          <BlogSide />
        </div>
      </div>
     </React.Fragment>
    )
  }
}

export default BlogContainer
