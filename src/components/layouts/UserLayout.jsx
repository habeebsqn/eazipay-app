import React from "react";
import classes from "./UserLayout.module.css";
import { Outlet } from "react-router-dom";
import TopBarNav from "../navigation/TopBarNav";
import SiderBarNav from "../navigation/SiderBarNav";
import { Container, Row, Col } from "react-bootstrap";

const UserLayout = () => {
  return (
    <Container fluid>
      <Row>
        <Col className="p-0">
          <TopBarNav />
          <main className={classes.main}>
            <Outlet />
          </main>
        </Col>
      </Row>
      <Row>
        <Col lg={3} className="p-0">
          <SiderBarNav />
        </Col>
      </Row>
    </Container>
  );
};

export default UserLayout;
