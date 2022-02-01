import react from 'react';
import { Table } from 'react-bootstrap';
import logo from '../logo.png';

import "./header.css";


const Header = () => {

return (

    <Table className='mt-3 tabla'>
    <tbody class="col-md-4">
        <tr>
            <td>
                <img className="float-start img-fluid mx-auto" src={logo} alt="alt"/>
            </td>
            <td className="col-sm-8">
                <button className=" float-end btn btn-primary" href="#" role="button" type="button" >LOGIN</button>
            </td>
        </tr>
    </tbody>    
</Table>

    ) 
}

export default Header;