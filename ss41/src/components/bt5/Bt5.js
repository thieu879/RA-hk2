"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function Bt5() {
    return (<div>
        Bt5:
        <br />
        <div className="relative size-[300px] bg-blue-500">
            Static parent
            <div className="absolute w-auto bottom-0 left-0 size-[20px] bg-red-500">
                Absolute child
            </div>
        </div>
    </div>);
}
exports.default = Bt5;
