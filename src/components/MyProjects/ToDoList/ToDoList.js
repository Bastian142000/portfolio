import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import "./ToDoList.css";
import { useRef, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RiEdit2Line } from "react-icons/ri";


const defaultTasks = [
  {
    id: 1,
    name: "Do the dishes and broom the living room",
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
    name: "Read 15 pages of a book",
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

  function handleDeleteTask(id) {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  }

  function handleEditTask(id, newName) {
    setTasks((tasks) =>
      tasks.map((task) => (task.id === id ? { ...task, name: newName } : task))
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
          <List tasks={tasks} onToggleTask={handleToggleTask} onDeleteTask={handleDeleteTask} onEditTask={handleEditTask} />
        </Col>
      </Row>
    </Container>
  );
}

function List({ tasks, onToggleTask, onDeleteTask, onEditTask }) {
  const sortedTasks = tasks.sort((a, b) => {
    if (a.finished && !b.finished) return 1;
    if (!a.finished && b.finished) return -1;
    return a.name.localeCompare(b.name);
  });

  return (
    <Table hover id="task-table">
      <tbody id="task-list">
        {sortedTasks.map((task) => (
          <Task key={task.id} task={task} onToggleTask={onToggleTask} onDeleteTask={onDeleteTask} onEditTask={onEditTask} />
        ))}
      </tbody>
    </Table>
  );
}

function Task({ task, onToggleTask, onDeleteTask, onEditTask }) {
  const checkboxRef = useRef(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.name);

  return (
    <tr>
      <td>
        <label className="checkbox-container">
          <input
            type="checkbox"
            value={task.finished}
            onChange={() => onToggleTask(task.id)}
            id="custom-checkbox"
            ref={checkboxRef}
          ></input>
          <span className="checkmark"></span>
        </label>
      </td>
      <td
        style={{
          maxWidth: "18rem",
          width: "18rem",
          overflowWrap: "break-word",
        }}
        id="task-name"
      >
        {isEditing ? (
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              if (!editText.trim()) {
                onDeleteTask(task.id);
              } else {
                onEditTask(task.id, editText);
              }
              setIsEditing(false);
            }}
            id="edit-form"
          >
            <Form.Control
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              autoFocus
              id="edit-form"
            />
          </Form>
        ) : (
          <span
            onClick={() => checkboxRef.current.click()}
            style={{
              textDecoration: `${task.finished === true ? "line-through" : ""}`,
              opacity: `${task.finished === true ? "60%" : ""}`,
            }}
          >
            {task.name}
          </span>
        )}
      </td>
      <td>
        <RiEdit2Line
          id="edit-icon"
          onClick={() => setIsEditing(!isEditing)}
        />
        <RiDeleteBin6Line id="delete-icon" onClick={() => onDeleteTask(task.id)} />
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