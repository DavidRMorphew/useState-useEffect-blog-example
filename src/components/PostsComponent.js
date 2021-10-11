import React, { useEffect, useState } from 'react'
import { CardGroup, Container, Button } from 'react-bootstrap'
import postsData from '../data/posts'
import Post from './Post'
import PostForm from './PostForm'

const PostsComponent = () => {

    const [posts, setPosts] = useState(postsData.posts)
    const [filterNum, setFilterNum] = useState(null)
    // Parasitic State Option: COMMENT IN lines 12, 32–37, 56; COMMENT OUT lines 27, 29, 55
    const [postsToDisplay, setPostsToDisplay] = useState(posts)
    
    
    const updateLikes = (id) => {
        const postToUpdate = posts.find(post => post.id === id)
        const updateIndex = posts.indexOf(postToUpdate)
        postToUpdate.likes += 1
        setPosts(prevPosts => [...prevPosts.slice(0, updateIndex), postToUpdate, ...prevPosts.slice(updateIndex + 1)])
    }
        
    const handleFilterNum = (num) => {
        setFilterNum(num);       
    }
    
    // Better Option: COMMENT IN Lines 27, 29, 55; COMMENT OUT lines 12, 32–37, 56
    // const displayPosts = posts.map(post => <Post key={post.id} postInfo={post} updateLikes={updateLikes}/>)

    // const displayFilteredPosts = posts.filter(post => post.likes >= filterNum).map(post => <Post key={post.id} postInfo={post} updateLikes={updateLikes}/>)

    // Parasitic State Option --->
    const renderedPosts = postsToDisplay.map(post => <Post key={post.id} postInfo={post} updateLikes={updateLikes}/>)
    
    useEffect(() => {
        const displayablePosts = filterNum ? posts.filter(post => post.likes >= filterNum) : posts
        setPostsToDisplay(displayablePosts)
    }, [posts, filterNum])
    
    // Parasitic State Option <---

    const handleSubmit = (newPost) => {
        setPosts([...posts, newPost])
    }
    
    return(
        <div>
            <h1>Posts Using Hooks Will Go Here</h1>
            <>      
            <Button onClick={() => handleFilterNum(0)}>All</Button>{' '}
            <Button onClick={() => handleFilterNum(5)}>5+ Likes</Button>{' '}
            <Button onClick={() => handleFilterNum(10)}>10+ Likes</Button>
            </>
            <Container>
            <CardGroup>
                {/* {filterNum ? displayFilteredPosts : displayPosts} */}
                {renderedPosts}
            </CardGroup>
            </Container>
            <PostForm postsCount={posts.length} handleSubmit={handleSubmit}/>
        </div>
    )
}

export default PostsComponent