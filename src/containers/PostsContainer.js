import React, { Component } from 'react'

class PostsContainer extends Component {
    render(){
        const { posts } = this.props
        console.log(posts)
        return(
            <div>
                <h1>Posts Logic for Display Will Be in This Container Component</h1>
            </div>
        )
    }
}

export default PostsContainer