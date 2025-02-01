import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home"; // Importing the Home component

function App() {
  return (
    <Router basename="/full-stack-task-management-app"> {/* Base URL for GitHub Pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* You can add more routes here as needed */}
      </Routes>
    </Router>
  );
}

export default App;
