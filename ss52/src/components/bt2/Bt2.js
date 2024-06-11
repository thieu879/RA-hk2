"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
function Bt2() {
    return (<div>
        <div>
            <react_router_dom_1.Link to="home1">Home</react_router_dom_1.Link>
            <react_router_dom_1.Link to="about1">About</react_router_dom_1.Link>
            <react_router_dom_1.Link to="contact1">Contact</react_router_dom_1.Link>
          </div>
          <react_router_dom_1.Outlet></react_router_dom_1.Outlet>
    </div>);
}
exports.default = Bt2;
