import React from "react";
import classes from "./LandingPageNav.module.css";
import { Navbar, NavbarBrand, Button } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import LandingPageLogo from "./LandingPageLogo";
import { useNavigate } from "react-router-dom";
const LandingPageNav = () => {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    navigate("dashboard");
  };

  return (
    <div className={classes.nav}>
      <div>
        <Navbar>
          <NavbarBrand className="me-5">
            <LandingPageLogo />
          </NavbarBrand>
          <Nav
            activeKey="/home"
            className="justify-content-center flex-grow-1 pe-3 me-5"
          >
            <Nav.Item>
              <Nav.Link className={classes.navLink} href="/home">
                Individual
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1" className={classes.navLink}>
                Business
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2" className={classes.navLink}>
                Pricing
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2" className={classes.navLink}>
                Set your payroll
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Button
            variant="outline-success"
            className={`me-3 pe-5 ps-5 rounded-pill ${classes.navBtn}`}
            style={{ borderColor: "#00271d" }}
            size="md"
            onClick={handleLogin}
          >
            Login
          </Button>
          <Button
            variant="success"
            className={`pe-5 ps-5 rounded-pill ${classes.navBtn}`}
            style={{ backgroundColor: "#4d8177" }}
            size="md"
          >
            Register
          </Button>
        </Navbar>
      </div>
    </div>
  );
};

export default LandingPageNav;
