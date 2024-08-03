import React from 'react';
import { Container, Navbar } from "react-bootstrap";

const Footer = () => {
  return (
    <Navbar bg='primary' fixed="bottom">
      <Container>
        <Navbar.Text className='h6  mx-auto text-white-50'>Created by <a className='h6 text-white-50 text-decoration-none' href="https://quinise.ercolano.com" target="_blank" rel="noopener noreferrer">Quinise</a></Navbar.Text>
      </ Container>
    </Navbar>
  )
}

export default Footer;