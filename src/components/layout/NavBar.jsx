import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="#home">
          Personal Project Management Tool
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Dashboard</Nav.Link>
        </Nav>
        <Nav className="justify-content-end">
          <Nav.Link href="#features">Sign Up</Nav.Link>
          <Nav.Link href="#pricing">Login</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
