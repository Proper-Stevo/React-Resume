import React from "react";
import Nav from 'react-bootstrap/Nav'

function Navbar() {
  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="/home">Active</Nav.Link>
      <Nav.Link href="/home">Active</Nav.Link>
      <Nav.Link href="/home">Active</Nav.Link>
      <Nav.Link href="/home">Active</Nav.Link>
    </Nav>
  );
}

export default Navbar;