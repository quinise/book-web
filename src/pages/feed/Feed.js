import React from "react";
import { Container, Row } from "react-bootstrap";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../../config/firebase";

const Feed = () => {
  const [user] = useAuthState(auth);

  return (
    <Container>
      <Row> 
        <h1>
          <strong>Hello</strong> { user.displayName ? user.displayName : user.email }
        </h1>
      </Row>
    </Container>
  )
}

export default Feed;