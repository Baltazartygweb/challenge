import react from 'react';
import { Form, FormControl, Navbar, Nav } from 'react-bootstrap';
import './Search.css';

const Search = () => {

return (
    <Navbar className='mt-3 navbar'>
        <Form className="d-flex">
        <FormControl type="search" className="me-2 search"
        />
        <i class="bi-search"></i> 
      </Form>
      
      <Nav.Link href="#" disabled>
          Search by #
        </Nav.Link>
        
      </Navbar>
    ) 
}

export default Search;