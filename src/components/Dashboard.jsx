import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import ProjectItem from "./project/ProjectItem";

const Dashboard = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="display-4 text-center mt-4">Projects</h1>
          <Button className="mt-2">Create a Project</Button>
          <hr />
          <ProjectItem />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
