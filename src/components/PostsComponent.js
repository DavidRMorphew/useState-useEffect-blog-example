import React, { useState } from 'react'
import postsData from '../data/posts'
import Post from './Post'

const PostsComponent = (props) => {

    const [posts, setPosts] = useState(postsData.posts)
    
    const displayPosts = () => (
        posts.map(post => <Post key={post.id} postInfo={post}/>)
    )

    return(
        <div>
            <h1>Posts Using Hooks Will Go Here</h1>
            <ul>
                {displayPosts()}
            </ul>
        </div>
    )
}

export default PostsComponent