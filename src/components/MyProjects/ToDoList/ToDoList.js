import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import "./ToDoList.css";
import { useState } from "react";
import { BsPencil } from "react-icons/bs";
import { FaRegTrashAlt } from "react-icons/fa";

const defaultTasks = [
  {
    id: 1,
    name: "Do the dishes and broom the living",
    state: "Unfinished",
  },
  {
    id: 2,
    name: "Do arms and chest with dumbells",
    state: "Unfinished",
  },
  {
    id: 3,
    name: "Take Mike for a walk in the park",
    state: "Finished",
  },
  {
    id: 4,
    name: "Call the bank",
    state: "Unfinished",
  },
  {
    id: 5,
    name: "Read book",
    state: "Finished",
  },
];

// Main function for app To Do List
export default function ToDoList() {
  const [tasks, setTasks] = useState(defaultTasks);

  function handleAddTask(task) {
    setTasks((tasks) => [...tasks, task]);
  }

  function handleDeleteTask(id) {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  }

  return (
    <Container id="container-to-do-list">
      <Row>
        <Col>
          <div className="text-center" id="to-do-list-titles">
            <h2>This is my</h2>
            <h3>To do list</h3>
          </div>
          <TasksForm onAddTask={handleAddTask} />
          <List tasks={tasks} onDeleteTask={handleDeleteTask} />
        </Col>
      </Row>
    </Container>
  );
}

function List({ tasks, onDeleteTask }) {
  return (
    <Table striped bordered hover id="task-table">
      <tbody id="task-list">
        {tasks.map((task) => (
          <Task key={task.id} task={task} onDeleteTask={onDeleteTask} />
        ))}
      </tbody>
    </Table>
  );
}

function Task({ task, onDeleteTask }) {
  return (
    <tr>
      <td>
        <input type="checkbox"></input>
      </td>
      <td style={{maxWidth: '20rem',overflowWrap: "break-word"}}>{task.name}</td>
    </tr>
  );
}

function TasksForm({ onAddTask }) {
  const [text, setText] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!text) return;

    const id = crypto.randomUUID();
    const newTask = {
      id: id,
      name: text,
      state: "Unfinished",
    };

    console.log(newTask);
    onAddTask(newTask);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Enter new task"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </Form.Group>
      <Button type="submit" variant="none" id="submit-btn">
        +
      </Button>
    </Form>
  );
}
