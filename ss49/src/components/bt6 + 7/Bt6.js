"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
require("./bt6.css");
function Bt6() {
    return (<>
          <nav style={{ display: "flex", gap: "20px" }}>
            <react_router_dom_1.NavLink to="/BT6/home1">home</react_router_dom_1.NavLink>
            <react_router_dom_1.NavLink to="/Bt6/contact1">contact</react_router_dom_1.NavLink>
          </nav>
          <react_router_dom_1.Outlet></react_router_dom_1.Outlet>
    </>);
}
exports.default = Bt6;
