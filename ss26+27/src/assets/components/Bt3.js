"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function Bt3() {
    let user = {
        name: "Nguyễn Văn A",
        gen: "Nam",
        birthday: "06/03/2024",
        email: "nva@gmail.com",
        address: "Thanh Xuân, Hà Nội"
    };
    return (<>
          BT3:
          <h2>Thông tin cá nhân</h2>
          <div>
              <ul>
                  <li>
                      Họ và tên: <b>{user.name}</b>
                  </li>
                  <li>
                      Giới tính: <b>{user.gen}</b>
                  </li>
                  <li>
                      Ngày Sinh: <b>{user.birthday}</b>
                  </li>
                  <li>
                      Email: <b>{user.email}</b>
                  </li>
                  <li>
                      Địa chỉ: <b>{user.address}</b>
                  </li>
              </ul>
          </div>
      </>);
}
exports.default = Bt3;
