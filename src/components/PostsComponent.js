import React, { useState } from 'react'
import { CardGroup, Container, Button } from 'react-bootstrap'
import postsData from '../data/posts'
import Post from './Post'

const PostsComponent = (props) => {

    const [posts, setPosts] = useState(postsData.posts)
    const [filterTerm, setFilterTerm] = useState("")
    
    const displayPosts = () => (
        posts.map(post => <Post key={post.id} postInfo={post} updateLikes={updateLikes}/>)
    )

    const updateLikes = (id) => {
        const postToUpdate = posts.find(post => post.id === id)
        const updateIndex = posts.indexOf(postToUpdate)
        postToUpdate.likes += 1
        setPosts(prevPosts => [...prevPosts.slice(0, updateIndex), postToUpdate, ...prevPosts.slice(updateIndex + 1)])
    }

    const displayFilteredPosts = () => {

    }

    return(
        <div>
            <h1>Posts Using Hooks Will Go Here</h1>
            <>      
            <Button>0 Likes</Button>{' '}
            <Button>5+ Likes</Button>{' '}
            <Button>10+ Likes</Button>
            </>
            <Container>
            <CardGroup>
                {displayPosts()}
            </CardGroup>
            </Container>
        </div>
    )
}

export default PostsComponent