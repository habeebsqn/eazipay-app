import React from "react";
import { Form, Card, Button } from "react-bootstrap";
import classes from "./Edit.module.css";

const Edit = () => {
  return (
    <Card
      bg="light"
      text="Dark"
      style={{ width: "100%" }}
      className={classes.edit}
    >
      <Card.Header className={classes.t1}>Edit Company Information</Card.Header>
      <Card.Body>
        <Card.Body>
          <img src="..." class="img-thumbnail" alt="..." />
          <Button variant="outline-light" size="sm">
            Success
          </Button>
        </Card.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicCompanyName">
            <Form.Label size="lg">Company's Name</Form.Label>
            <Form.Control type="text" placeholder="eazipay" size="lg" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCompanyName">
            <Form.Text className="text-bold">
              {" "}
              Is your company registered?
            </Form.Text>
            <div>
              <Button
                variant="success"
                type="button"
                size="sm"
                className="me-5"
              >
                YES
              </Button>
              <Button variant="outline-success" type="button" size="sm">
                NO
              </Button>
            </div>

            <Form.Group controlId="formFileLg" className="mb-3">
              <Form.Label>Uploaded CAC document</Form.Label>
              <Form.Control type="file" size="lg" />
            </Form.Group>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCompanyAddress">
            <Form.Label size="lg">Company's Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="17, simbiat, abiola way, lekki"
              size="lg"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicSize">
            <Form.Label size="lg">Company's Size</Form.Label>
            <Form.Select aria-label="100 and above" size="lg">
              <option>Open this select menu</option>
              <option value="1">10 - 20</option>
              <option value="2">50 - 100</option>
              <option value="3">500 - 1000</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPension">
            <Form.Label size="lg">Pension Code</Form.Label>
            <Form.Control type="text" placeholder="AW793EHFO923" size="lg" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPaye">
            <Form.Label size="lg">PAYE State</Form.Label>
            <Form.Control type="text" placeholder="lagos state" size="lg" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicId">
            <Form.Label size="lg">PAYE ID</Form.Label>
            <Form.Control type="text" placeholder="N-JSUWKDW" size="lg" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicNhf">
            <Form.Label size="lg">NHF CODE</Form.Label>
            <Form.Control type="text" placeholder="10666HTAHS" size="lg" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicWebsite">
            <Form.Label size="lg">Website</Form.Label>
            <Form.Control type="text" placeholder="www.payenet.com" size="lg" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicindustry">
            <Form.Label size="lg">Industry</Form.Label>
            <Form.Control
              type="text"
              placeholder="Travel & Tourism"
              size="lg"
            />
          </Form.Group>

          <Button variant="success" type="submit" size="xl" className="me-5">
            Save
          </Button>
          <Button variant="outline-success" type="submit" size="xl">
            Cancel
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Edit;
