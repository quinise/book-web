import React from 'react';
import { Button, Card, Container, Row } from 'react-bootstrap';

const FavoritesList = () => {
  return (
    <Container>
      <Row>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Book Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      </Row>
    </Container>  
  )
}

export default FavoritesList;