import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./ToDoList.css";
import { useState } from "react";

const tasks = [
  {
    id: 1,
    name: "Do housework",
    description: "Do the dishes and broom the living",
    state: "Unfinished",
  },
  {
    id: 2,
    name: "Do exercise",
    description: "Do arms and chest with dumbells",
    state: "Unfinished",
  },
  {
    id: 3,
    name: "Walk the dog",
    description: "Take Mike for a walk in the park",
    state: "Finished",
  },
  {
    id: 4,
    name: "Call the bank",
    description: "Call the bank asistant to ask a new credit line",
    state: "Unfinished",
  },
  {
    id: 5,
    name: "Read book",
    description: "Read 50 pages of the current book",
    state: "Finished",
  },
];

// Main function for app To Do List
export default function ToDoList() {
  return (
    <Container id="container-to-do-list">
      <Row>
        <Col>
          <div className="text-center" id="to-do-list-titles">
            <h2>This is my</h2>
            <h3>To do list</h3>
          </div>
          <TasksForm />
          <List />
        </Col>
      </Row>
    </Container>
  );
}

function List() {
  return (
    <ul className="justify-content-center" id="task-list">
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </ul>
  );
}

function Task({ task }) {
  return (
    <li id="task">
      <div>
        <h3>{task.name}</h3>
        <p>{task.description}</p>
      </div>
      <div>
        <span>{task.state}</span>
      </div>
    </li>
  );
}

function TasksForm() {
  const [newTask, setNewTask] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Enter new task"
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
        />
      </Form.Group>
      <Button type="submit" variant="none" id="submit-btn">
        +
      </Button>
    </Form>
  );
}
