import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar sticky="top" className="bg-warning Dark" >
      <Container className="d-flex justify-content-around">
        <div>
          <Navbar.Brand as={Link} to="/home">
            <img
              width={100}
              src={
                "https://owly.wpengine.com/wp-content/themes/owly/images/logo.png"
              }
              alt=""
            />
          </Navbar.Brand>
        </div>
        <div>
          <Nav className="Dark">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/services">Services</Nav.Link>
            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
            <Nav.Link as={Link} to="/login">Log in</Nav.Link>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
