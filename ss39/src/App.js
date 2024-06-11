"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Students_1 = __importDefault(require("./components/Students"));
function App() {
    return (<div>
      <Students_1.default></Students_1.default>
    </div>);
}
exports.default = App;
