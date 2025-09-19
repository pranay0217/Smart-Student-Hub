import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

export const NavBar=() => {

  const navigate = useNavigate();
  return (
    <Navbar
      expand="lg"
      className="shadow-sm"
      style={{
        backgroundColor: 'rgba(0,0,0,0.85)',
        marginTop: '0px',
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1030,
        padding: '0.5rem 1rem',
      }}
    >
      <Container fluid className="d-flex justify-content-between align-items-center px-3 px-lg-5">
        {/* Brand */}
        <Navbar.Brand
          href="#"
          style={{
            fontWeight: 'bold',
            fontSize: '28px',
            color: '#00d8ff',
            fontFamily: 'Roboto, sans-serif',
          }}
        >
          Smart Student Hub
        </Navbar.Brand>

        {/* Toggle button for mobile */}
        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          {/* Navigation Links */}
          <Nav
            className="me-auto my-2 my-lg-0"
            navbarScroll
            style={{ gap: '1.5rem', flexWrap: 'wrap', marginLeft: '50px' }}
          >
            <Nav.Link onClick={() => navigate('/features')} style={{ color: '#ffffff' }}>
              Features
            </Nav.Link>
            <Nav.Link onClick={() => navigate('/about')} style={{ color: '#ffffff' }}>
              About
            </Nav.Link>
            <Nav.Link onClick={() => navigate('/contact')} style={{ color: '#ffffff' }}>
              Contact
            </Nav.Link>
          </Nav>

          {/* Buttons and Theme Selector */}
          <div className="d-flex flex-column flex-lg-row align-items-center gap-2 gap-lg-3 ms-lg-3">
            <Form.Select
              style={{
                minWidth: '140px',
                borderRadius: '8px',
                backgroundColor: '#1c1c1c',
                color: '#ffffff',
                border: 'none',
              }}
              defaultValue="light"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="ocean">Ocean</option>
              <option value="sunset">Sunset</option>
            </Form.Select>

            <Button
              variant="outline-light"
              className="w-100 w-lg-auto"
              style={{ borderRadius: '8px', borderColor: '#00d8ff', color: '#00d8ff' }}
            >
              Log In
            </Button>

            <Button
              variant="primary"
              className="w-100 w-lg-auto"
              style={{
                borderRadius: '8px',
                backgroundColor: '#00d8ff',
                border: 'none',
              }}
            >
              Learn More
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

