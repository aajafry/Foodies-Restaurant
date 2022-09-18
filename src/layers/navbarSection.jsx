import React from "react";

import { Container, Nav, Navbar, NavbarBrand, NavLink } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";

import logo from "../assets/images/logo.png";
import Button from "../components/Button";
import styles from "../styles/navbarSection.module.css";

export default function NavbarSection() {
  return (
    <header>
      <Navbar className={styles.navigation_wrap} expand="lg">
        <Container>
          <NavbarBrand href="#home">
            <img src={logo} alt="FOODIES" />
          </NavbarBrand>
          <NavbarToggle
            data-bs-toggle="collapse"
            data-bs-target="#basic-navbar-nav"
            aria-controls="basic-navbar-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />
          <NavbarCollapse id="basic-navbar-nav">
            <Nav className="ms-auto mb-2 mb-lg-0">
              <span className={styles.nav_item}>
                <NavLink className={styles.nav_link} href="#home">
                  Home
                </NavLink>
              </span>
              <span className={styles.nav_item}>
                <NavLink className={styles.nav_link} href="#about">
                  About Us
                </NavLink>
              </span>
              <span className={styles.nav_item}>
                <NavLink className={styles.nav_link} href="#explore-food">
                  Explore Food
                </NavLink>
              </span>
              <span className={styles.nav_item}>
                <NavLink className={styles.nav_link} href="#testimonial">
                  Review
                </NavLink>
              </span>
              <span className={styles.nav_item}>
                <NavLink className={styles.nav_link} href="#faq">
                  FAQ
                </NavLink>
              </span>
              <Button btnText="1200 345 123" btnClass="main_btn" />
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </header>
  );
}
