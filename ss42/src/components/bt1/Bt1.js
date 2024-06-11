"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Button_1 = __importDefault(require("react-bootstrap/Button"));
function Bt1() {
    return (<div>
        Bt1:
        <br />
        <Button_1.default variant="primary">Lưu</Button_1.default>{' '}
        <Button_1.default variant="secondary">Huỷ</Button_1.default>{' '}
        <Button_1.default variant="success">Thành công</Button_1.default>{' '}
        <Button_1.default variant="warning">Cảnh báo</Button_1.default>{' '}
        <Button_1.default variant="danger">Báo Lỗi</Button_1.default>{' '}
        <Button_1.default variant="info">Thông tin</Button_1.default>{' '}
        <Button_1.default variant="link">Đường dẫn</Button_1.default>
    </div>);
}
exports.default = Bt1;
