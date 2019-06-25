import React from 'react'

class BlogItem extends React.Component {
  render(){
    return(
      <div>
        <h1>{this.props.props.title}</h1>
        <p>{this.props.props["content"].content[0].content[0].value}</p>
      </div>
    )
  }
}

export default BlogItem
