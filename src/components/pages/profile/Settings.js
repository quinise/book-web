import React from 'react';
import { Button, Card, Container, Row } from "react-bootstrap";

const SettingsComponent = () => {
  return (
    <Container>
      <Row>
        <Card border="danger" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title className='my-4 text-center'>Settings</Card.Title>
          <Card.Header className='mb-4 border border-danger text-danger text-center'>Delete Account</Card.Header>
          <Card.Text>
            Permanently delete your account by clicking the button below.
          </Card.Text>
          <Button variant="danger">Delete Account</Button>
        </Card.Body>
    </Card>
      </Row>
    </ Container>
  )
}

export default SettingsComponent;