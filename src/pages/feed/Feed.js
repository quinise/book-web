import React from "react";
import { Container, Row } from "react-bootstrap";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../../config/firebase";

const Feed = () => {
  const [user] = useAuthState(auth);

  return (
    <Container>
      <Row> 
        <p className="display-1 my-5 text-center">
          <strong>Hello</strong>, { user.displayName ? user.displayName : user.email }
        </p>
      </Row>
    </Container>
  )
}

export default Feed;