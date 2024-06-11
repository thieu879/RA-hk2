"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const AddStudent_1 = __importDefault(require("./AddStudent"));
const TableStudent_1 = __importDefault(require("./TableStudent"));
const FindStudent_1 = __importDefault(require("./FindStudent"));
function Form() {
    return (<div>
          Quản lý Sinh Viên:
          <br />
      <AddStudent_1.default></AddStudent_1.default>
      <br />
      <FindStudent_1.default></FindStudent_1.default>
      <TableStudent_1.default></TableStudent_1.default>
      
      </div>);
}
exports.default = Form;
