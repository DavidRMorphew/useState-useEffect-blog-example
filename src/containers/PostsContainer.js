import React, { Component } from 'react'
import { CardGroup, Container } from 'react-bootstrap'
import postsData from '../data/posts'
import Post from '../components/Post'

class PostsContainer extends Component {
    
    state = {
        posts: postsData.posts
    }

    displayPosts = () => (
        this.state.posts.map(post => <Post key={post.id} postInfo={post} updateLikes={this.updateLikes}/>)
    )

    updateLikes = (id) => {

    }

    render(){
        {console.log(this.state.posts)}
        return(
            <div>
                <h1>Posts Logic for Display Will Be in This Container Component</h1>
                <Container>
                <CardGroup>
                    {this.displayPosts()}
                </CardGroup>
                </Container>
            </div>
        )
    }
}

export default PostsContainer