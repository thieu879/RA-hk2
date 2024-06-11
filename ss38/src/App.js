"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const TodoList_1 = __importDefault(require("./components/TodoList"));
function App() {
    return (<div>
      <TodoList_1.default></TodoList_1.default>
    </div>);
}
exports.default = App;
