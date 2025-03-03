import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/logo.png"; // Update path as needed

const Header = () => {
    const location = useLocation(); // Get current route

    return (
        <Navbar expand="lg" className="px-3 py-2 sticky-top brand-bg-black">
            <Container fluid className="mx-0">
                {/* Logo Section */}
                <Navbar.Brand as={Link} to="/">
                    <img
                        src={logo}
                        alt="Logo"
                        width={50}
                        height={50}
                        className="rounded-circle border border-success"
                    />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />

                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="gap-3">
                        <Nav.Link
                            as={Link}
                            to="/"
                            className={`fw-bold ${location.pathname === "/" ? "brand-text-green" : "text-white"}`}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/courses"
                            className={`fw-bold ${location.pathname === "/courses" ? "brand-text-green" : "text-white"}`}
                        >
                            Courses
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/about-us"
                            className={`fw-bold ${location.pathname === "/about-us" ? "brand-text-green" : "text-white"}`}
                        >
                            About Us
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
