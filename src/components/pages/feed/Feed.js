import axios from "axios";
import 'dotenv/config';
import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../../../config/firebase";
import BookSearchList from "../../BookSearchList";

const Feed = () => {
  const [user] = useAuthState(auth);
  const [search,  setSearch] = useState("");
  const [bookSearchData, setBookSearchData] = useState([]);
  const googleBooksApiKey = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY;
  const searchBook = (e) => {
    e.preventDefault();

    axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key='+googleBooksApiKey+'&maxResults=40')
    .then(response => 
      setBookSearchData(response.data.items)
      // TESTING:console.log(response.data.items) 
    )
    .catch(error => console.log(error));
  }

  return (
    <Container className='pb-5'>
      <Row> 
        <p className="display-1 my-5 text-center">
          <strong>Hello</strong>, { user.displayName ? user.displayName : user.email }
        </p>
      </Row>
      <Row className="sm-w-100">
        <Col></Col>
        <Col>
          <Form onSubmit={searchBook}> 
            <Row md={2}>
              <Col sm={3}>
                <Form.Control className="w-100 mr-1" id="bookSearch" type="text" placeholder="Search books" 
                onChange={e => setSearch(e.target.value)}
                />
              </Col>
              <Col sm={3}>
                <Button variant="primary" type='submit' value="Submit">Search</Button>
              </Col>
            </Row>
          </Form>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        {
          <BookSearchList book={bookSearchData} />
        }
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
      <Row className="mx-5">
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
      <Row className="my-5 mx-5">
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