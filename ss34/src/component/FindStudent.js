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
const FindStudent = () => {
    const [findStudent, setFindStudent] = (0, react_1.useState)("");
    const [filteredStudents, setFilteredStudents] = (0, react_1.useState)([]);
    const [students, setStudents] = (0, react_1.useState)(() => {
        const data = localStorage.getItem("students");
        return data ? JSON.parse(data) : [];
    });
    const handleFind = (e) => {
        const searchValue = e.target.value;
        setFindStudent(searchValue);
        const filtered = students.filter(student => student.name.toLowerCase().includes(searchValue.toLowerCase()));
        setFilteredStudents(filtered);
    };
    return (<>
            <label htmlFor="searchInput">Tìm kiếm: </label>
            <input id="searchInput" onChange={handleFind} type="text"/>

            {filteredStudents.map((student, index) => (<div key={index}>
                    <p>Mã Sinh Viên: {student.StudentID}</p>
                    <p>Tên Sinh Viên: {student.name}</p>
                    <p>Ngày Sinh: {student.date}</p>
                    <p>Email: {student.email}</p>
                    <p>Trạng Thái: {student.status ? "Hoạt động" : "Không hoạt động"}</p>
                </div>))}
        </>);
};
exports.default = FindStudent;
