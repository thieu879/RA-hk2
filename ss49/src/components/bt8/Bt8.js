"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
require("./Bt8.css");
function Bt8() {
    return (<div>
        <nav style={{ display: "flex", gap: "20px" }}>
            <react_router_dom_1.NavLink to="/BT8/admin">Admin</react_router_dom_1.NavLink>
            <react_router_dom_1.NavLink to="/Bt8/account">Account</react_router_dom_1.NavLink>
            <react_router_dom_1.NavLink to="/Bt8/product">Product</react_router_dom_1.NavLink>
          </nav>
          <react_router_dom_1.Outlet></react_router_dom_1.Outlet>
    </div>);
}
exports.default = Bt8;
