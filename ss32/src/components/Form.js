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
const Form = () => {
    const [inputValue, setInputValue] = (0, react_1.useState)('');
    const [tasks, setTasks] = (0, react_1.useState)([]);
    const [editIndex, setEditIndex] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            setTasks(JSON.parse(storedTasks));
        }
    }, []);
    const inputValueHandler = (e) => {
        setInputValue(e.target.value);
    };
    const clickHandler = () => {
        if (inputValue.trim() !== '') {
            const newTasks = [...tasks, inputValue];
            setTasks(newTasks);
            localStorage.setItem('tasks', JSON.stringify(newTasks));
            setInputValue('');
        }
    };
    const deleteValue = (index) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
            if (willDelete) {
                swal("Poof! Your imaginary file has been deleted!", {
                    icon: "success",
                });
                const updatedTasks = [...tasks];
                updatedTasks.splice(index, 1);
                setTasks(updatedTasks);
                localStorage.setItem('tasks', JSON.stringify(updatedTasks));
            }
        });
    };
    const editValue = (index) => {
        setEditIndex(index);
        setInputValue(tasks[index]);
    };
    const saveEdit = () => {
        if (editIndex !== null && inputValue.trim() !== '') {
            const updatedTasks = [...tasks];
            updatedTasks[editIndex] = inputValue;
            setTasks(updatedTasks);
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
            setInputValue('');
            setEditIndex(null);
        }
    };
    return (<div>
      <form style={{ width: "500px" }}>
        <h2>Danh sách công việc</h2>
        <input style={{ width: "350px" }} value={inputValue} onChange={inputValueHandler} type="text" placeholder='Nhập đi please!!!'/>
        {editIndex !== null ? (<button type="button" onClick={saveEdit}>
            Save
          </button>) : (<button type="button" onClick={clickHandler}>
            Add
          </button>)}
      </form>
      <div>  
        {tasks.map((task, index) => (<div key={index} style={{ display: "flex", justifyContent: "space-between", backgroundColor: "red", marginTop: "20px", padding: "10px" }}>
            <div>{task}</div>
            <div>
              <button onClick={() => deleteValue(index)}><i className="fa-solid fa-trash-can"></i></button>
              <button onClick={() => editValue(index)}><i className="fa-solid fa-wrench"></i></button>
            </div>
          </div>))}
      </div>
    </div>);
};
exports.default = Form;
