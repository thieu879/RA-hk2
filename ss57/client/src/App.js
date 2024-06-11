"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ListFruit_1 = __importDefault(require("./components/bt7,8,9,10,11/ListFruit"));
function App() {
    return (<div>
      {/* <GetAllProduct></GetAllProduct> */}
      {/* <GetProductById></GetProductById> */}
      {/* <RemoveProductById></RemoveProductById> */}
      {/* <CreateProduct></CreateProduct> */}
      {/* <UpdateProductById></UpdateProductById> */}
      <ListFruit_1.default></ListFruit_1.default>
    </div>);
}
exports.default = App;
