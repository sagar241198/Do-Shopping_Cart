import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const NavbarHeader = () => {

    const CertItems = useSelector((state) => { return state.reducer })
    return (
        <div className="container-fluid bg-dark mb-5">
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand >Do-shopping</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <NavLink className="text-white navlink" to="/">Home</NavLink>
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <NavLink to="/AddToCart" className="">
                                <i className="fas fa-cart-plus text-warning "></i>
                                <b><span class="badge badge-light">{CertItems}</span></b>
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </div>
    )
}
export default NavbarHeader;