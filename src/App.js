import "./App.css";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { IoLogoReact } from "react-icons/io5";

export default function App() {
  return (
    <div className="app">
      <header className="app-header">
        <NavbarPortfolio />
      </header>
      <div className="app-body"></div>
      <footer className="app-footer"></footer>
    </div>
  );
}

function NavbarPortfolio() {
  return (
    <div>
      {/* Inicio del navbar, la clase Navbar es el contenedor principal y tiene todos los estilos necesarios */}
      <Navbar id="navbar" expand="sm">
        {/* Marca o Logo que se puede mostrar en el navbar */}
        <Navbar.Brand href="#">
          <IoLogoReact size={32} color="#ffc0c0" />
        </Navbar.Brand>

                {/* Título centrado que aparece solo en dispositivos pequeños */}
                <div className="d-sm-none mx-auto" style={{ marginTop: "2.5rem" }}>
          <Navbar.Brand href="#home" className="text-center">
            <h1 id="navbar-title">Portafolio</h1>
          </Navbar.Brand>
        </div>

        {/* Botón que aparece en pantallas pequeñas para activar collapse */}
        <Navbar.Toggle aria-controls="collapse-btn" />

        {/* Contiene los links a mostrar en el navbar */}
        <Navbar.Collapse
          className="text-center justify-content-center"
          id="collapse-btn"
        >
          <Nav style={{ gap: "2rem" }}>
            <Nav.Link id="nav-links">Home</Nav.Link>
            <Nav.Link id="nav-links">Apps</Nav.Link>
            <Nav.Link id="nav-links">About us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
