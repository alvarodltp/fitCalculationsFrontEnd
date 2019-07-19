import React from 'react'

const BlogHeader = (props) => {
  return(
    <React.Fragment>
      <div id="blog-header">
        <h1 style={{fontSize:"60px", width: "100%", fontStyle: "italic", color: "black", paddingTop: "130px"}}>Blog</h1>
      </div>
      <div style={{height: "5px", background: "linear-gradient(270deg, rgba(39,97,241,1) 0%, rgba(232,10,170,1) 80%)"}}>
      </div>
    </React.Fragment>
  )
}

export default BlogHeader
