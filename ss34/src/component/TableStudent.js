"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const RenderStudent_1 = __importDefault(require("./RenderStudent"));
function TableStudent() {
    return (<div>
            TableStudent:
            <table border={1}>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>MÃ Sinh Viên</th>
                        <th>Tên Sinh Viên</th>
                        <th>Ngày Sinh</th>
                        <th>Email</th>
                        <th>Trạng Thái</th>
                        <th>Chức Năng</th>
                    </tr>
                </thead>
                <tbody>
                    <RenderStudent_1.default></RenderStudent_1.default>
                </tbody>
            </table>
        </div>);
}
exports.default = TableStudent;
