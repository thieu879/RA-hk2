"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
function Bt10() {
    const users = [
        {
            id: 1,
            name: "Nguyễn Văn A",
            email: "nva@gmail.com",
            address: "Hà Nội"
        },
        {
            id: 2,
            name: "Nguyễn Văn B",
            email: "nvb@gmail.com",
            address: "Hà Nội"
        },
        {
            id: 3,
            name: "Nguyễn Văn C",
            email: "nvc@gmail.com",
            address: "Hà Nội"
        },
    ];
    const navigate = (0, react_router_dom_1.useNavigate)();
    const handleClick = (user) => {
        navigate("/Bt10/renderUser", { state: user });
    };
    return (<div>
            <ul style={{ display: "flex", gap: "20px" }}>
                {users.map((item) => {
            return (<div key={item.id} style={{ border: "2px black solid", padding: "10px" }}>
                                <li>{item.id}</li>
                                <li>{item.name}</li>
                                <li>{item.email}</li>
                                <li>{item.address}</li>
                                <button onClick={() => handleClick(item)}>bấm đi mà</button>
                            </div>);
        })}
            </ul>
        </div>);
}
exports.default = Bt10;
