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
    const [radio, setRadio] = (0, react_1.useState)("");
    const handleRadioChange = (e) => {
        setRadio(e.target.value);
    };
    return (<div>
            Bt9:
            <br />
            <p>Giới tính: {radio}</p>
            <input value="nam" type="radio" checked={radio === "nam"} onChange={handleRadioChange}/>
            <label htmlFor="nam">Nam</label>
            <br />
            <input value="nữ" type="radio" checked={radio === "nữ"} onChange={handleRadioChange}/>
            <label htmlFor="nữ">Nữ</label>
            <br />
            <input value="khác" type="radio" checked={radio == "khác"} onChange={handleRadioChange}/>
            <label htmlFor="khác">Khác</label>
        </div>);
}
exports.default = Bt9;
