import { useState } from "react";
import { Container, Carousel, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const navigate = useNavigate();

  const handleSelect = (selectedIndex) => {
    setRoleIndex(selectedIndex);
  };

  const handleBack = () => {
    navigate("/"); // navigate to homepage
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4 fw-bold">Sign Up Portal</h2>
      <p className="text-center text-dark">
        Choose your role and complete the signup form
      </p>

      {/* Carousel with controls + indicators */}
      <Carousel
        activeIndex={roleIndex}
        onSelect={handleSelect}
        className="shadow-lg rounded"
        interval={null}
        controls={true}
        indicators={true}
      >
        {/* Student Signup */}
        <Carousel.Item>
          <div className="p-4 bg-light rounded">
            <h3 className="text-primary mb-3">Student Signup</h3>
            <Form>
              <Form.Group className="mb-3" controlId="studentName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="studentEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="studentCourse">
                <Form.Label>Course</Form.Label>
                <Form.Control type="text" placeholder="Enter your course" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="studentPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button variant="primary" type="submit">Sign Up</Button>
            </Form>
          </div>
        </Carousel.Item>

        {/* Faculty Signup */}
        <Carousel.Item>
          <div className="p-4 bg-light rounded">
            <h3 className="text-success mb-3">Faculty Signup</h3>
            <Form>
              <Form.Group className="mb-3" controlId="facultyName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="facultyEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="facultyDept">
                <Form.Label>Department</Form.Label>
                <Form.Control type="text" placeholder="Enter department" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="facultyPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button variant="success" type="submit">Sign Up</Button>
            </Form>
          </div>
        </Carousel.Item>

        {/* Institute Signup */}
        <Carousel.Item>
          <div className="p-4 bg-light rounded">
            <h3 className="text-danger mb-3">Institute Signup</h3>
            <Form>
              <Form.Group className="mb-3" controlId="instituteName">
                <Form.Label>Institute Name</Form.Label>
                <Form.Control type="text" placeholder="Enter institute name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="instituteEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="instituteLocation">
                <Form.Label>Location</Form.Label>
                <Form.Control type="text" placeholder="Enter location" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="institutePassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button variant="danger" type="submit" >Sign Up</Button>
            </Form>
          </div>
        </Carousel.Item>
      </Carousel>

      {/* Back Button */}
      <div className="text-center mt-4">
        <Button variant="secondary" onClick={handleBack}>
          ← Back to Home
        </Button>
        <Button variant="secondary" onClick={() => navigate('/dashboard')}>
          dashboard
        </Button>
      </div>
    </Container>
  );
};
