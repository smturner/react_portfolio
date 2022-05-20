import React from 'react';
// Here we import the Navbar.css file to grant access to some additional classNames
import '../styles/Navbar.css';

const styles ={
  nav: {
    // backgroundColor: "green",
    justifyContent:'flex-end'
  }
}

function Navbar() {
  // TODO: Add a style attribute to `nav`
  return (
    // <Navbar>
    // <nav className="navbar" style={styles.nav}>
    //   <a href="#about-me">About Me</a>
    //   <a href="#portfolio">Portfolio</a>
    //   <a href="#contact">Contact</a>
    //   <a href="#contact-me">Resume</a>
    //   </nav>
    //   </Navbar> 
          <Navbar>
        // <Container>
        // <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        // <Nav className="me-auto">
        //   <Nav.Link href="#home">Home</Nav.Link>
        //   <Nav.Link href="#features">Features</Nav.Link>
        //   <Nav.Link href="#pricing">Pricing</Nav.Link>
        // </Nav>
        // </Container>
        </Navbar> 
    
  
  );
  }

export default Navbar;
