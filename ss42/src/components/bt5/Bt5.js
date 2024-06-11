"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
const Alert_1 = __importDefault(require("react-bootstrap/Alert"));
function Bt5() {
    const [show, setShow] = (0, react_2.useState)(true);
    return (<div>
        Bt5:
        <br />
        <Alert_1.default show={show} variant="success">
            <p>Thêm Tài Khoản Thành Công</p>
        </Alert_1.default>
        <Alert_1.default show={show} variant="danger">
            <p>Thêm Tài Khoản Thất Bại</p>
        </Alert_1.default>
        <Alert_1.default show={show} variant="warning">
            <p>Tên Không Được để trống</p>
        </Alert_1.default>

    </div>);
}
exports.default = Bt5;
