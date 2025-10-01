import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css"
import { FaShoppingBag } from "react-icons/fa";
import { useSelector } from "react-redux";

function Header() {
  const {cartItems} = useSelector((state)=> state.cartItems)
  console.log(cartItems)

  return(
   <Navbar expand="lg" className="hdr">
      <Container>
        <Navbar.Brand as={Link} to="/">SHOPPING-CART</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link}  to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/Contacts">Contact</Nav.Link>
            <Nav.Link as={Link} to="/products">Product</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
{/*             
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav className="ms-auto   ">
            {/* <Nav.Link as={Link} to="/">Cart {cartitem}</Nav.Link> */}
             <Nav.Link as={Link} to="/cart" className=" position-relative"><FaShoppingBag size={20}/> 
             <span className="pos">
              {cartItems.length }
             </span>
             </Nav.Link>
            <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
            
            {/* <Button className="ms-5" variant="outline-danger">login</Button> */}
            <Nav.Link as={Link} to="/Login"> <Button className="ms-5" variant="outline-light">Login</Button></Nav.Link>

            </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default Header;