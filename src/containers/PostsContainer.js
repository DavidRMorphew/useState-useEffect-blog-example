import React, { Component } from 'react'
import { CardGroup, Container, Button } from 'react-bootstrap'
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
        const postToUpdate = this.state.posts.find(post => post.id === id)
        const updateIndex = this.state.posts.indexOf(postToUpdate)
        postToUpdate.likes += 1
        this.setState((prevState) => ({
                ...prevState,
                posts: [...prevState.posts.slice(0, updateIndex), postToUpdate, ...prevState.posts.slice(updateIndex + 1)]
        }))
    }

    render(){
        {console.log(this.state.posts)}
        return(
            <div>
                <h1>Posts Logic for Display Will Be in This Container Component</h1>
                <>      
                <Button>0 Likes</Button>{' '}
                <Button>5+ Likes</Button>{' '}
                <Button>10+ Likes</Button>
                </>
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