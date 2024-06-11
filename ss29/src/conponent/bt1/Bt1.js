"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function Bt1() {
    const clickMe = () => {
        console.log("Clicked");
    };
    return (<div>Bt1:
          <br />
        <button onClick={clickMe}>Click me</button>    
    </div>);
}
exports.default = Bt1;
