"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Button_1 = __importDefault(require("react-bootstrap/Button"));
const Card_1 = __importDefault(require("react-bootstrap/Card"));
function Bt3() {
    return (<div>
        Bt3:
          <br />
          <div style={{ display: "flex", gap: "30px" }}>
            <Card_1.default style={{ width: '18rem' }}>
                <Card_1.default.Img variant="top" src="./src/img/439557114_427673816652908_3102380687171857690_n.jpg"/>
                <Card_1.default.Body>
                    <Card_1.default.Title>Card Title</Card_1.default.Title>
                    <Card_1.default.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card_1.default.Text>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px" }}>
                        <Button_1.default variant="primary">Go somewhere</Button_1.default>
                        <Card_1.default.Text>30.000.000 đ</Card_1.default.Text>
                    </div>
                </Card_1.default.Body>
            </Card_1.default>
            <Card_1.default style={{ width: '18rem' }}>
                <Card_1.default.Img variant="top" src="./src/img/439557114_427673816652908_3102380687171857690_n.jpg"/>
                <Card_1.default.Body>
                    <Card_1.default.Title>Card Title</Card_1.default.Title>
                    <Card_1.default.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card_1.default.Text>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px" }}>
                        <Button_1.default variant="primary">Go somewhere</Button_1.default>
                        <Card_1.default.Text>30.000.000 đ</Card_1.default.Text>
                    </div>
                </Card_1.default.Body>
            </Card_1.default>
          </div>
    </div>);
}
exports.default = Bt3;
