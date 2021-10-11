import React, { Component } from 'react'
import { CardGroup, Container, Button } from 'react-bootstrap'
import postsData from '../data/posts'
import Post from '../components/Post'

class PostsContainer extends Component {
    
    state = {
        posts: postsData.posts,
        filterNum: 0
    }

    displayPosts = this.state.posts.map(post => <Post key={post.id} postInfo={post} updateLikes={this.updateLikes}/>)


    displayFilteredPosts = this.state.posts.filter(post => post.likes >= this.state.filterNum).map(post => <Post key={post.id} postInfo={post} updateLikes={this.updateLikes}/>)

    updateLikes = (id) => {
        const postToUpdate = this.state.posts.find(post => post.id === id)
        const updateIndex = this.state.posts.indexOf(postToUpdate)
        postToUpdate.likes += 1
        this.setState((prevState) => ({
                ...prevState,
                posts: [...prevState.posts.slice(0, updateIndex), postToUpdate, ...prevState.posts.slice(updateIndex + 1)]
        }))
    }

    handleFilterNum = (num) => {
        console.log(num)
        this.setState((prevState) => ({
            ...prevState,
            filterNum: num
        }), () => console.log(this.state.filterNum))
    }

    render(){
        return(
            <div>
                <h1>Posts Logic for Display Will Be in This Container Component</h1>
                <>      
                <Button onClick={() => this.handleFilterNum(0)}>All</Button>{' '}
                <Button onClick={() => this.handleFilterNum(5)}>5+ Likes</Button>{' '}
                <Button onClick={() => this.handleFilterNum(10)}>10+ Likes</Button>
                </>
                <Container>
                <CardGroup>
                    {this.state.filterNum !== 0 ? this.displayFilteredPosts : this.displayPosts}
                </CardGroup>
                </Container>
            </div>
        )
    }
}

export default PostsContainer