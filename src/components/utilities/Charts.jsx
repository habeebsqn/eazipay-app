import React, { useEffect } from "react";
import { Chart } from "chart.js/auto";
import { Card, Container, Row, Col } from "react-bootstrap";

const Charts = () => {
  useEffect(() => {
    var ctx = document.getElementById("myChart");

    var existingChart = Chart.getChart(ctx);
    if (existingChart) {
      existingChart.destroy();
    }

    var myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL"],
        datasets: [
          {
            data: [
              0,
              5000000,
              10000000,
              250000000,
              125000000,
              150000000,
              200000000,
              ,
            ],
            lineTension: 0,
            backgroundColor: "transparent",
            borderColor: "#80b7a9",
            borderWidth: 4,
            pointBackgroundColor: "#03513d",
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "PayRoll chart",
          fontSize: 16,
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: false,
              },
            },
          ],
        },
        legend: {
          display: false,
        },
      },
    });
  }, []);

  return (
    <Container style={{ width: "100%" }} className={"flex-fill"}>
      <Row className="m-5">
        <Col lg={6}>
          <Card style={{ borderWidth: 0, textAlign: "center" }}>
            <Card.Text className="text-bold">inflow</Card.Text>
            <Card.Title className="text-success">
              <h3> N1,567,552 </h3>
            </Card.Title>
          </Card>
        </Col>
        <Col lg={6}>
          <Card style={{ borderWidth: 0, textAlign: "center" }}>
            <Card.Text className="text-bold">outflow</Card.Text>
            <Card.Title className="text-danger">
              <h3> N1,567,552</h3>
            </Card.Title>
          </Card>
        </Col>
      </Row>
      <canvas className="my-4" id="myChart" width="900" height="380"></canvas>
    </Container>
  );
};

export default Charts;
