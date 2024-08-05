import React from 'react';
import { Card, Col, Container, Form, Placeholder, Row } from "react-bootstrap";
import FavoritesList from './FavoritesList';
import SettingsComponent from './Settings';

const Profile = () => {
  return (
    <Container className='pb-5'>
      <Row>
        <p className='display-1 my-5 text-center'>Profile</p>
      </Row>
      <Row className='mx-2'>
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
          <Card className='my-5 mx-2'>
            <Card.Body>
              <Card.Title className='my-3'>Book Length Preference</Card.Title>
              <Form.Range />
            </Card.Body>
          </Card>
        </Col>
        <Col className='mx-auto mb-5'>
          <Card className='mx-2'>
            <Card.Body>
              <Card.Title className='m-4'>Favorites</Card.Title>
              <FavoritesList />
            </Card.Body>
          </Card>
        </Col>
        <Placeholder xs={12} className='my-3' bg="primary" />
        <Col className='m-4'>
          <SettingsComponent />
        </Col>
      </Row>
    </Container>
  )
}

export default Profile;