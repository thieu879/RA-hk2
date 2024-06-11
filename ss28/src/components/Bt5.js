"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ChildOfBt5_1 = __importDefault(require("./ChildOfBt5"));
const Bt5 = () => {
    const product = {
        id: 1,
        name: 'Nhà',
        price: 1099,
        quantity: 1
    };
    return (<div>
      <h2>Bt5</h2>
      <ChildOfBt5_1.default product={product}/>
    </div>);
};
exports.default = Bt5;
