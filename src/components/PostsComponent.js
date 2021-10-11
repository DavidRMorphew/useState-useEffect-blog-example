import React, { useState } from 'react'
import { CardGroup, Container, Button } from 'react-bootstrap'
import postsData from '../data/posts'
import Post from './Post'
import PostForm from './PostForm'

const PostsComponent = (props) => {

    const [posts, setPosts] = useState(postsData.posts)
    const [filterNum, setFilterNum] = useState(null)
    
    
    const updateLikes = (id) => {
        const postToUpdate = posts.find(post => post.id === id)
        const updateIndex = posts.indexOf(postToUpdate)
        postToUpdate.likes += 1
        setPosts(prevPosts => [...prevPosts.slice(0, updateIndex), postToUpdate, ...prevPosts.slice(updateIndex + 1)])
    }
    
    const displayPosts = posts.map(post => <Post key={post.id} postInfo={post} updateLikes={updateLikes}/>)

    const handleFilterNum = (num) => {
        setFilterNum(num);
    }

    const displayFilteredPosts = posts.filter(post => post.likes >= filterNum).map(post => <Post key={post.id} postInfo={post} updateLikes={updateLikes}/>)

    const handleSubmit = (postData) => {
        console.log(postData)
    }
    
    return(
        <div>
            <h1>Posts Using Hooks Will Go Here</h1>
            <>      
            <Button onClick={() => handleFilterNum(0)}>0 Likes</Button>{' '}
            <Button onClick={() => handleFilterNum(5)}>5+ Likes</Button>{' '}
            <Button onClick={() => handleFilterNum(10)}>10+ Likes</Button>
            </>
            <Container>
            <CardGroup>
                {filterNum ? displayFilteredPosts : displayPosts}
            </CardGroup>
            </Container>
            <PostForm postsCount={posts.length} handleSubmit={handleSubmit}/>
        </div>
    )
}

export default PostsComponent