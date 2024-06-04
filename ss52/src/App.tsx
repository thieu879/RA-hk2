import { NavLink, Route, Routes } from "react-router-dom";
import About2 from "./components/bt3/About";
import Contact2 from "./components/bt3/Contact2";
import Home2 from "./components/bt3/Home2";
import Home from "./components/bt1/Home";
import About from "./components/bt1/About";
import Contact from "./components/bt1/Contact";
function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav> */}
      <nav style={{zIndex:"10"}}>
        <NavLink to="/" style={{ marginRight: "10px",zIndex:"1" }}>
          Home
        </NavLink>
        <NavLink to="/about" style={{ marginRight: "10px" }}>
          About
        </NavLink>
        <NavLink to="/contact" style={{ marginRight: "10px" }}>
          Contact
        </NavLink>
      </nav>
      <br />
      <br />
      <Routes>
        <Route path="/" element={<Home2 />} />
        <Route path="/about" element={<About2 />} />
        <Route path="/contact" element={<Contact2 />} />
      </Routes>
    </>
  );
}

export default App;
