import React, { useState } from 'react'
import { CardGroup, Container } from 'react-bootstrap'
import postsData from '../data/posts'
import Post from './Post'

const PostsComponent = (props) => {

    const [posts, setPosts] = useState(postsData.posts)
    
    const displayPosts = () => (
        posts.map(post => <Post key={post.id} postInfo={post} updateLikes={updateLikes}/>)
    )

    const updateLikes = (id) => {

    }

    return(
        <div>
            <h1>Posts Using Hooks Will Go Here</h1>
            <Container>
            <CardGroup>
                {displayPosts()}
            </CardGroup>
            </Container>
        </div>
    )
}

export default PostsComponent