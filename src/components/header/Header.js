import React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase";

const Header = () => {
  const navigate = useNavigate()
  const [user] = useAuthState(auth);
 
  const handleLogout = () => {
    auth.signOut();
  };
  
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand to="/">
            <strong>Text</strong>
          </Navbar.Brand>
          {
            user 
              ?
              <>
                <Nav className="ml-auto">
                  <Nav.Link as={Link} to="/profile" className="nav-link">User Profile</Nav.Link>
                </Nav>
                <Nav className="ml-auto">
                  <Nav.Link as={Link} to="/feed" className="nav-link">User Feed</Nav.Link>
                </Nav>
                <button onClick={() => { handleLogout().then(() => { navigate('/') }) }} className='text-sm text-blue-600 underline'>Logout</button>
              </>
              :
              <>
                <Link className='text-sm text-blue-600 underline' to={'/'}>Login</Link>
              </>
          }
        </Container>
      </Navbar>
    </>
  )
}

export default Header;