"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Dropdown_1 = __importDefault(require("react-bootstrap/Dropdown"));
const DropdownButton_1 = __importDefault(require("react-bootstrap/DropdownButton"));
function Bt4() {
    return (<div>
        Bt4:
        <br />
        <DropdownButton_1.default id="dropdown-item-button" title="Dropdown button">
            <Dropdown_1.default.ItemText>Dropdown item text</Dropdown_1.default.ItemText>
            <Dropdown_1.default.Item as="button">Action</Dropdown_1.default.Item>
            <Dropdown_1.default.Item as="button">Another action</Dropdown_1.default.Item>
            <Dropdown_1.default.Item as="button">Something else</Dropdown_1.default.Item>
        </DropdownButton_1.default>
    </div>);
}
exports.default = Bt4;
