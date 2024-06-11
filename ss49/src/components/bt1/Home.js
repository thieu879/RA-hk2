"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
function Home() {
    return (<div>
      <div>Trang chủ nè</div>
      <div style={{ display: "flex", gap: "10px" }}>
        <react_router_dom_1.Link to="/">Home</react_router_dom_1.Link>
        <react_router_dom_1.Link to="/contact">contact</react_router_dom_1.Link>
        <react_router_dom_1.Link to="/login">login</react_router_dom_1.Link>
        <react_router_dom_1.Link to="/register">register</react_router_dom_1.Link>
        <react_router_dom_1.Link to="/customlink">
          Nhấn để sang bài 9
        </react_router_dom_1.Link>
      </div>
        <react_router_dom_1.Outlet></react_router_dom_1.Outlet>
    </div>);
}
exports.default = Home;
