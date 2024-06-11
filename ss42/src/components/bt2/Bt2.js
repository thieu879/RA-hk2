"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Form_1 = __importDefault(require("react-bootstrap/Form"));
const InputGroup_1 = __importDefault(require("react-bootstrap/InputGroup"));
function Bt2() {
    return (<div>
        Bt2:
        <br />
        <InputGroup_1.default size="sm" className="mb-3">
        <InputGroup_1.default.Text id="inputGroup-sizing-sm">Small</InputGroup_1.default.Text>
        <Form_1.default.Control aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
      </InputGroup_1.default>
      <br />
      <InputGroup_1.default className="mb-3">
        <InputGroup_1.default.Text id="inputGroup-sizing-default">
          Default
        </InputGroup_1.default.Text>
        <Form_1.default.Control aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
      </InputGroup_1.default>
      <br />
      <InputGroup_1.default size="lg">
        <InputGroup_1.default.Text id="inputGroup-sizing-lg">Large</InputGroup_1.default.Text>
        <Form_1.default.Control aria-label="Large" aria-describedby="inputGroup-sizing-sm"/>
      </InputGroup_1.default>
    </div>);
}
exports.default = Bt2;
