import "./App.css";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { BsFiletypeSql } from "react-icons/bs";

const skills = [
  {
    id: 1,
    name: "Javascript",
    level: "Intermediate",
    description:
      "Proficient in using JavaScript applied in frameworks like React, \
       with a solid understanding of its syntax, data types, and control structures. \
       Experienced in working with popular libraries and frameworks, and skilled in using \
       JavaScript to solve real-world problems.",
    icon: <IoLogoJavascript size={32} />,
  },
  {
    id: 2,
    name: "React",
    level: "Intermediate",
    description:
      "Experienced in building reusable UI components with React. Skilled in managing state and props,\
      and familiar with popular libraries like Redux and React Router. Able to build scalable \
       and maintainable applications with React.",
    icon: <FaReact size={32} />,
  },
  {
    id: 3,
    name: "SQL",
    level: "Intermediate",
    description:
      "Proficient in writing efficient SQL queries to retrieve and manipulate data in \
       relational databases. Experienced in designing and implementing database schemas, and \
       skilled in using SQL to solve data analysis problems. Familiar with popular \
       database management systems like Oracle SQL and SQLServer.",
    icon: <BsFiletypeSql size={32} />,
  },
];

export default function App() {
  return (
    <div className="app">
      <header className="app-header">
        <NavbarPortfolio />
      </header>
      <div className="app-body">
        <AboutMe />
        <SkillList />
      </div>
      <footer className="app-footer"></footer>
    </div>
  );
}

function NavbarPortfolio() {
  return (
    <Container>
      {/* Inicio del navbar, la clase Navbar es el contenedor principal y tiene todos los estilos necesarios */}
      <Navbar id="navbar" expand="sm">
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
            <Button variant="success">Projects</Button>
            <Button variant="success">Contact</Button>
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

function SkillList() {
  return (
    <Container className="mb-5">
      <Row>
        <Col sm={12} className="d-flex justify-content-center">
          <Col sm={2} className="text-center" id="col-skills-titles">
            <h2>These are my</h2>
            <h3>Skills</h3>
          </Col>
        </Col>
      </Row>
      <Row>
        {skills.map((skill) => (
          <Col md={4} key={skill.id}>
            <Skill skill={skill} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

function Skill({ skill }) {
  return (
    <Card className="mb-3" id="card">
      <Card.Header id="card-header">
        <span>{skill.icon} </span>
        <span id="skill-name">{skill.name}</span>
      </Card.Header>
      <Card.Body>
        <Card.Title>{skill.level}</Card.Title>
        <Card.Text>{skill.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}
