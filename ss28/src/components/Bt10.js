"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
require("./Bt10.css");
class Bt10 extends react_1.Component {
    constructor(props) {
        super(props);
        this.state = [
            {
                id: Math.floor(Math.random() * 100000),
                name: 'Thiết kế giao diện header ',
                assign: 'Nguyễn Văn A',
                status: false,
                date: '21/03/2024 13:12:12'
            },
            {
                id: Math.floor(Math.random() * 100000),
                name: 'Thiết kế giao diện fooder',
                assign: 'Nguyễn Văn B',
                status: true,
                date: '21/03/2024 15:10:50'
            }
        ];
    }
    checkStatus(value) {
        if (value) {
            return 'button done';
        }
        return 'button notDone';
    }
    render() {
        return (<>
        <table>
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên công việc</th>
              <th>Người thực hiện</th>
              <th>Trạng thái</th>
              <th>Thời gian tạo</th>
              <th colSpan={2}>Chức năng</th>
            </tr>
          </thead>
          <tbody>
            {this.state.map((item, index) => {
                return (<tr key={item.id}>
                <td>{index + 1}</td>  
                <td>{item.name}</td>
                <td>{item.assign}</td>
                <td><button className={this.checkStatus(item.status)}>{item.status ? 'Hoàn Thành' : 'Chưa Hoàn Thành'}</button></td>
                <td>{item.date}</td>
                <td>
                  <button className='edit'>Sửa</button>
                  <button className='delete'>Xóa</button>
                </td>
              </tr>);
            })}
          </tbody>
        </table>
      </>);
    }
}
exports.default = Bt10;
