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
function Bt9() {
    const [user, setUser] = (0, react_1.useState)({
        Email: "",
        password: ""
    });
    const inputData = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUser(Object.assign(Object.assign({}, user), { [name]: value }));
    };
    const submit = () => {
        console.log(user);
    };
    return (<div>Bt9:
          <br />
          <h3>Form</h3>
          <label htmlFor="">Email</label>
          <input onChange={inputData} name='Email' type="text"/>
          <br />
          <label htmlFor="">Mật khẩu</label>
          <input onChange={inputData} name='password' type="text"/>
          <br />
          <button onClick={submit}>Submit</button>
          <p>Email: {user.Email}</p>
          <p>Mật khẩu: {user.password}</p>
          
    </div>);
}
exports.default = Bt9;
