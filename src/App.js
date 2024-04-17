import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "components/Navbar/Navbar";
import LoginPage from "pages/LogInPage/LogIn";

function App() {
  const Home = () => {
    return (
      <div style={{ backgroundColor: "#E0E0E0" }}>
        <h2>Home Page</h2>
        {Array.from({ length: 100 }, (_, i) => (
          <div key={i + 1}>{i + 1}</div>
        ))}
      </div>
    );
  };
  const About = () => <h2>About Page</h2>;
  const Contact = () => <h2>Contact Page</h2>;

  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auth" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
