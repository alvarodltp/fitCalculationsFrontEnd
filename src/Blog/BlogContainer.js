import React from 'react'
import BlogItem from './BlogItem'
import AllBlogs from './AllBlogs'
import BlogHeader from './BlogHeader'

class BlogContainer extends React.Component {
  render(){
    return(
      <React.Fragment>
        <BlogHeader />
        <AllBlogs posts={this.props.posts} />
     </React.Fragment>
    )
  }
}

export default BlogContainer
