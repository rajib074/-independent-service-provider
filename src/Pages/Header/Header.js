import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../firebase.init";
import './Header.css';

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };

  return (

    <header className='header-area'>
      <Navbar expand='lg' bg="warning" variant="dark">
        <Container fluid>
          <Link className='navbar-brand' to='/'>
            <img width={100} src="https://owly.wpengine.com/wp-content/themes/owly/images/logo.png" alt="" />
          </Link>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto me-auto'>
              <NavLink className='nav-link' to='/'>Home</NavLink>
              <NavLink className='nav-link' to='/about'>About Me</NavLink>
              <NavLink className='nav-link' to='/blog'>Blog</NavLink>
              {user && <NavLink className='nav-link' to='/checkout'>Checkout</NavLink>}
            </Nav>
          </Navbar.Collapse>          
          {
            user ?
            <button onClick={handleSignOut} className='btn btn-secondary d-none d-lg-block mt-0'>Sign Out</button>
            :
            <Link to='/login' className='btn btn-secondary d-none d-lg-block mt-0'>Sign In</Link>
          }
        </Container>
      </Navbar>
    </header>
    // <Navbar sticky="top" className="bg-warning Dark">
    //   <Container className="d-flex justify-content-around">
    //     <div>
    //       <Navbar.Brand as={Link} to="/home">
    //         <img
    //           width={100}
    //           src={
    //             "https://owly.wpengine.com/wp-content/themes/owly/images/logo.png"
    //           }
    //           alt=""
    //         />
    //       </Navbar.Brand>
    //     </div>
    //     <div>
    //       <Nav className="Dark">
    //         <Nav.Link as={Link} to="/">
    //           Home
    //         </Nav.Link>
    //         <Nav.Link as={Link} to="/about">
    //           About
    //         </Nav.Link>
    //         {user && <Nav.Link className='nav-link' as={Link} to='/checkout'>Checkout</Nav.Link>}
    //         <Nav.Link as={Link} to="/blog">
    //           Blog
    //         </Nav.Link>
    //         {user ? (
    //           <Nav.Link as={Link} to="login" onClick={handleSignOut}>
    //           LogOut
    //         </Nav.Link> 
    //         ) : (
    //           <Nav.Link as={Link} to="login">
    //             Login
    //           </Nav.Link>
    //         )}
    //       </Nav>
    //     </div>
    //   </Container>
    // </Navbar>
  );
};

export default Header;
