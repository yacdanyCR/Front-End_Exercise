import React from 'react'
import {Card,Button} from 'react-bootstrap'

export const CardComponent = ({pokemon}) => {
   

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={pokemon.avatar} />
            <Card.Body>
                <Card.Title>{pokemon.name}</Card.Title>
              {/*   <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text> */}
                <Button variant="primary">Show</Button>
            </Card.Body>
        </Card>
    )
}

export default CardComponent