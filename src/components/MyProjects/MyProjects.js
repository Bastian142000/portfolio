import "./MyProjects.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

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
      <Row>
        <Col md={3}>
          <Card id="card-projects">
            <Card.Header>Parking Lot</Card.Header>
            <Card.Body>
              <Card.Img src="Leaves.jpg"></Card.Img>
              <Card.Text>Wa</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Link to={"/projects/to-do-list"} className="btn btn-success">Watch</Link>
            </Card.Footer>
          </Card>
        </Col>
        <Col md={3}>
          <Card id="card-projects">
            <Card.Header>Project 1</Card.Header>
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
            <Card.Footer></Card.Footer>
          </Card>
        </Col>
        <Col md={3}>
          <Card id="card-projects">
            <Card.Header>Project 1</Card.Header>
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
            <Card.Footer></Card.Footer>
          </Card>
        </Col>
        <Col md={3}>
          <Card id="card-projects">
            <Card.Header>Project 1</Card.Header>
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
            <Card.Footer></Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
