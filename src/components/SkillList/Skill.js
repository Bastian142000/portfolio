import Card from "react-bootstrap/Card";

export default function Skill({ skill }) {
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