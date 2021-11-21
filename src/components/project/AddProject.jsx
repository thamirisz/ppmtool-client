import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const validationSchema = Yup.object().shape({
  projectName: Yup.string().required(),
  projectIdentifier: Yup.string().required(),
  description: Yup.string().required(),
  startDate: Yup.date().required(),
  endDate: Yup.date().required(),
});

const AddProject = () => {
  return (
    <div className="AddProject">
      <Formik
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          // When button submits form and form is in the process of submitting, submit button is disabled
          setSubmitting(true);

          // Simulate submitting to database, shows us values submitted, resets form
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            resetForm();
            setSubmitting(false);
          }, 500);
        }}
        initialValues={{
          projectName: "",
          projectIdentifier: "",
          description: "",
          startDate: "",
          endDate: "",
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          errors,
        }) => (
          <Container>
            <Row>
              <Col className="col-md-8 m-auto">
                <h5 className="display-4 text-center mt-4">
                  Create / Edit Project
                </h5>
                <hr />
                <Form noValidate onSubmit={handleSubmit}>
                  <Form.Group controlId="projectName" className="mt-4">
                    <Form.Label>Project Name</Form.Label>
                    <Form.Control
                      placeholder="Project Name"
                      name="projectName"
                      value={values.projectName}
                      isInvalid={touched.projectName && !!errors.projectName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.projectName}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="projectIdentifier" className="mt-4">
                    <Form.Label>Unique Project ID</Form.Label>
                    <Form.Control
                      placeholder="Project ID"
                      name="projectIdentifier"
                      value={values.projectIdentifier}
                      isInvalid={
                        touched.projectIdentifier && !!errors.projectIdentifier
                      }
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.projectIdentifier}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="description" className="mt-4">
                    <Form.Label>Project Description</Form.Label>
                    <Form.Control
                      placeholder="Description"
                      name="description"
                      rows={3}
                      as="textarea"
                      value={values.description}
                      isInvalid={touched.description && !!errors.description}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.description}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="startDate" className="mt-4">
                    <Form.Label>Start Date</Form.Label>
                    <Form.Control
                      type="date"
                      name="startDate"
                      value={values.startDate}
                      isInvalid={touched.startDate && !!errors.startDate}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.startDate}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="endDate" className="mt-4">
                    <Form.Label>Estimated End Date</Form.Label>
                    <Form.Control
                      type="date"
                      name="endDate"
                      value={values.endDate}
                      isInvalid={touched.endDate && !!errors.endDate}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.endDate}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Button
                    type="submit"
                    className="btn btn-primary btn-block mt-4"
                  >
                    Create
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>
        )}
      </Formik>
    </div>
  );
};

export default AddProject;
