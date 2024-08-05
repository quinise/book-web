import React from 'react';
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import FavoritesList from './FavoritesList';
import SettingsComponent from './Settings';

const Profile = () => {
  return (
    <Container>
      <Row>
        <p className='display-1 my-5 text-center'>Profile</p>
      </Row>
      <Row>
        <Col>
          <Card className='my-5'>
            <Card.Body>
            <Card.Title className='my-3'>Search through genres</Card.Title>
              <Form.Select aria-label="Default select example">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            </Card.Body>
          </Card>
          <Card className='my-5'>
            <Card.Body>
              <Card.Title className='my-3'>Book Length Preference</Card.Title>
              <Form.Range />
            </Card.Body>
          </Card>
        </Col>
        <Col className='mx-5'>
          <Card>
            <Card.Body>
              <Card.Title className='m-4'>Favorites</Card.Title>
              <FavoritesList />
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <SettingsComponent />
        </Col>
      </Row>
    </Container>
  )
}

export default Profile;