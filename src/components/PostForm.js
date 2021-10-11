import React, { useState } from 'react'
import { Container } from 'react-bootstrap'

const PostForm = ({postsCount}) => {

    const [formData, setFormData] = useState({
        id: postsCount + 1,
        title: '',
        body: '',
        likes: 0
    })

    const handleChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    return(
        <Container>
            <form>
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