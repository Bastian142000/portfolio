import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import UserImage from "../../assets/images/User.jpg";
import Button from "react-bootstrap/Button";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <Container className="aboutme-container mb-5">
      <Row className="text-center text-md-left">
        <Col md={4} className="col-aboutme">
          <img
            src={UserImage}
            alt="user"
            className="img-fluid rounded-circle"
          ></img>
        </Col>
        <Col md={8} className="col-aboutme">
          <h2>What will you find here?</h2>
          <span>
            Hi there! I'm Bastian Prado, currently in my 4th year of Computer
            Science. Welcome to my portfolio, where you can explore the projects
            I've created using frontend technologies. I'm passionate about
            deepening my skills in this field, and I hope you find my work
            interesting. Feel free to check out my projects below, and don't
            hesitate to message me if you're interested!
          </span>
          <span id="aboutme-btns">
            <Link to="/projects" className="btn btn-success">
              Projects
            </Link>
            <Link
              to="https://www.linkedin.com/in/bastián-prado-leiva-0b6a81221"
              className="btn btn-success"
            >
              Contact
            </Link>
          </span>
          <span className="aboutme-icons">
            <Link to="https://github.com/Bastian142000/portfolio">
              <FaGithub size={32} className="git-icon" />
            </Link>
            <Link to="https://www.linkedin.com/in/bastián-prado-leiva-0b6a81221">
              <FaLinkedin size={32} className="linkedin-icon" />
            </Link>
          </span>
        </Col>
      </Row>
    </Container>
  );
}
