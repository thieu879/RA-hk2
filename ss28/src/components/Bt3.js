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
function Bt3() {
    // Khởi tạo state chứa danh sách users
    const [users, setUsers] = (0, react_1.useState)([
        { id: 1, name: 'Nguyễn Gia Thiều', address: 'Nam Định' },
        { id: 2, name: 'Gia Vải', address: 'Nhà' },
    ]);
    return (<>
      Bt3:
      <ul>
        {/* Sử dụng hàm map để render danh sách users */}
        {users.map(user => (<li key={user.id}>
            <b>ID:</b> {user.id}, <b>Name:</b> {user.name}, <b>Address:</b> {user.address}
          </li>))}
      </ul>
    </>);
}
exports.default = Bt3;
