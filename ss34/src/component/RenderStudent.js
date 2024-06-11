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
function RenderStudent() {
    const [students, setStudents] = (0, react_1.useState)(() => {
        const data = localStorage.getItem("students");
        return data ? JSON.parse(data) : [];
    });
    const [editingStudent, setEditingStudent] = (0, react_1.useState)(null);
    const handleBlock = (id) => {
        const updatedStudents = students.map(student => {
            if (student.StudentID === id) {
                return Object.assign(Object.assign({}, student), { status: !student.status });
            }
            return student;
        });
        setStudents(updatedStudents);
        localStorage.setItem('students', JSON.stringify(updatedStudents));
    };
    const handleDelete = (id) => {
        const deleteStudent = students.filter(student => student.StudentID !== id);
        setStudents(deleteStudent);
        console.log(deleteStudent);
        localStorage.setItem('students', JSON.stringify(deleteStudent));
    };
    const handleEdit = (id) => {
        const studentToEdit = students.find(student => student.StudentID === id);
        if (studentToEdit) {
            setEditingStudent(studentToEdit);
        }
    };
    const handleInputChange = (e) => {
        if (editingStudent) {
            const { name, value } = e.target;
            setEditingStudent(Object.assign(Object.assign({}, editingStudent), { [name]: value }));
        }
    };
    const handleSaveEdit = () => {
        if (editingStudent) {
            const updatedStudents = students.map(student => {
                if (student.StudentID === editingStudent.StudentID) {
                    return editingStudent;
                }
                return student;
            });
            console.log(updatedStudents);
            setStudents(updatedStudents);
            setEditingStudent(null);
            localStorage.setItem('students', JSON.stringify(updatedStudents));
        }
    };
    return (<>
            {students.map((student, index) => (<tr key={student.StudentID}>
                    <td>{index + 1}</td>
                    <td>{student.StudentID}</td>
                    <td>{student.name}</td>
                    <td>{student.date}</td>
                    <td>{student.email}</td>
                    <td>{student.status ? "Đang Hoạt Động" : "Ngừng Hoạt động"}</td>
                    <td>
                        <button onClick={() => handleBlock(student.StudentID)}>
                            {student.status ? "Chặn" : "Bỏ Chặn"}
                        </button>
                        <button onClick={() => handleEdit(student.StudentID)}>Sửa</button>
                        <button onClick={() => handleDelete(student.StudentID)}>Xoá</button>
                    </td>
                </tr>))}
            {editingStudent && (<div className='inputStudent'>
                    <label htmlFor="">Mã Sinh Viên:</label><br />
                    <input name='StudentID' type="text" value={editingStudent.StudentID} onChange={handleInputChange}/><br />
                    <label htmlFor="">Tên Sinh Viên:</label><br />
                    <input name='name' type="text" value={editingStudent.name} onChange={handleInputChange}/><br />
                    <label htmlFor="">Ngày sinh:</label><br />
                    <input name='date' type="date" value={editingStudent.date} onChange={handleInputChange}/><br />
                    <label htmlFor="">Email:</label><br />
                    <input name='email' type="email" value={editingStudent.email} onChange={handleInputChange}/><br />
                    <button onClick={handleSaveEdit}>Lưu</button>
                </div>)}
        </>);
}
exports.default = RenderStudent;
