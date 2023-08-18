import React from "react";
import { Card, Row, Col, Container, Button } from "react-bootstrap";
import classes from "./RecentActivities.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RecentActivities = (props) => {
  return (
    <Container className="flex-fill">
      <Container className={classes.container}>
        <h1>Recent Activities</h1>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="search employee"
            aria-label="employee's name"
            aria-describedby="button-addon2"
          />
          <Button
            variant="outline-success"
            type="button"
            id="button-addon2"
            size="md"
          >
            <span>
              <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
            </span>
          </Button>
        </div>
      </Container>

      <Card body style={{ width: "100%" }} className={classes["activity-card"]}>
        <Card.Title className="mb-4">Friday, August 09, 2023</Card.Title>
        <Card body className={classes["acitvity-tab"]}>
          <Row lg={4} className="justify-content-between">
            <Col>
              <Card.Text>PayRoll</Card.Text>
              <Card.Title>Sholanke habeeb</Card.Title>
            </Col>
            <Col>
              <Card.Text>Activity</Card.Text>
              <Card.Title>Salary Payment</Card.Title>
            </Col>
            <Col>
              <Card.Text>employee</Card.Text>
              <Card.Title>102</Card.Title>
            </Col>
            <Col>
              <Card.Text>Time</Card.Text>
              <Card.Title>12:15</Card.Title>
            </Col>
          </Row>
        </Card>
      </Card>
    </Container>
  );
};

export default RecentActivities;
