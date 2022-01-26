import react from 'react';
import { Container, Navbar } from 'react-bootstrap';
//import './Nav.css';

const fondo = {backgroundColor: '#ED3484'};
const Nav = () => {

return (

  <Navbar className='mt-4' bg="light" expand="lg">
  <Container style={fondo}>
    <Navbar.Brand >Gallery</Navbar.Brand>
  </Container>
  </Navbar>
  ) 
}

export default Nav;