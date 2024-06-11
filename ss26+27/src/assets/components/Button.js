"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function Button() {
    return (<div className='buttonList'>
        <button className='update'>Sửa</button>
        <button className='delete'>Xóa</button>
    </div>);
}
exports.default = Button;
