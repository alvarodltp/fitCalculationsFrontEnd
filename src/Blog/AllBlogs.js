import React from 'react'
import BlogItem from './BlogItem'

class AllBlogs extends React.Component {
  render(){
    console.log()
    return(
      <React.Fragment>
        <BlogItem fields={this.props.fields}/>
      </React.Fragment>
    )
  }
}

export default AllBlogs
