"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function Bt1() {
    let arr = ["HTML", "CSS", "Javascipt", "ReactJS"];
    return (<>
      BT1:
      <div>
        <h2>Danh sách khoá học</h2>
        <ol>
          {arr.map((item) => {
            return <li>{item}</li>;
        })}
        </ol>
      </div>
    </>);
}
exports.default = Bt1;
