import React from 'react'
import BlogItem from './BlogItem'

class AllBlogs extends React.Component {
  render(){
    console.log(this.props)
    return(
      <div>
        <BlogItem props={this.props}/>
      </div>
    )
  }
}

export default AllBlogs
