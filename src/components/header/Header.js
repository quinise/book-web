import React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Navigate } from "react-router-dom";
import { auth } from "../../config/firebase";

const Header = () => {
  const [user] = useAuthState(auth);
 
  const handleLogout = () => {
    auth.signOut();
    return <Navigate replace to='/' />;
  };
  
  return (
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
                <button onClick={() => { handleLogout() }} className='text-sm text-blue-600 underline'>Logout</button>
              </>
              :
              <>
                <Link className='text-sm text-blue-600 underline' to={'/login'}>Login</Link>
              </>
          }
        </Container>
      </Navbar>
  )
}

export default Header;