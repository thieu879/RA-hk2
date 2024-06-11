"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const About_1 = __importDefault(require("./components/bt3/About"));
const Contact2_1 = __importDefault(require("./components/bt3/Contact2"));
const Home2_1 = __importDefault(require("./components/bt3/Home2"));
function App() {
    return (<>
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
      <nav style={{ zIndex: "10" }}>
        <react_router_dom_1.NavLink to="/" style={{ marginRight: "10px", zIndex: "1" }}>
          Home
        </react_router_dom_1.NavLink>
        <react_router_dom_1.NavLink to="/about" style={{ marginRight: "10px" }}>
          About
        </react_router_dom_1.NavLink>
        <react_router_dom_1.NavLink to="/contact" style={{ marginRight: "10px" }}>
          Contact
        </react_router_dom_1.NavLink>
      </nav>
      <br />
      <br />
      <react_router_dom_1.Routes>
        <react_router_dom_1.Route path="/" element={<Home2_1.default />}/>
        <react_router_dom_1.Route path="/about" element={<About_1.default />}/>
        <react_router_dom_1.Route path="/contact" element={<Contact2_1.default />}/>
      </react_router_dom_1.Routes>
    </>);
}
exports.default = App;
