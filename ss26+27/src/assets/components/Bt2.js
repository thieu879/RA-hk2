"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function Bt2() {
    let a = 10;
    let b = 10;
    function Sum(a, b) {
        return a + b;
    }
    function Subtraction(a, b) {
        return a - b;
    }
    function multiplication(a, b) {
        return a * b;
    }
    function division(a, b) {
        return a / b;
    }
    return (<>
        BT2:
        <div>
        <h2>Danh sách kết quả</h2>
        <ul>
          <li>
          {a} + {b} = {Sum(a, b)}
          </li>
          <li>
          {a} - {b} = {Subtraction(a, b)}
          </li>
          <li>
          {a} * {b} = {multiplication(a, b)}
          </li>
          <li>
          {a} / {b} = {division(a, b)}
          </li>
        </ul>
        </div>
      </>);
}
exports.default = Bt2;
