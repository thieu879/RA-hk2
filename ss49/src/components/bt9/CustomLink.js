"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
function CustomLink() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const handleClick = (event) => {
        event.preventDefault();
        const url = window.location.origin + "/home-page";
        if (window.location.href === url) {
            navigate("/home-page");
        }
        else {
            navigate("/not-found");
        }
    };
    return (<>
      <react_router_dom_1.Link to="/home-page" onClick={handleClick}>
      Go to Home Page
    </react_router_dom_1.Link>
    </>);
}
exports.default = CustomLink;
