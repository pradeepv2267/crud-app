import React from "react";
import './NavBar.css'

import {   Container, Navbar } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Nav } from "react-bootstrap/esm";

const NavBar = () => {
    const history = useHistory();
  return (
    <div>
      <Navbar expand="lg" className="NavBar">
        <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        <ul className="nav nav-items">
            <li className="nav nav-items">
            <button  onClick={()=>history.push("/AddDetails")} className="Button" >
            <span></span>
            <span>AddDetails</span>
        </button>
            </li>
            <li  className="nav nav-items">
            <button variant="outline-info" onClick={()=>history.push("/ViewDetails")}  className="Button">
            <span></span>
            <span>/ViewDetails</span>
        </button>
            </li>
            <li className="nav nav-items">
            <button variant="outline-info" className="Button">
            <span></span>
            <span>Add Student</span>
        </button>
            </li>
            <li className="nav nav-items">
            <button variant="outline-info" className="Button">
            <span></span>
            <span></span>
        </button>
            </li>
        </ul>
          </Nav>
        </Navbar.Collapse>
        
        
       
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
