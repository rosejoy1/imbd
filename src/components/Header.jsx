import React from 'react';
import { Navbar, Container, Form, NavDropdown, Button, Nav } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="https://logos-download.com/wp-content/uploads/2016/11/IMDb_logo_logotype.png"
            width="100"
            height="45"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Form className="d-flex flex-grow-1 mx-2">
            <NavDropdown
              title="All"
              id="nav-dropdown-dark-example"
              menuVariant="dark"
              className='rounded'
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>

            
            <Form.Control 
              type="search"
              placeholder="Search IMDb"
              style={{ flex: '1' }}
              aria-label="Search"
            />
            <Button style={{background:'white',color:'black'}} variant='light'>
              <i className="fa-solid fa-magnifying-glass"></i>
            </Button>
          </Form>

          <Nav className="ml-auto">
            <Nav.Link href="/list/watchlist?ref_=nv_usr_wl_all_0">Watchlist</Nav.Link>
            <Nav.Link href="#">SignIn</Nav.Link>
            <NavDropdown title="En" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
