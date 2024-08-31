import "./App.css";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { IoLogoReact } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function App() {
  return (
    <div className="app">
      <header className="app-header">
        <NavbarPortfolio />
      </header>
      <div className="app-body">
        <AboutMe />
      </div>
      <footer className="app-footer"></footer>
    </div>
  );
}

function NavbarPortfolio() {
  return (
    <Container>
      {/* Inicio del navbar, la clase Navbar es el contenedor principal y tiene todos los estilos necesarios */}
      <Navbar id="navbar" className="m-2 mt-4" expand="sm">
        {/* Marca o Logo que se puede mostrar en el navbar */}
        <div className="d-sm mx-auto">
          <Navbar.Brand href="#">
            <h1 id="navbar-title-lg" className="d-none d-sm-inline">
              HOSTNAME
            </h1>
          </Navbar.Brand>
        </div>

        {/* Título centrado que aparece solo en dispositivos pequeños */}
        <div
          className="d-sm-none mx-auto"
          style={{ marginTop: "2.5rem", paddingRight: "1rem" }}
        >
          <Navbar.Brand href="#home">
            <h1 id="navbar-title-sm text-center">HOSTNAME</h1>
          </Navbar.Brand>
        </div>

        {/* Botón que aparece en pantallas pequeñas para activar collapse */}
        <Navbar.Toggle aria-controls="collapse-btn" />

        {/* Contiene los links a mostrar en el navbar */}
        <Navbar.Collapse
          className="text-center justify-content-end"
          id="collapse-btn"
        >
          <Nav style={{ gap: "1rem" }}>
            <Nav.Link id="nav-links">About me</Nav.Link>
            <Nav.Link id="nav-links">Skills</Nav.Link>
            <Nav.Link id="nav-links">My projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

function AboutMe() {
  return (
    <Container className="aboutme-container">
      <Row className="text-center text-md-left">
        <Col md={4} className="col-aboutme">
          <img
            src="User.jpg"
            alt="user"
            className="img-fluid rounded-circle"
          ></img>
        </Col>
        <Col md={8} className="col-aboutme">
          <h2>What will you find here?</h2>
          <span>
            Hi there! I'm [Your Name], currently in my 4th year of Computer
            Science. Welcome to my portfolio, where you can explore the projects
            I've created using frontend technologies. I'm passionate about
            deepening my skills in this field, and I hope you find my work
            interesting. Feel free to check out my projects below, and don't
            hesitate to message me if you're interested!
          </span>
          <span>
            <Button variant="dark">Projects</Button>
            <Button variant="dark">Contact</Button>
          </span>
          <span className="aboutme-icons">
            <FaGithub size={32} className="git-icon" />
            <FaLinkedin size={32} className="linkedin-icon" />
          </span>
        </Col>
      </Row>
    </Container>
  );
}
