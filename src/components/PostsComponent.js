import React, { useState } from 'react'
import { CardGroup, Container, Button } from 'react-bootstrap'
import postsData from '../data/posts'
import Post from './Post'

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

    const displayFilteredPosts = () => {
        return posts.filter(post => post.likes >= filterNum)
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
                {displayPosts}
            </CardGroup>
            </Container>
        </div>
    )
}

export default PostsComponent