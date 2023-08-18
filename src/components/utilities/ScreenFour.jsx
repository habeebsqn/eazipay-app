import React from "react";
import classes from "./ScreenFour.module.css";
import { Container, Nav, Button, Form } from "react-bootstrap";

const ScreenFour = () => {
  return (
    <div className={classes.frame27}>
      <div className={classes.overlap4}>
        <div className={classes.frame28}>
          <div className={classes.group2}>
            <div className={classes.logos}>
              <div className={classes["circle-BG"]}>
                <div className={classes.overlap4}>
                  <div className={classes.ellipse5} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.frame29}>
          <div className={classes.frame30}>
            <div className={classes.frame31}>
              <div className={classes.frame32}>
                <div className={classes["text-wrapper-26"]}>
                  First things first
                </div>
                <div className={classes.frame33}>
                  <h6 className={classes["text-wrapper-27"]}>
                    We want to serve you better. Tell us a bit about yourself or
                    company
                  </h6>
                </div>
              </div>
              <div className={classes.navlink}>
                <Nav variant="pills success" defaultActiveKey="/home">
                  <Nav.Item>
                    <Nav.Link href={"/home"}>Individual</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="link-1">Company</Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
              <Container fluid className="mt-5">
                <Form>
                  <Form.Group className="mb-4" controlId="formFirstName">
                    <Form.Control type="text" placeholder="Enter First name" />
                  </Form.Group>
                  <Form.Group
                    className="mb-4 mt-4"
                    controlId="formGroupLastName"
                  >
                    <Form.Control type="text" placeholder="Enter Last name" />
                  </Form.Group>
                  <Form.Group className="mb-4 mt-4" controlId="formGroupEmail">
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      required
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-4 mt-4"
                    controlId="formGroupJobTitle"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Enter Job title"
                      required
                    />
                  </Form.Group>
                  <Form.Group
                    className="mt-4"
                    controlId="formGroupCompany"
                    required
                  >
                    <Form.Control
                      type="text"
                      placeholder="Enter Company name"
                    />
                  </Form.Group>
                  <div className="d-grid gap-2 mt-5">
                    <Button
                      variant="success"
                      className={classes.btn}
                      type="submit"
                      size="md"
                    >
                      Request Demo
                    </Button>
                  </div>
                </Form>
              </Container>
            </div>
          </div>

          <div className={classes.frame36}>
            <div className={classes.frame37}>
              <p className={classes.exclusive}>
                Get an Exclusive <br />
                Demo of Eazipay
              </p>
            </div>
            <div className={classes.frame38}>
              <h5 className={classes["text-wrapper-31"]}>
                Our greatest priority is to put you and your business first.
                Let’s show you how we can help.
              </h5>
            </div>
          </div>

          <div className={classes.frame39}>
            <div className={classes.frame40}>
              <div className={classes.ellipse6} />
              <div className={classes.ellipse7} />
              <div className={classes.ellipse7} />
              <div className={classes.ellipse7} />
              <div className={classes.ellipse6} />
            </div>
            <div className={classes.frame41}>
              <div className={classes.ellipse6} />
              <div className={classes.ellipse7} />
              <div className={classes.ellipse7} />
              <div className={classes.ellipse7} />
              <div className={classes.ellipse6} />
              <div className={classes.ellipse6} />
            </div>
            <div className={classes.frame41}>
              <div className={classes.ellipse6} />
              <div className={classes.ellipse7} />
              <div className={classes.ellipse7} />
              <div className={classes.ellipse7} />
              <div className={classes.ellipse6} />
              <div className={classes.ellipse6} />
            </div>
            <div className={classes.frame41}>
              <div className={classes.ellipse6} />
              <div className={classes.ellipse7} />
              <div className={classes.ellipse7} />
              <div className={classes.ellipse7} />
              <div className={classes.ellipse6} />
              <div className={classes.ellipse6} />
            </div>
            <div className={classes.frame41}>
              <div className={classes.ellipse6} />
              <div className={classes.ellipse7} />
              <div className={classes.ellipse7} />
              <div className={classes.ellipse7} />
              <div className={classes.ellipse6} />
              <div className={classes.ellipse6} />
            </div>
            <div className={classes.frame41}>
              <div className={classes.ellipse6} />
              <div className={classes.ellipse7} />
              <div className={classes.ellipse7} />
              <div className={classes.ellipse7} />
              <div className={classes.ellipse6} />
              <div className={classes.ellipse6} />
            </div>
            <div className={classes.frame41}>
              <div className={classes.ellipse6} />
              <div className={classes.ellipse7} />
              <div className={classes.ellipse7} />
              <div className={classes.ellipse7} />
              <div className={classes.ellipse6} />
              <div className={classes.ellipse6} />
            </div>
            <div className={classes.frame41}>
              <div className={classes.ellipse6} />
              <div className={classes.ellipse7} />
              <div className={classes.ellipse7} />
              <div className={classes.ellipse7} />
              <div className={classes.ellipse6} />
              <div className={classes.ellipse6} />
            </div>
            <div className={classes.frame42}>
              <div className={classes.ellipse6} />
              <div className={classes.ellipse7} />
              <div className={classes.ellipse7} />
              <div className={classes.ellipse7} />
              <div className={classes.ellipse6} />
              <div className={classes.ellipse6} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenFour;
