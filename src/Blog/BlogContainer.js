import React from 'react'
import * as contentful from 'contentful'
import BlogItem from './BlogItem'
import PageHeader from './PageHeader'
import AllBlogs from './AllBlogs'

class Blog extends React.Component {
  constructor(){
    super()
    this.state={
      posts: []
    }
  }

  client = contentful.createClient({
    space: '3pn0fc4ta32y',
    accessToken: 'O7n9vC7nnluKegqPfYuD78Cbt3a0sEHXznkuK_HRdl8'
  })

  componentDidMount() {
    this.fetchPosts().then(this.setPosts);
  }

  fetchPosts = () => this.client.getEntries()

  setPosts = response => {
    let postsObj = response.items.map(blog => blog.fields).map(post => post.content).map(item => item.content)
    this.setState({
      posts: response.items
    })
  }

  render(){
    return(
      <React.Fragment>
      <div id="blog-header">
        <h1 style={{fontSize:"55px", width: "100%", fontStyle: "italic", color: "white", paddingTop: "130px"}}>Blog</h1>
      </div>
      <div>
        { this.state.posts.map(({fields}, i) =>
        <AllBlogs key={i} {...fields} />
        )}
       </div>
     </React.Fragment>
    )
  }
}

export default Blog
