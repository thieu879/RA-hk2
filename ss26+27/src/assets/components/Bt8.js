"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Header_1 = __importDefault(require("./Header"));
const Menu_1 = __importDefault(require("./Menu"));
const Navbar_1 = __importDefault(require("./Navbar"));
const Carts_1 = __importDefault(require("./Carts"));
const Article_1 = __importDefault(require("./Article"));
function Bt8() {
    return (<>
        Bt8:
        <div>
            <Header_1.default></Header_1.default>
        </div>
        <div style={{ backgroundColor: "#696969" }}>
            <Navbar_1.default></Navbar_1.default>
        </div>
        <div style={{ display: "flex" }}>
              <div style={{ backgroundColor: "#32CD32", width: "20%" }}><Menu_1.default></Menu_1.default></div>
              <div style={{ display: "flex", gap: "10px", padding: "10px", width: "100%", justifyContent: "center", alignItems: "center" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "100%" }}>
                  <Carts_1.default></Carts_1.default>
                  <Carts_1.default></Carts_1.default>
                  <Carts_1.default></Carts_1.default>
                  <Carts_1.default></Carts_1.default>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "100%" }}>
                  <Carts_1.default></Carts_1.default>
                  <Carts_1.default></Carts_1.default>
                  <Carts_1.default></Carts_1.default>
                  <Carts_1.default></Carts_1.default>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "100%" }}>
                  <Carts_1.default></Carts_1.default>
                  <Carts_1.default></Carts_1.default>
                  <Carts_1.default></Carts_1.default>
                  <Carts_1.default></Carts_1.default>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "100%" }}>
                  <Carts_1.default></Carts_1.default>
                  <Carts_1.default></Carts_1.default>
                  <Carts_1.default></Carts_1.default>
                  <Carts_1.default></Carts_1.default>
              </div>
              </div>
            <div style={{ backgroundColor: "#00BFFF", width: "20%" }}><Article_1.default></Article_1.default></div>
        </div>
      </>);
}
exports.default = Bt8;
