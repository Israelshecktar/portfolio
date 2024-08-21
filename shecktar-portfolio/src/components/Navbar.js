import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import styled from 'styled-components';
import { FaHome, FaUser, FaCode, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

const StyledNavbar = styled(Navbar)`
  background-color: #1b1a2e;
  .nav-link {
    color: #fff !important;
    margin: 0 10px;
    font-size: 1.2em;
    display: flex;
    align-items: center;
    transition: color 0.3s;

    &:hover {
      color: #0f0 !important; /* Green color */
    }

    svg {
      margin-right: 5px;
    }
  }

  @media (max-width: 768px) {
    .nav-link {
      font-size: 1em;
      margin: 0 5px;
    }
  }
`;

const Navigation = () => {
  return (
    <StyledNavbar expand="lg" variant="dark">
      <Navbar.Brand href="#home">Shecktar</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home"><FaHome /> Home</Nav.Link>
          <Nav.Link href="#about"><FaUser /> About</Nav.Link>
          <Nav.Link href="#skills"><FaCode /> Skills</Nav.Link>
          <Nav.Link href="#projects"><FaProjectDiagram /> Projects</Nav.Link>
          <Nav.Link href="#contact"><FaEnvelope /> Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </StyledNavbar>
  );
};

export default Navigation;
