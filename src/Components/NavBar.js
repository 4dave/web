import React from "react"
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"

const NavBar = () => {
  return (
    <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            style={{ marginRight: "10px" }}
          />{" "}
          Dave's Web
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/notes">
              <Nav.Link>Notes</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/long">
              <Nav.Link>Long</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/page2">
              <Nav.Link>Page2</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/secret">
              <Nav.Link>Secret</Nav.Link>
            </LinkContainer>

            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <LinkContainer to="/home">
                  <Nav.Link>Logout</Nav.Link>
                </LinkContainer>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
