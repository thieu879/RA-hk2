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
function Bt10() {
    const genders = ["Nam", "Nữ", "Khác"];
    const [randomGender, setRandomGender] = (0, react_1.useState)("Nam");
    const getRandomGender = () => {
        const randomIndex = Math.floor(Math.random() * genders.length);
        setRandomGender(genders[randomIndex]);
    };
    return (<div>
      <div>
        Bt10:
        <br />
        <h2>Giới tính hiện tại: {randomGender}</h2>
        <button onClick={getRandomGender}>Random gender</button>
      </div>
    </div>);
}
exports.default = Bt10;
