"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ChildOfBt6_1 = __importDefault(require("./ChildOfBt6"));
function bt6() {
    const user = [
        { id: 1, name: 'Nguyễn Gia Thiều', address: 'Nam Định', email: "ngt@gmail.com" },
        { id: 2, name: 'Nguyễn Gia Vải', address: 'Nam Định', email: "ngt@gmail.com" },
    ];
    return (<div>bt6:
          <ChildOfBt6_1.default users={user}></ChildOfBt6_1.default>
    </div>);
}
exports.default = bt6;
