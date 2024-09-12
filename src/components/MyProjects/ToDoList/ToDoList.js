import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import "./ToDoList.css";
import { useState } from "react";

const defaultTasks = [
  {
    id: 1,
    name: "Do the dishes and broom the living",
    finished: false,
  },
  {
    id: 2,
    name: "Do arms and chest with dumbells",
    finished: false,
  },
  {
    id: 3,
    name: "Take Mike for a walk in the park",
    finished: false,
  },
  {
    id: 4,
    name: "Call the bank",
    finished: false,
  },
  {
    id: 5,
    name: "Read book",
    finished: false,
  },
];

// Main function for app To Do List
export default function ToDoList() {
  const [tasks, setTasks] = useState(defaultTasks);

  function handleAddTask(task) {
    setTasks((tasks) => [...tasks, task]);
  }

  function handleToggleTask(id) {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, finished: !task.finished } : task
      )
    );
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
          <List tasks={tasks} onToggleTask={handleToggleTask} />
        </Col>
      </Row>
    </Container>
  );
}

function List({ tasks, onToggleTask }) {
  const sortedTasks = tasks.sort((a, b) => {
    if (a.finished && !b.finished) return 1;
    if (!a.finished && b.finished) return -1;
    return 0;
  });

  return (
    <Table hover id="task-table">
      <tbody id="task-list">
        {sortedTasks.map((task) => (
          <Task key={task.id} task={task} onToggleTask={onToggleTask} />
        ))}
      </tbody>
    </Table>
  );
}

function Task({ task, onToggleTask }) {
  return (
    <tr>
      <td>
        <input
          type="checkbox"
          value={task.finished}
          onChange={() => onToggleTask(task.id)}
        ></input>
      </td>
      <td
        style={{
          maxWidth: "20rem",
          overflowWrap: "break-word",
          textDecoration: `${task.finished === true ? "line-through" : ""}`,
        }}
      >
        {task.name}
      </td>
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
      finished: false,
    };

    onAddTask(newTask);

    setText("");
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
