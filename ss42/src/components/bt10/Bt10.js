"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Table_1 = __importDefault(require("react-bootstrap/Table"));
const Button_1 = __importDefault(require("react-bootstrap/Button"));
function Bt10() {
    return (<div>
        Bt10:
        <br />
        <Table_1.default responsive="sm">
        <thead>
          <tr>
            <th>STT</th>
            <th>Họ Và Tên</th>
            <th>Giới Tính</th>
            <th>Ngày Sinh</th>
            <th>Email</th>
            <th>Địa chỉ</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Nguyễn Văn A</td>
            <td>Nam</td>
            <td>01/01/1990</td>
            <td>nguyenvana@gmail.com</td>
            <td>Hà Nội</td>
            <td>
                <Button_1.default variant="warning">Sửa</Button_1.default>{' '}
                <Button_1.default variant="danger">Xoá</Button_1.default>{' '}
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Nguyễn Văn A</td>
            <td>Nam</td>
            <td>01/01/1990</td>
            <td>nguyenvana@gmail.com</td>
            <td>Hà Nội</td>
            <td>
                <Button_1.default variant="warning">Sửa</Button_1.default>{' '}
                <Button_1.default variant="danger">Xoá</Button_1.default>{' '}
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Nguyễn Văn A</td>
            <td>Nam</td>
            <td>01/01/1990</td>
            <td>nguyenvana@gmail.com</td>
            <td>Hà Nội</td>
            <td>
                <Button_1.default variant="warning">Sửa</Button_1.default>{' '}
                <Button_1.default variant="danger">Xoá</Button_1.default>{' '}
            </td>
          </tr>
        </tbody>
      </Table_1.default>
    </div>);
}
exports.default = Bt10;
