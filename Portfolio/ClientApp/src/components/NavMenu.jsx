import React, { Component, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Container
} from 'reactstrap';

const NavMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const duration = 1500;
  const offset = -275;
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md" fixed="top">
        <Container>
          <div className="navbar-brand">
            <Link
              activeClass="active"
              to="home_section"
              spy={true}
              smooth={true}
              offset={offset}
              duration={duration}
            >
              Stefan Virna
              </Link>
          </div>
          <NavbarToggler onClick={toggle} className="no-outline" />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar></Nav>
            <Nav navbar>
              <NavItem>
                <Link
                  className="nav-link"
                  activeClass="active"
                  to="home_section"
                  spy={true}
                  smooth={true}
                  offset={offset}
                  duration={duration}
                >
                  Home
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  className="nav-link"
                  activeClass="active"
                  to="about_section"
                  spy={true}
                  smooth={true}
                  offset={offset}
                  duration={duration}
                >
                  About
              </Link>
              </NavItem>
              <NavItem>
                <Link
                  className="nav-link"
                  activeClass="active"
                  to="portfolio_section"
                  spy={true}
                  smooth={true}
                  offset={offset}
                  duration={duration}
                >
                  Portfolio
              </Link>
              </NavItem>
              <NavItem>
                <Link
                  className="nav-link"
                  activeClass="active"
                  to="contact_section"
                  spy={true}
                  smooth={true}
                  offset={offset}
                  duration={duration}
                >
                  Contact
              </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavMenu;