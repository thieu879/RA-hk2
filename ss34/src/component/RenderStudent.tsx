import React, { useState } from 'react';

interface Students {
    StudentID: string;
    name: string;
    date: string;
    email: string;
    status: boolean;
    action: string;
}

export default function RenderStudent() {
    const [students, setStudents] = useState<Students[]>(() => {
        const data = localStorage.getItem("students");
        return data ? JSON.parse(data) : [];
    });

    const [editingStudent, setEditingStudent] = useState<Students | null>(null);

    const handleBlock = (id: string) => {
        const updatedStudents = students.map(student => {
            if (student.StudentID === id) {
                return { ...student, status: !student.status };
            }
            return student;
        });
        setStudents(updatedStudents);
        localStorage.setItem('students', JSON.stringify(updatedStudents));
    }

    const handleDelete = (id: string) => {
        const deleteStudent = students.filter(student => student.StudentID !== id);
        setStudents(deleteStudent);
        console.log(deleteStudent);
        
        localStorage.setItem('students', JSON.stringify(deleteStudent));
    }

    const handleEdit = (id: string) => {
        const studentToEdit = students.find(student => student.StudentID === id);
        if (studentToEdit) {
            setEditingStudent(studentToEdit);
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (editingStudent) {
            const { name, value } = e.target;
          setEditingStudent({ ...editingStudent, [name]: value });
        }
    }

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
    }

    return (
        <>
            {students.map((student, index) => (
                <tr key={student.StudentID}>
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
                </tr>
            ))}
            {editingStudent && (
                <div className='inputStudent'>
                    <label htmlFor="">Mã Sinh Viên:</label><br />
                    <input name='StudentID' type="text" value={editingStudent.StudentID} onChange={handleInputChange} /><br />
                    <label htmlFor="">Tên Sinh Viên:</label><br />
                    <input name='name' type="text" value={editingStudent.name} onChange={handleInputChange} /><br />
                    <label htmlFor="">Ngày sinh:</label><br />
                    <input name='date' type="date" value={editingStudent.date} onChange={handleInputChange} /><br />
                    <label htmlFor="">Email:</label><br />
                    <input name='email' type="email" value={editingStudent.email} onChange={handleInputChange} /><br />
                    <button onClick={handleSaveEdit}>Lưu</button>
                </div>
            )}
        </>
    );
}
