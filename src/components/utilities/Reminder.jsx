import React from "react";
import { Card } from "react-bootstrap";
import classes from "./Reminder.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Reminder = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const day = currentDate.getDay();
  const formattedDate = `${month}/${day}/${year}`;
  return (
    <Card className={`text-center flex-fill ${classes.box}`}>
      <Card.Header className={classes.reminderH}>Next Payroll</Card.Header>
      <Card.Body>
        <Card.Text className="text-bold">
          <span>
            <FontAwesomeIcon icon="fa-solid fa-calendar-days" />
          </span>
          Friday
        </Card.Text>
        <Card.Title className="mb-1 mt-1 ">
          <h3>{formattedDate} </h3>
        </Card.Title>
        <hr />

        <Card.Text className="text-bold">Total number of employees</Card.Text>
        <Card.Title className="mb-1 mt-1 ">
          <h3>64</h3>
        </Card.Title>
        <hr style={{ borderWidth: "5px", color: "red" }} />
        <hr style={{ borderWidth: "5px", color: "green" }} />
        <span className="me-2">male 47</span>
        <span>Female 79</span>
      </Card.Body>
    </Card>
  );
};

export default Reminder;
