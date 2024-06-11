"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ChildOfBt7_1 = __importDefault(require("./ChildOfBt7"));
function bt7() {
    const posts = [
        { id: 1, title: "số", content: "1234", author: "Thiều" },
        { id: 2, title: "chữ", content: "abcd", author: "Vải" },
    ];
    return (<div>bt7:
          <ChildOfBt7_1.default posts={posts}></ChildOfBt7_1.default>
    </div>);
}
exports.default = bt7;
