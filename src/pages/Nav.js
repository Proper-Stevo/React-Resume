import React from "react";
import Nav from 'react-bootstrap/Nav'
import '../styling/Nav.css'

function Navbar() {
    return (
        <Nav defaultActiveKey="/home" className="flex-column side-nav"  id="navBar">
            <Nav.Link href="/home" id="navHome">Home <i class="fa-solid fa-house-chimney fa-xl"></i></Nav.Link>
            <Nav.Link href="/projects" id="navProjects">Projects <i class="fa-solid fa-code-branch fa-xl"></i></Nav.Link>
            <Nav.Link href="/Resume" id="navResume">Resume <i class="fa-regular fa-file-lines fa-xl"></i></Nav.Link>
            <Nav.Link href="/contact" id="navContact">Contact Me <i class="fa-solid fa-paper-plane fa-xl"></i></Nav.Link>
        </Nav>
    );
}

export default Navbar;