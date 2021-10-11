import React, { useState } from 'react'
import { Container } from 'react-bootstrap'

const PostForm = ({postsCount, handleSubmit}) => {

    const [formData, setFormData] = useState({
        id: postsCount + 1,
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
    }

    return(
        <Container>
            <form onSubmit={handlePostFormSubmit}>
                Title:<input type="text" name="title" onChange={handleChange} value={formData.title}/>
                <br></br>
                Body:<input type="textarea" name="body" onChange={handleChange} value={formData.body}/>
                <br></br>
                <input type="submit" value="Add Post"/>
            </form>
        </Container>
    )
}

export default PostForm