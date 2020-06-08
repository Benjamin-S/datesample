import React, { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Routes from './Routes';
import { LinkContainer } from 'react-router-bootstrap';
import Footer from './containers/Footer';

function App() {
  return (
    <>
      <div className="App container">
        <Navbar expand="lg">
          <Navbar.Brand>
            Date Sample
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="mr-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/instructions">
                <Nav.Link>Instructions</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <Routes />
      <Footer />
    </>
  );
}

export default App;
