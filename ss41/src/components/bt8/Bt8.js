"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function Bt8() {
    return (<div>
        Bt8:
        <br />
        <div className="flex justify-start gap-3">
            <button className='bg-blue-500 p-3'>01</button>
            <button className='bg-blue-500 p-3'>02</button>
            <button className='bg-blue-500 p-3'>03</button>
        </div><br />
        <div className="flex justify-end gap-3">
            <button className='bg-blue-500 p-3'>01</button>
            <button className='bg-blue-500 p-3'>02</button>
            <button className='bg-blue-500 p-3'>03</button>
        </div><br />
        <div className="flex justify-center gap-3">
            <button className='bg-blue-500 p-3'>01</button>
            <button className='bg-blue-500 p-3'>02</button>
            <button className='bg-blue-500 p-3'>03</button>
        </div><br />
        <div className="flex justify-between gap-3">
            <button className='bg-blue-500 p-3'>01</button>
            <button className='bg-blue-500 p-3'>02</button>
            <button className='bg-blue-500 p-3'>03</button>
        </div><br />
        <div className="flex justify-around gap-3">
            <button className='bg-blue-500 p-3'>01</button>
            <button className='bg-blue-500 p-3'>02</button>
            <button className='bg-blue-500 p-3'>03</button>
        </div>
    </div>);
}
exports.default = Bt8;
