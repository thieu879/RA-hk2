"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
function RenderUser() {
    const location = (0, react_router_dom_1.useLocation)();
    const user = location.state;
    return (<div>
            <ul style={{ border: "2px black solid", padding: "10px", width: "150px" }}>
                <li>{user.id}</li>
                <li>{user.name}</li>
                <li>{user.email}</li>
                <li>{user.address}</li>
                <button>bấm đi mà</button>
            </ul>
        </div>);
}
exports.default = RenderUser;
