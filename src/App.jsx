import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Shop from "./components/Shop/Shop";

const App = () => {
  return (
    <Router>
      <Header /> {/* Header always visible */}
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </div>
      <Footer /> {/* Footer always visible */}
    </Router>
  );
};

export default App;
