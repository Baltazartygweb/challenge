import react from 'react';
import { Form, FormControl, Navbar, Nav } from 'react-bootstrap';


const Search = () => {

return (
    <Navbar className='mt-3'>
        <Nav.Link href="#" disabled>
          Search by #
        </Nav.Link>
    <Form className="d-flex">
        <FormControl
          type="search"
          className="me-2"
          aria-label="Search"
          
        />
      </Form>
      </Navbar>
    ) 
}

export default Search;