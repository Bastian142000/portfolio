import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Skill from "./Skill.js";
import { skills } from "../../data/skills";
import "./SkillList.css";

export default function SkillList() {
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
