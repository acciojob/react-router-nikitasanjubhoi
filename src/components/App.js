import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./../styles/App.css";

// ✅ Home Component
const Home = () => {
  return <h1>Welcome to my website!</h1>;
};

// ✅ About Component
const About = () => {
  return <h1>This is a sample React Router program.</h1>;
};

// ✅ Navigation Component
const Navigation = () => {
  return (
    <nav style={{ marginBottom: "20px" }}>
      <Link to="/" style={{ marginRight: "15px" }}>
        Home
      </Link>
      <Link to="/about">About</Link>
    </nav>
  );
};

// ✅ Main App Component
const App = () => {
  return (
    <div>
      {/* Do not remove the main div */}
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

