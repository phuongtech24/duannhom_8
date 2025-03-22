import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        {/* Logo và tên rạp */}
        <Navbar.Brand as={Link} to="/">🎬 Hub Cinemas</Navbar.Brand>

        {/* Nút toggle khi thu nhỏ màn hình */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/movies">Phim</Nav.Link>
            <Nav.Link as={Link} to="/booking">Đặt Vé</Nav.Link>
            <Nav.Link as={Link} to="/login">Đăng Nhập</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
