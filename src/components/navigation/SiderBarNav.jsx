import React from "react";
import { Container, Navbar, Offcanvas, Nav } from "react-bootstrap";
import classes from "./SideBarNav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

import {
  faSquarePollHorizontal,
  faWallet,
  faUsers,
  faFileInvoice,
  faNoteSticky,
  faLayerGroup,
  faBook,
  faPhone,
  faGears,
  faBell,
} from "@fortawesome/free-solid-svg-icons";

const SiderBarNav = () => {
  const navTabs = [
    { title: "Dashboard", icon: faSquarePollHorizontal, link: "dashboard" },
    { title: "Wallet", icon: faWallet },
    {
      title: "Employee management",
      icon: faUsers,
      eventKey: "link-3",
    },
    { title: "Payroll", icon: faFileInvoice },
    { title: "Compliance", icon: faNoteSticky },
    { title: "Quick Loan", icon: faLayerGroup },
    { title: "Book Keeping", icon: faBook },
    { title: "Support", icon: faPhone },
    { title: "Settings", icon: faGears, link: "settings" },
  ];

  return (
    <div className="d-none d-lg-block d-xl-block">
      <Container className={classes.sideBar}>
        <div className={classes["sidebar-sticky"]}>
          <Nav defaultActiveKey="/home" className="flex-column">
            {navTabs.map((tab) => (
              <Nav.Item className={classes["nav-item"]} key={tab.title}>
                <Nav.Link
                  className={`${classes["nav-link"]}  ${({ isActive }) =>
                    isActive ? classes.active : undefined}`}
                  end
                  as={NavLink}
                  to={tab.link}
                >
                  <span className="p-2">
                    <FontAwesomeIcon icon={tab.icon} />
                  </span>
                  {tab.title}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </div>
      </Container>
    </div>
  );
};

export default SiderBarNav;
