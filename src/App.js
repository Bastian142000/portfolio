import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarPortfolio from "./components/NavbarPortfolio/NavbarPortfolio.js";
import AboutMe from "./components/AboutMe/AboutMe.js";
import SkillList from "./components/SkillList/SkillList.js";
import MyProjects from "./components/MyProjects/MyProjects.js";
import ToDoList from "./components/MyProjects/ToDoList/ToDoList.js";

export default function App() {
  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <NavbarPortfolio />
        </header>
        <div className="app-body">
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/skills" element={<SkillList />} />
            <Route path="/projects" element={<MyProjects />} />
            <Route path="/projects/to-do-list" element={<ToDoList />} />
          </Routes>
        </div>
        <footer className="app-footer"></footer>
      </div>
    </Router>
  );
}
