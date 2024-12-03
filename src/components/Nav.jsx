import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Nav.css';

const CustomNav = () => {
  const [scrolling, setScrolling] = useState(false);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      variant="light"
      className={`navbar-transparent ${scrolling ? 'navbar-scrolled' : ''}`}
    >
      <Navbar.Brand href="/" className="fs-1 fw-bold">Cole Kisielius</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNav" />
      <Navbar.Collapse id="navbarNav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Link className="nav-link" to="/portfolio">Portfolio</Link>
          </Nav.Item>
          <Nav.Item>
            <Link className="nav-link" to="/contactMe">Contact Me</Link>
          </Nav.Item>
          <Nav.Item>
            <Link className="nav-link" to="/resume">Resume</Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNav;
