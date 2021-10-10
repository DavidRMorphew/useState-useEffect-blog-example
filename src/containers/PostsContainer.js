import React, { Component } from 'react'
import postsData from '../data/posts'
import Post from '../components/Post'

class PostsContainer extends Component {
    
    state = {
        posts: postsData.posts
    }

    displayPosts = () => (
        this.state.posts.map(post => <Post key={post.id} postInfo={post}/>)
    )

    render(){
        {console.log(this.state.posts)}
        return(
            <div>
                <h1>Posts Logic for Display Will Be in This Container Component</h1>
                <ul>
                    {this.displayPosts()}
                </ul>
            </div>
        )
    }
}

export default PostsContainer