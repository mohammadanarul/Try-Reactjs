import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Navbar,
  Container,
  Nav,
  Dropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
class Header extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>Learn with Anarul</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">
                <NavLink to="/">Home</NavLink>
              </Nav.Link>
              <Nav.Link href="#action2">
                <Link to="/about">About</Link>
              </Nav.Link>
              <Nav.Link href="#action2">
                <Link to="/contact">Contact</Link>
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Dropdown className="ms-2">
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Profile
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
