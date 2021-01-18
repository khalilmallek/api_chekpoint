import React from "react";
import { Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
         <h1>Constact List</h1>
        </Navbar.Brand>
      </Navbar>
    </div>
  );
};

export default NavBar;
