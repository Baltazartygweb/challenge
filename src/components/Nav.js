import react from 'react';
import { Container, Navbar } from 'react-bootstrap';
import './Nav.css';


const Nav = () => {

return (

  <Navbar className='mt-4 nav' bg="light" expand="lg">
  <Container >
    <Navbar.Brand >Gallery</Navbar.Brand>
  </Container>
  </Navbar>
  ) 
}

export default Nav;