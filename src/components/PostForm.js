import React, { useState } from 'react'
import { Container, Card } from 'react-bootstrap'

const PostForm = ({postsCount, handleSubmit}) => {

    let newPostId = postsCount + 1

    const [formData, setFormData] = useState({
        id: newPostId,
        title: '',
        body: '',
        likes: 0
    })

    const handleChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handlePostFormSubmit = (e) => {
        e.preventDefault()
        handleSubmit(formData)
        setFormData({
            id: newPostId + 1,
            title: '',
            body: '',
            likes: 0
        })
    }

    return(
        <Container style={{ width: '30rem' }}>
            <Card >
            <h4>Add A New Post</h4>
            <form onSubmit={handlePostFormSubmit}>
                Title:<input type="text" name="title" onChange={handleChange} value={formData.title}/>
                <br></br>
                Body:<input type="textarea" name="body" onChange={handleChange} value={formData.body}/>
                <br></br>
                <input type="submit" value="Add Post"/>
            </form>
            </Card>
        </Container>
    )
}

export default PostForm