import React from 'react'

class BlogItem extends React.Component {
  render(){
    debugger
    return(
      <div className="box content">
        <h1>{this.props.title}</h1>
        <p>{this.props["content"].content[0].content[0].value}</p>
      </div>
    )
  }
}

export default BlogItem
