"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Admin_1 = __importDefault(require("./components/admin/Admin"));
function App() {
    return (<div>
      {/* <Login></Login> */}
      <Admin_1.default></Admin_1.default>
    </div>);
}
exports.default = App;
