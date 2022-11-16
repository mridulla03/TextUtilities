import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import PropTypes from 'prop-types'
import React from 'react'
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';




function Navibar(props) {
  return (
    <Navbar className= {`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <Container fluid>
        <Navbar.Brand href="Textutilities">{props.title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form>
      <Form.Check className= {`text-${props.mode==='light'?'dark':'light'}`}
        type="switch"
        id="custom-switch"
        onClick={props.togglemode}
        label="Enable Dark Mode"
        
      />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navibar;
Navibar.propTypes = {
  title:PropTypes.string.isRequired,
  about:PropTypes.string
}

Navibar.defaultProps = {
  title:"Set title here",
  about:"About Us"
}