import "./MyProjects.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { projects } from "../../data/projects";

export default function MyProjects() {
  return (
    <Container className="mb-5">
      <Row className="d-flex justify-content-center">
        <Col sm={12} className="d-flex justify-content-center">
          <Col sm={2} className="text-center" id="project-titles">
            <h2>These are my</h2>
            <h3>Projects</h3>
          </Col>
        </Col>
      </Row>
      <ProjectsList />
    </Container>
  );
}

function ProjectsList() {
  return <Row>
    {projects.map((project) => <Project project={project} key={project.id}/>)}
  </Row>
}

function Project({ project }) {
  return <Col lg={3}>
    <Card id="card-projects">
      <Card.Header>{project.name}</Card.Header>
      <Card.Body>
        <Card.Img src={project.image} className="img-fluid" alt="Img in work..."></Card.Img>
        <Card.Text>{project.description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Link to={project.link} className="btn btn-success">Watch</Link>
      </Card.Footer>
    </Card>
  </Col>
}