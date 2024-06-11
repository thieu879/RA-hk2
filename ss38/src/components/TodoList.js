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
function TodoList() {
    // Khai báo state trước
    const initial = {
        todos: [],
        isloading: false,
        todo: {
            id: 0,
            name: '',
            status: false,
        },
    };
    // Khởi tạo hàm useReducer
    const reducer = (state = initial, action) => {
        switch (action.type) {
            case 'CHANGE-INPUT':
                return Object.assign(Object.assign({}, state), { todo: Object.assign(Object.assign({}, state.todo), { name: action.payload }) });
            case 'HANDLE-ADD':
                const existingTodoIndex = state.todos.findIndex((todo) => todo.id === action.payload.id);
                let updatedTodos;
                if (existingTodoIndex >= 0) {
                    updatedTodos = state.todos.map((todo, index) => index === existingTodoIndex ? action.payload : todo);
                }
                else {
                    updatedTodos = [...state.todos, Object.assign(Object.assign({}, action.payload), { id: Date.now() })];
                }
                localStorage.setItem('todos', JSON.stringify(updatedTodos));
                return Object.assign(Object.assign({}, state), { todos: updatedTodos, todo: initial.todo });
            case 'LOAD-TODOS':
                return Object.assign(Object.assign({}, state), { todos: action.payload });
            case 'HANDLE-DELETE':
                const filteredTodos = state.todos.filter((todo) => todo.id !== action.payload);
                localStorage.setItem('todos', JSON.stringify(filteredTodos));
                return Object.assign(Object.assign({}, state), { todos: filteredTodos });
            case 'HANDLE-FIX':
                return Object.assign(Object.assign({}, state), { todo: action.payload });
            default:
                return state;
        }
    };
    const [state, dispatch] = (0, react_1.useReducer)(reducer, initial);
    // lấy giá trị ô input
    const handleChange = (e) => {
        let inputValue = e.target.value;
        dispatch(action('CHANGE-INPUT', inputValue));
    };
    // khởi tao hàm tạo action
    const action = (type, payload) => {
        return {
            type: type,
            payload: payload,
        };
    };
    // khai báo hàm thêm công việc
    const handleAdd = () => {
        if (state.todo.name.trim() === '')
            return;
        dispatch(action('HANDLE-ADD', state.todo));
    };
    (0, react_1.useEffect)(() => {
        const savedTodos = localStorage.getItem('todos');
        if (savedTodos) {
            dispatch(action('LOAD-TODOS', JSON.parse(savedTodos)));
        }
    }, []);
    // xoá
    const handleDelete = (id) => {
        dispatch(action('HANDLE-DELETE', id));
    };
    // sửa
    const handleFix = (todo) => {
        dispatch(action('HANDLE-FIX', todo));
    };
    return (<div>
      <input value={state.todo.name} onChange={handleChange} type="text"/>
      <button onClick={handleAdd}>
        {state.todo.id === 0 ? 'thầy thêm đi mà' : 'thầy sửa đi mà'}
      </button>
      <p>Danh sách công việc</p>
      <ul>
        {state.todos.map((item, index) => {
            return (<li key={item.id}>
              {item.name} <button onClick={() => handleFix(item)}>sửa</button> <button onClick={() => handleDelete(item.id)}>xoá</button>
            </li>);
        })}
      </ul>
    </div>);
}
exports.default = TodoList;
