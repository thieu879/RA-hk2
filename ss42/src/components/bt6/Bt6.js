"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Spinner_1 = __importDefault(require("react-bootstrap/Spinner"));
function Bt6() {
    return (<div>
        Bt6:
        <br />
        <Spinner_1.default animation="border" variant="primary"/>
        <Spinner_1.default animation="border" variant="secondary"/>
        <Spinner_1.default animation="border" variant="success"/>
    </div>);
}
exports.default = Bt6;
