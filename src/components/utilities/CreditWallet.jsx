import React from "react";
import { Button, Card } from "react-bootstrap";
import classes from "./CreditWallet.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
const CreditWallet = () => {
  return (
    <Card
      style={{ width: "100%", backgroundColor: "white" }}
      className={"flex-fill"}
    >
      <Card.Title className={classes.title}>Wallet Balance</Card.Title>
      <Card.Text className={classes.balance}>
        N12,560,078.00
        <span className="ps-5 mt-1">
          <FontAwesomeIcon icon={faEyeSlash} style={{ color: "#03513d" }} />
        </span>
      </Card.Text>
      <Card.Text className={classes.text}>
        <Button
          variant="success"
          size="md"
          className={`pe-5 ps-5 mb-5 rounded-pill ${classes.btn}`}
        >
          Fund Wallet
        </Button>
      </Card.Text>
    </Card>
  );
};

export default CreditWallet;
