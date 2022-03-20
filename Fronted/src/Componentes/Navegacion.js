import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function Navegacion() {
    return (

        <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
            <Navbar.Brand as={NavLink} to='/'>Hoteleria</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">

                <Nav className="me-auto" >
                    <Nav.Link as={NavLink} to="/Habitaciones-y-Suit"> Habitaciones y Suit</Nav.Link>
                    <Nav.Link as={NavLink} to='/Reuniones-y-Eventos' >Reuniones y Eventos </Nav.Link>
                    <Nav.Link as={NavLink} to='/Gastronomia'>Gastronomia</Nav.Link>
                    <Nav.Link as={NavLink} to='/Balneario-y-Spa'>
                        Balneario y Spa
                    </Nav.Link>
                    <Nav.Link as={NavLink} to='/Contacto'>
                        Contacto
                    </Nav.Link>
                    <NavDropdown title="Acerca de nosotros" >
                        <NavDropdown.Item as={NavLink} to='/Quienes-Somos' >Quienes Somos</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to='/Mision' >Mision</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to='/Vision' >Vision</NavDropdown.Item>
                    </NavDropdown>

                </Nav>
                <Nav>
                    <Button as={NavLink} to="/SigninPage" variant="outline-success" >Iniciar sesion</Button>
                    <Button variant="outline-success">Registrarse</Button>
                </Nav>




            </Navbar.Collapse>
        </Navbar>

    )
}