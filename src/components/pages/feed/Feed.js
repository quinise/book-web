import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../../../config/firebase";

const Feed = () => {
  const [user] = useAuthState(auth);

  return (
    <Container>
      <Row> 
        <p className="display-1 my-5 text-center">
          <strong>Hello</strong>, { user.displayName ? user.displayName : user.email }
        </p>
      </Row>
      <Row>
        <Col></Col>
        <Col>
          <Form>
            <Row md={2}>
              <Col sm={3}>
                <Form.Control className="w-100 mr-1" type="text" placeholder="Search books" />
              </Col>
              <Col sm={3}>
                <Button variant="primary" type="submit">Submit</Button>
              </Col>
            </Row>
          </Form>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col>
          <Card className="my-5" style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </Col>
      <Col></Col>
      </Row>
      <Row >
        <Card>
          <Card.Header as="h4">Recommended</Card.Header>
          <Card.Body>
            <Card.Title as='h6'>Check out these titles we think you'll like!</Card.Title>
            <Card.Text>
              You can edit your preferences in your profile.
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
      <Row  className="my-5">
        <Card>
          <Card.Header as="h4">History</Card.Header>
          <Card.Body>
            <Card.Title as='h6'>Titles you've previewed</Card.Title>
            <Card.Text>
              You can edit your preferences in your profile.
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}

export default Feed;