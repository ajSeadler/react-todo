import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Collin And Tony's House Of Sushi and Pizza</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/menu">Menu</Nav.Link>
            <Nav.Link href="/about">Our Story</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </>
  );
}