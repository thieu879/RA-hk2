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
function Bt3() {
    const [selectedButton, setSelectedButton] = (0, react_1.useState)('Trang chủ');
    const focusButton = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        if (focusButton.current && selectedButton === 'Trang chủ') {
            focusButton.current.focus();
        }
    }, [selectedButton]);
    const handleButtonClick = (buttonName) => {
        setSelectedButton(buttonName);
    };
    return (<div>
            Bt3:
            <br />
            <button ref={focusButton} style={{ backgroundColor: selectedButton === 'Trang chủ' ? 'gray' : 'white' }} onClick={() => handleButtonClick('Trang chủ')}>
                Trang chủ
            </button>
            <button style={{ backgroundColor: selectedButton === 'Sản phẩm' ? 'gray' : 'white' }} onClick={() => handleButtonClick('Sản phẩm')}>
                Sản phẩm
            </button>
            <button style={{ backgroundColor: selectedButton === 'Giới thiệu' ? 'gray' : 'white' }} onClick={() => handleButtonClick('Giới thiệu')}>
                Giới thiệu
            </button>
            <button style={{ backgroundColor: selectedButton === 'Liên hệ' ? 'gray' : 'white' }} onClick={() => handleButtonClick('Liên hệ')}>
                Liên hệ
            </button>
        </div>);
}
exports.default = Bt3;
