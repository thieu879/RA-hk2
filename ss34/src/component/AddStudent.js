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
require("./AddStudent.css");
function AddStudent() {
    const [students, SetStudents] = (0, react_1.useState)({
        StudentID: "",
        name: "",
        date: "",
        email: "",
        status: true,
        action: ""
    });
    const [modalVisible, setModalVisible] = (0, react_1.useState)(false);
    const clickAddStudent = () => {
        setModalVisible(true);
    };
    const closeModal = () => {
        setModalVisible(false);
    };
    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        SetStudents(Object.assign(Object.assign({}, students), { [name]: value }));
    };
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
        window.location.reload();
        closeModal();
    };
    return (<>
          <button onClick={clickAddStudent}>Thêm mới sinh viên</button>
          
          {modalVisible ? (<div id='modal1' className='modalAddStudent'>
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
                        <input onChange={handleInput} name='StudentID' type="text"/><br />
                        <label htmlFor="">Tên Sinh Viên:</label><br />
                        <input onChange={handleInput} name='name' type="text"/><br />
                        <label htmlFor="">Ngày sinh:</label><br />
                        <input onChange={handleInput} name='date' type="date"/><br />
                        <label htmlFor="">Email:</label><br />
                        <input onChange={handleInput} name='email' type="date"/>
                  </div>
                  <div>
                    <button onClick={handleAddElement}>Thêm Mới</button>
                  </div>
                </div>) : null}
          
      </>);
}
exports.default = AddStudent;
