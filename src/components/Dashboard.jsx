import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CreateProjectButton from "./project/CreateProjectButton";
import ProjectItem from "./project/ProjectItem";

const Dashboard = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="display-4 text-center mt-4">Projects</h1>
          <CreateProjectButton />
          <hr />
          <ProjectItem />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
