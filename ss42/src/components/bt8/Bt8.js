"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Tab_1 = __importDefault(require("react-bootstrap/Tab"));
const Tabs_1 = __importDefault(require("react-bootstrap/Tabs"));
function Bt8() {
    return (<div>
        Bt8:
        <br />
        <Tabs_1.default defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
            <Tab_1.default eventKey="home" title="trang chủ">
                Đây là trang chủ
            </Tab_1.default>
            <Tab_1.default eventKey="profile" title="Giới Thiệu">
                Đây là Giới Thiệu
            </Tab_1.default>
            <Tab_1.default eventKey="contact" title="Liên Hệ">
                Đây là Liên Hệ
            </Tab_1.default>
        </Tabs_1.default>
    </div>);
}
exports.default = Bt8;
