import React, { useState, useRef, useEffect } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

function Header() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log(formData); // Example: Log form data
    handleClose(); // Close the modal after submission
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navRef = useRef(null);

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>

      <Navbar
        collapseOnSelect
        expand="lg"
        variant="white"
        sticky="top"
        className="ps-4 custom-dropdown bg-dark"
        ref={navRef}
      >
        <Container fluid>
          <Navbar.Brand href="#">
            {/* <img
              src={""}
              className="logo-img"
              alt="Chatbox"
              width="100%"
              height="60px"
            /> */}
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbarCollapse"
            className="text-end"
          />
          <Navbar.Collapse
            id="navbarCollapse"
            className="justify-content-center"
          >
            <Nav className="ms-auto mb-2 mb-md-0 text-start w-100">
              <Nav.Link href="/" className="ps-3 pe-3">
               Features
              </Nav.Link>
              {/* <Nav.Link href="./Aboutus" className="ps-3 pe-3">
                Warmup
              </Nav.Link> */}
              <Nav.Link href="/" className="ps-3 pe-3">
                Pricing
              </Nav.Link>
              <Nav.Link href="/" className="ps-3 pe-3">
                About
              </Nav.Link>
              <Nav.Link href="/" className="ps-3 pe-3">
                Reviews
              </Nav.Link>
              <Nav.Link href="/" className="ps-3 pe-3">
                Blog
              </Nav.Link>

            </Nav>
              <Nav.Link href="/" className="ps-3 pe-3">
                Login
              </Nav.Link>
            <Nav.Link href="" className="ps-4 pe-4 ">
              <button
                className="btn px-2 py-1 rounded-pill bg-secondary text-white"
                type="button"
                style={{ whiteSpace: "nowrap" }}
              >
                GET STARTED
              </button>
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  );
}

export default Header;
