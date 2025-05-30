import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./Pages/Product";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>

    <h1>COBA</h1>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kuliner" element={<Product />} />
          <Route path="/tentang" element={<About />} />
          <Route path="/kontak" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
