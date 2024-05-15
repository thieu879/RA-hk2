import React, { useState } from 'react';

interface Students {
    StudentID: string;
    name: string;
    date: string;
    email: string;
    status: boolean;
    action: string;
}

const FindStudent: React.FC = () => {
    const [findStudent, setFindStudent] = useState<string>("");
    const [filteredStudents, setFilteredStudents] = useState<Students[]>([]);
    const [students, setStudents] = useState<Students[]>(() => {
        const data = localStorage.getItem("students");
        return data ? JSON.parse(data) : [];
    });

    const handleFind = (e:React.ChangeEvent<HTMLInputElement>) => {
        const searchValue = e.target.value;
        setFindStudent(searchValue);

        const filtered = students.filter(student => student.name.toLowerCase().includes(searchValue.toLowerCase()));
        setFilteredStudents(filtered);
    };

    return (
        <>
            <label htmlFor="searchInput">Tìm kiếm: </label>
            <input id="searchInput" onChange={handleFind} type="text" />

            {filteredStudents.map((student, index) => (
                <div key={index}>
                    <p>Mã Sinh Viên: {student.StudentID}</p>
                    <p>Tên Sinh Viên: {student.name}</p>
                    <p>Ngày Sinh: {student.date}</p>
                    <p>Email: {student.email}</p>
                    <p>Trạng Thái: {student.status ? "Hoạt động" : "Không hoạt động"}</p>
                </div>
            ))}
        </>
    );
}

export default FindStudent;
