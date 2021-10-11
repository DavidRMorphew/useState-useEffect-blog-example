import React, { useState } from 'react'
import { Container } from 'react-bootstrap'

const PostForm = (props) => {

    const [formData, setFormData] = useState({
        id: '',
        title: '',
        body: '',
        likes: 0
    })

    return(
        <Container>
            <form>
                Title:<input type="text" name="title" />
                <br></br>
                <input type="submit" value="Add Post"/>
            </form>
        </Container>
    )
}

export default PostForm