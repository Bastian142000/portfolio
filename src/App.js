import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarPortfolio from "./components/NavbarPortfolio/NavbarPortfolio.js";
import AboutMe from "./components/AboutMe/AboutMe.js";
import SkillList from "./components/SkillList/SkillList.js";

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
          </Routes>
        </div>
        <footer className="app-footer"></footer>
      </div>
    </Router>
  );
}




