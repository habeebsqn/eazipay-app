import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import classes from "./Settings.module.css";
import Edit from "../components/utilities/Edit";

const Settings = () => {
  return (
    <Container className={classes.container}>
      <Row>
        <Col lg={12}>
          <Card className={classes.set}>
            <Card.Title className={classes.t}>BUSSINESS PROFILE</Card.Title>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className={classes.set2}>
            <Row xs={2}>
              <Col sm={6}>
                {" "}
                <Card.Title className={classes.title}>Company</Card.Title>
              </Col>
              <Col sm={6}>
                {" "}
                <Card.Title className={classes.title}>CEO/Founder</Card.Title>
              </Col>
              <Col sm={6}>
                <Card.Title className={classes.title}>
                  Company Director
                </Card.Title>
              </Col>
              <Col sm={6}>
                {" "}
                <Card.Title className={classes.title}>Acount Info</Card.Title>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Edit />
        </Col>
      </Row>
    </Container>
  );
};

export default Settings;
