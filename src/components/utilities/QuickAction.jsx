import React from "react";
import classes from "./QuickAction.module.css";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const QuickAction = (props) => {
  const { action, icon } = props.action;
  return (
    <Card
      className={`"flex-fill text-center" ${classes["quick-action"]}`}
      bg="light"
    >
      <Card.Body>
        <Card.Title>
          <div className="text-center pt-3">
            <FontAwesomeIcon icon={icon} />
          </div>
        </Card.Title>
        <Card.Link href="#" className={classes["action-link"]}>
          <Card.Text className={classes["action-text"]}>{action}</Card.Text>
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

export default QuickAction;
