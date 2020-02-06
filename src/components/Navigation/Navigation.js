import React from "react";

// Logo
import logo from "../../logo.png";

// Bootstrap
import { Navbar } from "react-bootstrap";

import "./Navigation.css";

function Navigation() {
  return (
    <Navbar bg="light">
      <Navbar.Brand href="/">
        <img
          src={logo}
          className="d-inline-block align-center mr-3"
          alt="logo"
          width="40"
          height="40"
        />{" "}
        Awesome Users React
      </Navbar.Brand>
    </Navbar>
  );
}

export default Navigation;
