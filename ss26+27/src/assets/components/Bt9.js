"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Button_1 = __importDefault(require("./Button"));
require("./Bt9.css");
let infoList = [
    {
        stt: 1,
        name: "Nguyễn Gia Thiều ",
        date: "11/02/2005",
        sex: "Nam",
        address: "Nhà"
    },
    {
        stt: 2,
        name: "Nguyễn Gia Vải",
        date: "11/02/2005",
        sex: "Nam",
        address: "Ngoài đường"
    }
];
function Bt9() {
    return (<>
      Bt9:
      <table className='table'>
            <tr className='thead'>
                <td>STT</td>
                <td>Họ và tên</td>
                <td>Ngày sinh</td>
                <td>Giới tính</td>
                <td>Địa chỉ</td>
                <td>Hành động</td>
            </tr>
            {infoList.map((info, index) => (<tr key={index}>
                    <td>{info.stt}</td>
                    <td>{info.name}</td>
                    <td>{info.date}</td>
                    <td>{info.sex}</td>
                    <td>{info.address}</td>
                    <td><Button_1.default></Button_1.default></td>
                </tr>))}
        </table>
    </>);
}
exports.default = Bt9;
