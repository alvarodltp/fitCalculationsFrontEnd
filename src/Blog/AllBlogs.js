import React from 'react'
import BlogItem from './BlogItem'

class AllBlogs extends React.Component {
  render(){
    return(
      <React.Fragment>
        { this.props.posts.map(({fields}, i) =>
        <BlogItem key={i} {...fields}/> )}
      </React.Fragment>
    )
  }
}

export default AllBlogs
