"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Toast_1 = __importDefault(require("react-bootstrap/Toast"));
function Bt7() {
    return (<div>
        Bt7:
        <br />
        <Toast_1.default>
            <Toast_1.default.Header>
                <img src="holder.js/20x20?text=%20" className="rounded me-2" alt=""/>
                <strong className="me-auto">Cảnh báo</strong>
            </Toast_1.default.Header>
            <Toast_1.default.Body>Lỗi kết nối máy chủ</Toast_1.default.Body>
        </Toast_1.default>
    </div>);
}
exports.default = Bt7;
