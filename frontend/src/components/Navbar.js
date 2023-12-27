import React,{ Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css'
class BarraNav extends Component{
    render(){
    return(
    <Navbar collapseOnSelect expand='lg' className='bg-body-secondary' sticky='top'>
        <div className='container-fluid'>
            <Navbar.Brand href='/'>Tutorias</Navbar.Brand>
            <Navbar.Toggle  aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav className='ml-auto'>
                    <Nav.Link href='/'>Inicio</Nav.Link>
                    <NavDropdown title='Estudiantes' id='estudiantes-nav-dropdown'>
                    <Nav.Link href='/estudiantes'>Listado de estudiantes</Nav.Link>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </div>
    </Navbar>
    )
    }
}
export default BarraNav