import React, { useState } from 'react'
import "./AddStudent.css"
interface Students{
    StudentID: string,
    name: string,
    date: string,
    email: string,
    status: boolean,
    action: string
}
export default function AddStudent() {
    const [students, SetStudents] = useState<Students>({
        StudentID: "",
        name: "",
        date: "",
        email: "",
        status: true,
        action: ""
    })
    const [modalVisible, setModalVisible] = useState<boolean>(false)
    
    const clickAddStudent = () => {
        setModalVisible(true);
    }

    const closeModal = () => {
        setModalVisible(false);
    }
    const handleInput = (e:React.ChangeEvent<HTMLInputElement>) => {
        let name = e.target.name;
        let value = e.target.value
        SetStudents({...students,[name]:value})
    }
    const handleAddElement = () => {
        const storedStudents = JSON.parse(localStorage.getItem('students') || '[]');
        const updatedStudents = [...storedStudents, students];
        localStorage.setItem('students', JSON.stringify(updatedStudents));
        SetStudents({
            StudentID: "",
            name: "",
            date: "",
            email: "",
            status: true,
            action: ""
        });
        window.location.reload()
        closeModal();
    }
  return (
      <>
          <button onClick={clickAddStudent}>Thêm mới sinh viên</button>
          
          {modalVisible ? (
                <div id='modal1' className='modalAddStudent'>
                    <div className='headerModel'>
                        <div>
                            <h3>Thêm mới sinh viên</h3>
                        </div>
                        <div>
                            <button onClick={closeModal}><i className="fa-solid fa-xmark"></i></button>
                        </div>
                    </div>  
                    <div className='inputStudent'>
                        <label htmlFor="">Mã Sinh Viên:</label><br />
                        <input onChange={handleInput} name='StudentID' type="text" /><br />
                        <label htmlFor="">Tên Sinh Viên:</label><br />
                        <input onChange={handleInput} name='name' type="text" /><br />
                        <label htmlFor="">Ngày sinh:</label><br />
                        <input onChange={handleInput} name='date' type="date" /><br />
                        <label htmlFor="">Email:</label><br />
                        <input onChange={handleInput} name='email' type="date" />
                  </div>
                  <div>
                    <button onClick={handleAddElement}>Thêm Mới</button>
                  </div>
                </div>
            ) : null}
          
      </>
  )
}
