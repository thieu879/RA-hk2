"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Header_1 = __importDefault(require("./Header"));
const Menu_1 = __importDefault(require("./Menu"));
const Main_1 = __importDefault(require("./Main"));
const Footer_1 = __importDefault(require("./Footer"));
function Bt7() {
    return (<>
        BT7:
      <Header_1.default></Header_1.default>
      <div style={{ display: "flex" }}>
        <div style={{ backgroundColor: "#6495ED", height: "300px", width: "100px" }}>
          <Menu_1.default></Menu_1.default>
        </div>
        <div style={{ width: "100%" }}>
          <Main_1.default></Main_1.default>
          <Footer_1.default></Footer_1.default>
        </div>
      </div>
      </>);
}
exports.default = Bt7;
