import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import Button from  'react-bootstrap/Button'
import NavDropdown from 'react-bootstrap/NavDropdown'



export default function NavBar() {
  return(
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">GORESEARCH</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Pricing</Nav.Link>
      <NavDropdown title="Topics" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Computer Science</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Economics & Statistics</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Medicine</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">More...</NavDropdown.Item>
      </NavDropdown>
    </Nav>

  </Navbar.Collapse>
</Navbar>
  );

 
}
