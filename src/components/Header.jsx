import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { FaRegUserCircle, FaShoppingBag } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../redux/authSlice";
import { toast } from "react-toastify";

function Header() {
  const { cartItems } = useSelector((state) => state.cartItems);
  const { isAuthenticate } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogout() {
    dispatch(userLogout());
    navigate("/loginnew");
    toast.success("logged succesfully")
  }

  return (
    <Navbar expand="lg" className="hdr">
      <Container>
        <Navbar.Brand as={Link} to="/">SHOPPING-CART</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/Contacts">Contact</Nav.Link>
            <Nav.Link as={Link} to="/product">Product</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
          </Nav>

          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/cart" className="position-relative">
              <FaShoppingBag size={20} />
              <span className="pos">{cartItems?.length || 0}</span>
            </Nav.Link>

            {isAuthenticate ? (
              <NavDropdown title={<FaRegUserCircle size={22} />} id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/profile">Profile</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/admin/dashboard">Dashboard</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/orders">Orders</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/admin/add-product">Add Product</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/admin/list-product">List Product</NavDropdown.Item>
                 <NavDropdown.Item as={Link} to="/admin/list-users">List Users</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link as={Link} to="/loginnew">Login</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
