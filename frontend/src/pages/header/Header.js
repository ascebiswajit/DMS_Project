import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css"
const Header = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const handleLogout = ()=>{
    localStorage.removeItem("token");
    navigate("/login")
  }
  return (
    <>
      <Navbar bg={token?"primary":"dark"} data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="">{token?"Logged--In":"JWT - AUTH"}</Navbar.Brand>
          <Nav className="ml-auto">
            {token ?(<><Nav.Link as={Link} to="/dashboard" className='nav-link'>
              Dashboard
            </Nav.Link>
            <Nav.Link onClick={handleLogout} className="nav-link">
              Logout
            </Nav.Link></>):
           ( <>
            <Nav.Link as={Link} to="/login" className='nav-link'>
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/register" className="nav-link">
              SignUp
            </Nav.Link>
            </>
           )
            }
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
