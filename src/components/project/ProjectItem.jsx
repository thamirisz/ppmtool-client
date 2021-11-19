import React from "react";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { FaFlagCheckered, FaEdit, FaMinusCircle } from "react-icons/fa";

const ProjectItem = () => {
  return (
    <Container>
      <Card className="card card-body bg-light mb-3">
        <Row>
          <Col className="col-2">
            <span className="mx-auto">REACT</span>
          </Col>
          <Col className="col-lg-6 col-md-4 col-8">
            <h3>Spring / React Project</h3>
            <p>Project to create a Kanban Board with Spring Boot and React</p>
          </Col>
          <Col className="col-md-4 d-none d-lg-block">
            <ListGroup>
              <ListGroup.Item className="board" action>
                <FaFlagCheckered /> Project Board
              </ListGroup.Item>
              <ListGroup.Item className="update" action>
                <FaEdit /> Update Project Info
              </ListGroup.Item>
              <ListGroup.Item className="delete" action>
                <FaMinusCircle /> Delete Project
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default ProjectItem;
