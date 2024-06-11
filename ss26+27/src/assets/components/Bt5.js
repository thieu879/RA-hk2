"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function Bt5() {
    return (<>
      BT5:
      <div style={{ display: "flex", gap: "20px" }}>
        <div style={{ backgroundColor: "red", width: "200px", height: "200px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          box1
        </div>
        <div style={{ backgroundColor: "blue", width: "200px", height: "200px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          box2
        </div>
        <div style={{ backgroundColor: "green", width: "200px", height: "200px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          box3
        </div>
      </div>
    </>);
}
exports.default = Bt5;
