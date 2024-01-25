import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
    return (
        <>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home">Logo</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#Nosotros">Nosotros</Nav.Link>
                        <Nav.Link href="#Productos">Productos</Nav.Link>
                        <Nav.Link href="#Contactanos">Contactanos</Nav.Link>
                        <Nav.Link href="#Carrito"> <CartWidget/> </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;