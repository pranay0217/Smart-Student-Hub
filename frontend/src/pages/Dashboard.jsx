import { Container, Row, Col, Card, ProgressBar, Button } from "react-bootstrap";

// Example user object (replace with actual data from login/session)
const user = {
  role: "student", // "student" | "faculty"
  name: "Aryan Sharma",
  email: "aryan.sharma@example.com",
  course: "B.Tech CSE",
  year: "3rd Year",
  status: "Active",
  department: "Computer Science",
  subjects: ["AI", "Machine Learning"],
  analytics: {
    attendance: 85,
    assignments: 72,
    library: 60,
  },
  notifications: [
    "📢 Semester exams start on Nov 25",
    "🎉 Annual Fest scheduled on Dec 10",
    "📝 Assignment deadline: Oct 30",
  ],
};

export const Dashboard = () => {
  return (
    <Container fluid className="p-4 bg-light min-vh-100">
      {/* Header */}
      <h2 className="fw-bold mb-4 text-center">
        🎓 Welcome, {user.name}
      </h2>

      <Row className="mb-4">
        {/* User Info */}
        <Col md={6}>
          <Card className="shadow border-0">
            <Card.Header className="bg-primary text-white fw-bold">
              Profile Information
            </Card.Header>
            <Card.Body>
              <p><b>Name:</b> {user.name}</p>
              <p><b>Email:</b> {user.email}</p>

              {user.role === "student" && (
                <>
                  <p><b>Course:</b> {user.course}</p>
                  <p><b>Year:</b> {user.year}</p>
                  <p>
                    <b>Status:</b>{" "}
                    <span
                      className={`badge ${
                        user.status === "Active" ? "bg-success" : "bg-warning"
                      }`}
                    >
                      {user.status}
                    </span>
                  </p>
                </>
              )}

              {user.role === "faculty" && (
                <>
                  <p><b>Department:</b> {user.department}</p>
                  <p><b>Subjects:</b> {user.subjects.join(", ")}</p>
                </>
              )}
            </Card.Body>
          </Card>
        </Col>

        {/* Analytics Section */}
        <Col md={6}>
          <Card className="shadow border-0">
            <Card.Header className="bg-info text-white fw-bold">
              Your Analytics
            </Card.Header>
            <Card.Body>
              <p>Attendance</p>
              <ProgressBar
                now={user.analytics.attendance}
                label={`${user.analytics.attendance}%`}
                className="mb-3"
              />

              <p>Assignments</p>
              <ProgressBar
                variant="success"
                now={user.analytics.assignments}
                label={`${user.analytics.assignments}%`}
                className="mb-3"
              />

              <p>Library Usage</p>
              <ProgressBar
                variant="warning"
                now={user.analytics.library}
                label={`${user.analytics.library}%`}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Notifications */}
      <Row className="mb-4">
        <Col>
          <Card className="shadow border-0">
            <Card.Header className="bg-warning text-dark fw-bold">
              Notifications
            </Card.Header>
            <Card.Body>
              <ul className="list-unstyled mb-0">
                {user.notifications.map((note, index) => (
                  <li key={index}>{note}</li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Quick Actions */}
      <Row>
        <Col>
          <Card className="shadow border-0">
            <Card.Header className="bg-dark text-white fw-bold">
              Quick Actions
            </Card.Header>
            <Card.Body className="d-flex flex-wrap gap-3">
              {user.role === "student" && (
                <>
                  <Button variant="primary">View Assignments</Button>
                  <Button variant="success">Check Attendance</Button>
                  <Button variant="info">Library Access</Button>
                </>
              )}

              {user.role === "faculty" && (
                <>
                  <Button variant="primary">Add Assignment</Button>
                  <Button variant="success">Upload Grades</Button>
                  <Button variant="info">Send Announcement</Button>
                </>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
