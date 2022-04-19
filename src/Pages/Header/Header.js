import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <Navbar sticky="top" className="bg-warning Dark">
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
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            {user && <Nav.Link className='nav-link' as={Link} to='/checkout'>Checkout</Nav.Link>}
            <Nav.Link as={Link} to="/blog">
              Blog
            </Nav.Link>
            {user ? (
              <Nav.Link as={Link} to="login" onClick={handleSignOut}>
              LogOut
            </Nav.Link> 
            ) : (
              <Nav.Link as={Link} to="login">
                Login
              </Nav.Link>
            )}
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
