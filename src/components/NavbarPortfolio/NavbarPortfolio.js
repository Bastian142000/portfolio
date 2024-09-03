import { Link } from "react-router-dom";
import "./NavbarPortfolio.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function NavbarPortfolio() {
  return (
    <Container>
      {/* Inicio del navbar, la clase Navbar es el contenedor principal y tiene todos los estilos necesarios */}
      <Navbar id="navbar" expand="sm">
        {/* Marca o Logo que se puede mostrar en el navbar */}
        <div className="d-sm mx-auto">
          <Navbar.Brand as={Link} to={"/"}>
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
          <Navbar.Brand as={Link} to="/">
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
            <Nav.Link as={Link} to="/" id="nav-links">
              About me
            </Nav.Link>
            <Nav.Link as={Link} to="/skills" id="nav-links">
              Skills
            </Nav.Link>
            <Nav.Link as={Link} to="/projects" id="nav-links">
              My projects
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}
