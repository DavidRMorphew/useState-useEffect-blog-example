import React from 'react'
import { Card } from 'react-bootstrap'

const Post = ({ postInfo: {id, title, body, likes}, updateLikes }) => {
    return(
        <Card>
            <Card.Header>
                <Card.Title>{title}</Card.Title>
            </Card.Header>
            <Card.Body>
                <Card.Text>{body}</Card.Text>
            </Card.Body>
            <Card.Footer>
                Likes: {likes}
                <br></br>
                <button onClick={() => updateLikes(id)}>Like!</button>
            </Card.Footer>
        </Card>
    )
}

export default Post