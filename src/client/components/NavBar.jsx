import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {
  return (
    <>
    {/* Chose basic dark tempelate.  Once we settle on a color scheme and all that jazz we can greatly modify the basic a$$ bootstrap stuff */}
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Collin And Tony's House Of Sushi and Pizza</Navbar.Brand>
          <Nav className="me-auto">
            {/* Starting with these three basic pages, we can add more.  Maybe like a page for private parties or something?  An events calendar we can try and import from google calendars or something?  I dunno, just ideas! */}
            <Nav.Link href="/menu">Menu</Nav.Link>
            <Nav.Link href="/about">Our Story</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </>
  );
}