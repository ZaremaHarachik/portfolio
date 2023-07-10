import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";


const navbarStyle = {
  background: "gray",
  
};

const Header = () => {
  return (
    <Navbar style={navbarStyle} variant="light">
      <Container>
        <Nav className="ml-auto">
          <Nav.Link
            href="https://www.linkedin.com/feed/?trk=homepage-basic_sign-in-submit/"
            target="_blank"
          >
            LinkIn
          </Nav.Link>

          <Nav.Link
            href="https://github.com/ZaremaHarachik/REACT-TASK-TRACKER/"
            target="_blank"
          >
            Project
          </Nav.Link>

          <Nav.Link
            href="https://docs.google.com/document/d/1fYIoqJIZwJ2_byOhFFmXAvLafxuQDWmOHGNqIH3mCpU/edit"
            target="_blank"
          >
            Resume
          </Nav.Link>
          
        </Nav>
      </Container>
    </Navbar>
  );
};
export default Header;