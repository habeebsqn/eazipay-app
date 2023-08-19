import { Col, Container, Row, Card } from "react-bootstrap";
import classes from "./Dashboard.module.css";
import CreditWallet from "../components/utilities/CreditWallet";
import QuickAction from "../components/utilities/QuickAction";
import Reminder from "../components/utilities/Reminder";
import Charts from "../components/utilities/Charts";
import RecentActivities from "../components/utilities/RecentActivities";

const actions = [
  { action: "add employee", icon: "fa-solid fa-users" },
  { action: "pay salaries", icon: "fa-solid fa-money-bill-1-wave" },
  { action: "pay complainces", icon: "fa-solid fa-paper-plane" },
  { action: "quick loan", icon: "fa-solid fa-layer-group" },
];

const recent = [
  {
    employee: "23",
    activity: "Salary collection",
    name: "habeeb",
    time: "12:15",
    day: "wednesday",
    month: "jan",
    year: "2021",
  },
  {
    employee: "45",
    activity: "Hr meeting",
    name: "blessing",
    time: "3:00",
    day: "friday",
    month: "Feb",
    year: "2021",
  },
  {
    employee: "289",
    activity: "leave request",
    name: "hakeem",
    time: "9:00",
    day: "thursday",
    month: "march",
    year: "2021",
  },
  {
    employee: "67",
    activity: "company general meeting",
    name: "akin",
    time: "8:00",
    day: "monday",
    month: "oct",
    year: "2021",
  },
  {
    employee: "78",
    activity: "complaint",
    name: "sule",
    time: "7:00",
    day: "tuesday",
    month: "nov",
    year: "2021",
  },
  {
    employee: "7",
    activity: "promotion",
    name: "wole",
    time: "4:00",
    day: "friday",
    month: "apr",
    year: "2021",
  },
  {
    employee: "89",
    activity: "new staff",
    name: "taiwo",
    time: "8:00",
    day: "monday",
    month: "aug",
    year: "2021",
  },
  {
    employee: "99",
    activity: "public holiday",
    name: "yusuf",
    time: "3:30",
    day: "tuesday",
    month: "jul",
    year: "2021",
  },
  {
    employee: "29",
    activity: "survey",
    name: "chisom",
    time: "4:45",
    day: "thursday",
    month: "step",
    year: "2021",
  },
];

const Dashboard = () => {
  return (
    <Container>
      <Container className={classes.container}>
        <h1>Welcome back Mr Habeeb</h1>
        <p>let's proceed to maintaining your enterprise</p>
      </Container>
      <Row>
        <Col lg={8} sm={12}>
          <Row sm={1}>
            <Col className="d-flex align-items-stretch mb-5">
              <CreditWallet />
            </Col>

            <Col>
              <Row lg={4}>
                {actions.map((action) => (
                  <Col
                    className="d-flex align-items-stretch"
                    key={action.action}
                  >
                    <QuickAction action={action} key={action.icon} />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Col>

        <Col lg={4} sm={12} className="d-flex align-items-stretch">
          <Reminder />
        </Col>
      </Row>

      <Row>
        <Col className="d-flex align-items-stretch mt-5">
          <Charts />
        </Col>
      </Row>

      <Row>
        <Col className="d-flex align-items-stretch  mt-4">
          <RecentActivities recent={recent} />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
