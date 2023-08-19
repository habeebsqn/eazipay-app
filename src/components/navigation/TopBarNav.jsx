import React from "react";
import { Navbar, Container, Offcanvas, Nav } from "react-bootstrap";
import classes from "./TopBarNav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faArrowRight,
  faSquarePollHorizontal,
  faWallet,
  faUsers,
  faFileInvoice,
  faNoteSticky,
  faLayerGroup,
  faBook,
  faPhone,
  faGears,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink, useLocation } from "react-router-dom";
const TopBarNav = () => {
  const navTabs = [
    { title: "Dashboard", icon: faSquarePollHorizontal, link: "dashboard" },
    { title: "Wallet", icon: faWallet },
    {
      title: "Employee management",
      icon: faUsers,
    },
    { title: "Payroll", icon: faFileInvoice },
    { title: "Compliance", icon: faNoteSticky },
    { title: "Quick Loan", icon: faLayerGroup },
    { title: "Book Keeping", icon: faBook },
    { title: "Support", icon: faPhone },
    { title: "Settings", icon: faGears, link: "settings" },
  ];

  const getPathName = () => {
    const location = useLocation();
    const path = location.pathname.split("/");
    const displayPath = path[path.length - 1];
    return displayPath;
  };

  return (
    <div className={classes.topNav}>
      <Navbar
        bg="light"
        className="position-sticky d-none d-lg-block d-xl-block p-0 shadow-lg"
      >
        <Navbar.Brand href="#home">
          <div className={classes["brand-wrapper"]}>
            <div className={classes.overlay}>
              <img
                className="img-fluid position-absolute"
                height={"151px"}
                width={"275px"}
                alt="Mask group"
                src="https://generation-sessions.s3.amazonaws.com/e06ce59c0e2c447da45ea43fb9587309/img/mask-group@2x.png"
              />
              <img
                className="img-fluid position-absolute mt-5 ms-5"
                height={"72px"}
                alt="Eazipay LOGO NEW"
                src="https://generation-sessions.s3.amazonaws.com/e06ce59c0e2c447da45ea43fb9587309/img/eazipay-logo-new-1.svg"
              />
            </div>
          </div>
        </Navbar.Brand>

        <Navbar.Collapse className="justify-content-end pe-5">
          <Navbar.Text>
            <div className={classes.profile}>
              <FontAwesomeIcon icon={faBell} />

              <div className={classes.frame63}>
                <div className={classes.frame63}>
                  <img
                    className={classes.ellipse3}
                    alt="Ellipse"
                    src="https://generation-sessions.s3.amazonaws.com/e06ce59c0e2c447da45ea43fb9587309/img/ellipse-12@2x.png"
                  />
                  <div className={classes.frame51}>
                    <div className={classes["text-wrapper-34"]}>
                      <h5>Kalu Abasiama</h5>
                    </div>
                    <div className={classes["text-wrapper-35"]}>
                      Admin
                      <span className="ps-3">
                        <FontAwesomeIcon icon={faArrowRight} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>

      <Navbar
        expand="false"
        className="bg-body-tertiary mb-3 d-lg-none d-xl-none d-md-block d-sm-block "
      >
        <Container fluid>
          <Navbar.Brand>
            <span className="ps-3">
              <FontAwesomeIcon icon={faBell} />
            </span>
          </Navbar.Brand>
          <Navbar.Brand
            to={"settings"}
            as={NavLink}
            className="justify-content-center text-bold"
          >
            {getPathName()}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Offcanvas>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                {navTabs.map((nav) => (
                  <Nav.Link as={NavLink} to={nav.link} key={nav.title}>
                    <span className="p-2">
                      <FontAwesomeIcon icon={nav.icon} />
                    </span>
                    {nav.title}
                  </Nav.Link>
                ))}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};

export default TopBarNav;
