import React from 'react'

const BlogHeader = (props) => {
  return(
    <React.Fragment>
      <div id="blog-header">
        <h1 style={{fontSize:"60px", width: "100%", color: "black", paddingTop: "130px"}}>Blog</h1>
      </div>
      <div style={{height: "5px", background: "#F1B727"}}>
      </div>
    </React.Fragment>
  )
}

export default BlogHeader
