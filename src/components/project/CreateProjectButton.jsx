import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const CreateProjectButton = () => {
  return (
    <div>
      <Link to="/addProject">
        <Button className="mt-2">Create a Project</Button>
      </Link>
    </div>
  );
};

export default CreateProjectButton;
